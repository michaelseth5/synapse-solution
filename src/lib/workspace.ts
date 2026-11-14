export type Department = 'Finance' | 'Sales' | 'Operations';
export type Priority = 'critical' | 'high' | 'normal';
export type Role = 'viewer' | 'contributor' | 'manager';
export type WorkspaceEvent = {
  id: string; type: 'alert' | 'decision' | 'scenario'; department: Department;
  targetDepartments: Department[]; priority: Priority; message: string;
  timestamp: string; actor: string;
};
export type ScenarioInputs = { baselineRevenue: number; priceChangePct: number; demandChangePct: number; marketingSpend: number; hiringCount: number; salaryPerHire: number; variableCostPct: number };
export const DEFAULT_SCENARIO: ScenarioInputs = { baselineRevenue: 2000000, priceChangePct: 0, demandChangePct: 0, marketingSpend: 120000, hiringCount: 0, salaryPerHire: 90000, variableCostPct: 35 };
export function calculateScenario(x: ScenarioInputs) {
  const revenue = x.baselineRevenue * (1 + x.priceChangePct / 100) * (1 + x.demandChangePct / 100);
  const variableCosts = revenue * x.variableCostPct / 100;
  const hiringCost = x.hiringCount * x.salaryPerHire;
  const operatingCost = variableCosts + x.marketingSpend + hiringCost;
  const operatingProfit = revenue - operatingCost;
  const cashFlow = operatingProfit;
  const baselineVariableCosts = x.baselineRevenue * x.variableCostPct / 100;
  const baselineProfit = x.baselineRevenue - baselineVariableCosts - 120000;
  return { revenue, variableCosts, hiringCost, operatingCost, operatingProfit, cashFlow, profitDelta: operatingProfit - baselineProfit };
}
export const DEPARTMENTS: Department[] = ['Finance', 'Sales', 'Operations'];
export const CAN_PUBLISH: Role[] = ['contributor', 'manager'];
export function canPublish(role: Role) { return CAN_PUBLISH.includes(role); }
export function routingFor(priority: Priority, origin: Department): Department[] {
  return priority === 'critical' ? DEPARTMENTS : priority === 'high' ? DEPARTMENTS.filter(d => d !== origin) : [origin];
}
export function validateEvent(input: unknown): {ok: true; event: WorkspaceEvent} | {ok: false; error: string} {
  if (!input || typeof input !== 'object') return {ok:false,error:'Invalid payload'};
  const e = input as Partial<WorkspaceEvent>;
  if (!DEPARTMENTS.includes(e.department as Department) || !['critical','high','normal'].includes(e.priority as string)) return {ok:false,error:'Invalid department or priority'};
  if (typeof e.message !== 'string' || e.message.trim().length < 1 || e.message.length > 500) return {ok:false,error:'Message must be 1–500 characters'};
  if (typeof e.actor !== 'string' || e.actor.length > 80) return {ok:false,error:'Invalid actor'};
  const priority=e.priority as Priority;
  return {ok:true,event:{ id:crypto.randomUUID(), type:e.type === 'scenario' ? 'scenario' : 'alert', department:e.department as Department, priority, targetDepartments:routingFor(priority,e.department as Department), message:e.message.trim(), actor:e.actor, timestamp:new Date().toISOString() }};
}
