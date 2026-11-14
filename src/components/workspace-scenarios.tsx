'use client';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useState } from 'react';
import { calculateScenario, DEFAULT_SCENARIO, type ScenarioInputs } from '@/lib/workspace';
import { useWorkspace } from '@/lib/workspace-store';
const fields: Array<{key:keyof ScenarioInputs;label:string;min:number;max:number;step:number}> = [
 {key:'baselineRevenue',label:'Baseline revenue ($)',min:100000,max:10000000,step:50000},
 {key:'priceChangePct',label:'Pricing change (%)',min:-30,max:30,step:1},
 {key:'demandChangePct',label:'Demand change (%)',min:-30,max:30,step:1},
 {key:'marketingSpend',label:'Marketing spend ($)',min:0,max:500000,step:5000},
 {key:'hiringCount',label:'Additional hires',min:0,max:50,step:1},
 {key:'salaryPerHire',label:'Annual cost per hire ($)',min:30000,max:200000,step:5000},
 {key:'variableCostPct',label:'Variable cost as % revenue',min:0,max:90,step:1},
];
const money=(n:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
export function WorkspaceScenarios() {
  const {inputs,setInputs,department,role}=useWorkspace();
  const [shareStatus,setShareStatus]=useState('');
  async function shareScenario(){
    setShareStatus('Publishing...');
    try {
      const result=calculateScenario(inputs);
      const response=await fetch('/api/events',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({department,priority:result.profitDelta<0?'high':'normal',actor:role+' demo',type:'scenario',message:'Scenario: projected revenue '+money(result.revenue)+', operating profit '+money(result.operatingProfit)+', profit change '+money(result.profitDelta)})});
      if(!response.ok) throw new Error('Could not share scenario');
      setShareStatus('Scenario published to the routed department feeds.');
    } catch(e){setShareStatus(e instanceof Error?e.message:'Could not share scenario');}
  }
  const result=calculateScenario(inputs);
  const base=calculateScenario(DEFAULT_SCENARIO);
  const chart=[
    {name:'Revenue',Baseline:base.revenue,Scenario:result.revenue},
    {name:'Operating cost',Baseline:base.operatingCost,Scenario:result.operatingCost},
    {name:'Operating profit',Baseline:base.operatingProfit,Scenario:result.operatingProfit}
  ];
  return <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
    <div><h2 className="text-2xl font-semibold">Cross-functional scenario planning</h2><p className="text-sm text-slate-600">Deterministic what-if calculations, not an AI prediction. Every change updates Finance, Sales, and Operations projections together.</p></div>
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {fields.map(f=><label className="block text-sm" key={f.key}>{f.label}<input type="number" aria-label={f.label} className="mt-1 block w-full rounded border p-2" min={f.min} max={f.max} step={f.step} value={inputs[f.key]} onChange={e=>{const n=Number(e.target.value);if(Number.isFinite(n))setInputs({[f.key]:Math.min(f.max,Math.max(f.min,n))});}}/></label>)}
        <button className="rounded border p-2 text-sm" onClick={()=>setInputs(DEFAULT_SCENARIO)}>Reset assumptions</button>
      </div>
      <div className="h-80 min-w-0" role="img" aria-label="Comparison of baseline and scenario revenue, costs, and operating profit"><ResponsiveContainer width="100%" height="100%"><BarChart data={chart} margin={{top:12,right:10,left:8,bottom:10}}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="name"/><YAxis tickFormatter={v=>'$'+(Number(v)/1000000).toFixed(1)+'m'}/><Tooltip formatter={value=>money(Number(value))}/><Legend/><Bar dataKey="Baseline" fill="#a1a1aa"/><Bar dataKey="Scenario" fill="#7c3aed"/></BarChart></ResponsiveContainer></div>
    </div>
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="rounded bg-violet-50 p-4"><div className="text-sm">Sales · projected revenue</div><div className="text-xl font-semibold">{money(result.revenue)}</div></div>
      <div className="rounded bg-violet-50 p-4"><div className="text-sm">Operations · hiring cost</div><div className="text-xl font-semibold">{money(result.hiringCost)}</div></div>
      <div className="rounded bg-violet-50 p-4"><div className="text-sm">Finance · operating cash flow proxy</div><div className="text-xl font-semibold">{money(result.cashFlow)}</div></div>
    </div>
    <div className="flex flex-wrap items-center gap-3"><button onClick={shareScenario} disabled={role==='viewer'} className="rounded bg-violet-700 px-4 py-2 text-white disabled:opacity-40">Share scenario to department feeds</button><span role="status" className="text-sm text-slate-600">{shareStatus}</span></div>
    <p className="text-xs text-slate-500">Simplified annual illustration. Cash flow is approximated using operating profit; financing, taxes, working capital, and depreciation are excluded.</p>
  </section>;
}
