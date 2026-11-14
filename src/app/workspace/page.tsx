import { WorkspaceLive } from '@/components/workspace-live';
import { WorkspaceScenarios } from '@/components/workspace-scenarios';
export const metadata = { title: 'Collaboration Workspace | Synapse Solution', description:'Live demo of alert routing and cross-functional scenario planning' };
export default function WorkspacePage() {
 return <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900">
  <div className="mx-auto max-w-6xl space-y-8">
    <header className="space-y-3"><a href="/" className="text-sm text-violet-700 hover:underline">← Back to Synapse</a><p className="text-sm font-semibold uppercase tracking-wide text-violet-700">Synapse Solution · Functional demo</p><h1 className="text-4xl font-bold">Collaboration workspace</h1><p className="max-w-3xl text-slate-600">Test server-sent cross-department alerts, priority routing, a role-selection demonstration, Zustand state, and interactive Recharts scenario projections. Open this page in two tabs to see events delivered live.</p></header>
    <WorkspaceLive/><WorkspaceScenarios/>
  </div>
 </main>;
}
