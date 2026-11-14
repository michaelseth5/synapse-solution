import { describe, expect, it } from 'vitest';
import { calculateScenario, DEFAULT_SCENARIO, routingFor, validateEvent } from './workspace';
describe('scenario calculations',()=>{
 it('preserves baseline revenue',()=>expect(calculateScenario(DEFAULT_SCENARIO).revenue).toBe(2000000));
 it('cascades price change to revenue and costs',()=>{
   const result=calculateScenario({...DEFAULT_SCENARIO,priceChangePct:10});
   expect(result.revenue).toBe(2200000);
   expect(result.variableCosts).toBe(770000);
 });
 it('incorporates hiring into operations and profit',()=>{
   const result=calculateScenario({...DEFAULT_SCENARIO,hiringCount:2});
   expect(result.hiringCost).toBe(180000);
   expect(result.operatingProfit).toBe(calculateScenario(DEFAULT_SCENARIO).operatingProfit-180000);
 });
});
describe('alert routing',()=>{
 it('routes critical across all teams',()=>expect(routingFor('critical','Sales')).toHaveLength(3));
 it('routes normal to origin',()=>expect(routingFor('normal','Sales')).toEqual(['Sales']));
 it('routes high to other departments',()=>expect(routingFor('high','Sales')).toEqual(['Finance','Operations']));
 it('rejects invalid payloads',()=>expect(validateEvent({department:'Sales',priority:'high',message:'' ,actor:'demo'}).ok).toBe(false));
 it('creates server-generated IDs and timestamps',()=>{
   const result=validateEvent({department:'Sales',priority:'high',message:'Deal closed',actor:'demo'});
   expect(result.ok).toBe(true);
   if(result.ok){expect(result.event.id).toBeTruthy();expect(result.event.targetDepartments).toEqual(['Finance','Operations']);}
 });
});
