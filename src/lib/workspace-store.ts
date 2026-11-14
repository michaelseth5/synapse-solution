'use client';
import { create } from 'zustand';
import type { Department, Role, WorkspaceEvent, ScenarioInputs } from './workspace';
import { DEFAULT_SCENARIO } from './workspace';
type State = {
  department: Department; role: Role; events: WorkspaceEvent[]; inputs: ScenarioInputs;
  connection: 'connecting' | 'connected' | 'disconnected';
  setDepartment: (department: Department) => void; setRole: (role: Role) => void;
  setEvents: (events: WorkspaceEvent[]) => void; receive: (event: WorkspaceEvent) => void;
  setInputs: (inputs: Partial<ScenarioInputs>) => void;
  setConnection: (connection: State['connection']) => void;
};
export const useWorkspace = create<State>(set => ({
  department: 'Finance', role: 'manager', events: [], inputs: DEFAULT_SCENARIO, connection: 'connecting',
  setDepartment: department => set({department}), setRole: role => set({role}),
  setEvents: events => set({events}),
  receive: event => set(s => ({events: s.events.some(e => e.id === event.id) ? s.events : [event,...s.events].slice(0,100)})),
  setInputs: patch => set(s => ({inputs:{...s.inputs,...patch}})),
  setConnection: connection => set({connection}),
}));
