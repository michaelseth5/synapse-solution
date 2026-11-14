'use client';
import { useEffect, useState } from 'react';
import { useWorkspace } from '@/lib/workspace-store';
import { canPublish, DEPARTMENTS, type Department, type Priority, type Role } from '@/lib/workspace';
export function WorkspaceLive() {
  const {department,role,events,connection,setDepartment,setRole,setEvents,receive,setConnection} = useWorkspace();
  const [message,setMessage] = useState('');
  const [priority,setPriority] = useState<Priority>('normal');
  const [error,setError] = useState('');
  const [sending,setSending] = useState(false);
  useEffect(() => {
    const source = new EventSource('/api/events');
    source.onopen = () => setConnection('connected');
    source.onerror = () => setConnection('disconnected');
    source.onmessage = (msg: MessageEvent) => {
      try {
        const payload=JSON.parse(msg.data);
        if(payload.kind==='snapshot') setEvents(payload.events);
        if(payload.kind==='event') receive(payload.event);
      } catch { setConnection('disconnected'); }
    };
    return () => {source.close();setConnection('disconnected');};
  },[setConnection,setEvents,receive]);
  async function send() {
    if (!canPublish(role)) return;
    setSending(true);setError('');
    try {
      const response=await fetch('/api/events',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({department,priority,message,actor:role+' demo'})});
      const result=await response.json();
      if(!response.ok) throw new Error(result.error || 'Unable to publish');
      setMessage('');
    } catch (e) {setError(e instanceof Error ? e.message : 'Event failed');}
    finally {setSending(false);}
  }
  const routed=events.filter(e => e.targetDepartments.includes(department));
  return <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
    <div><h2 className="text-2xl font-semibold">Cross-department alert center</h2><p className="text-sm text-slate-600">Actual server-sent events between connected tabs on the same server process. This is a demo, not a production message broker.</p></div>
    <div className="grid gap-3 md:grid-cols-3">
      <label className="text-sm">Department<select aria-label="Department" value={department} onChange={e=>setDepartment(e.target.value as Department)} className="mt-1 block w-full rounded border p-2">{DEPARTMENTS.map(d=><option key={d}>{d}</option>)}</select></label>
      <label className="text-sm">Demo role<select aria-label="Demo role" value={role} onChange={e=>setRole(e.target.value as Role)} className="mt-1 block w-full rounded border p-2"><option value="viewer">Viewer</option><option value="contributor">Contributor</option><option value="manager">Manager</option></select></label>
      <div className="text-sm">Stream status<div role="status" className="mt-1 rounded border p-2">{connection}</div></div>
    </div>
    <p className="text-xs text-amber-700">Role selection simulates UI authorization only; API writes are not authenticated. Do not use sensitive data.</p>
    <div className="flex flex-col gap-3 md:flex-row">
      <input aria-label="Alert message" className="min-w-0 flex-1 rounded border p-2" placeholder="Describe a budget, sales, or operations update" value={message} onChange={e=>setMessage(e.target.value)}/>
      <select aria-label="Alert priority" className="rounded border p-2" value={priority} onChange={e=>setPriority(e.target.value as Priority)}><option value="normal">Normal → own department</option><option value="high">High → other departments</option><option value="critical">Critical → all departments</option></select>
      <button className="rounded bg-violet-700 px-4 py-2 text-white disabled:opacity-40" disabled={sending || !canPublish(role) || !message.trim()} onClick={send}>Publish alert</button>
    </div>
    {error && <p role="alert" className="text-red-700">{error}</p>}
    <div aria-live="polite" className="space-y-2"><h3 className="font-semibold">Alerts routed to {department} ({routed.length})</h3>
      {routed.length===0 && <p className="text-sm text-slate-500">No routed alerts yet. Publish one or open a second tab.</p>}
      {routed.map(e=><article key={e.id} className="rounded border border-slate-200 p-3">
        <div className="flex flex-wrap justify-between gap-2"><strong className="text-sm">{e.priority.toUpperCase()} · {e.department}</strong><time className="text-xs text-slate-500">{new Date(e.timestamp).toLocaleString()}</time></div>
        <p className="text-sm">{e.message}</p><p className="text-xs text-slate-500">Routed to: {e.targetDepartments.join(', ')}</p>
      </article>)}
    </div>
  </section>;
}
