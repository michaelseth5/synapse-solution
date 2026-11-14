import type { WorkspaceEvent } from './workspace';
type Listener = (event: WorkspaceEvent) => void;
type Hub = { listeners: Set<Listener>; history: WorkspaceEvent[] };
const registry = globalThis as typeof globalThis & { __synapseHub?: Hub };
const hub: Hub = registry.__synapseHub ?? (registry.__synapseHub = { listeners: new Set(), history: [] });
export function subscribe(listener: Listener) { hub.listeners.add(listener); return () => hub.listeners.delete(listener); }
export function publish(event: WorkspaceEvent) {
  hub.history.unshift(event); hub.history=hub.history.slice(0,100);
  hub.listeners.forEach(listener => { try { listener(event); } catch { /* keep other listeners alive */ } });
}
export function history() { return [...hub.history]; }
