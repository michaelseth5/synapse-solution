import { NextRequest, NextResponse } from 'next/server';
import { history, publish, subscribe } from '@/lib/event-hub';
import { validateEvent } from '@/lib/workspace';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET(request: NextRequest) {
  const encoder = new TextEncoder();
  let cleanup = () => {};
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      let closed = false;
      const send = (event: unknown) => { if (!closed) controller.enqueue(encoder.encode('data: ' + JSON.stringify(event) + '\n\n')); };
      send({kind:'snapshot',events:history()});
      const unsubscribe = subscribe(event => send({kind:'event',event}));
      const heartbeat = setInterval(() => { if (!closed) controller.enqueue(encoder.encode(': heartbeat\n\n')); }, 15000);
      const abort = () => { if (!closed) { closed=true; clearInterval(heartbeat); unsubscribe(); try { controller.close(); } catch {} } };
      request.signal.addEventListener('abort',abort,{once:true});
      cleanup = () => { request.signal.removeEventListener('abort',abort); abort(); };
    },
    cancel() { cleanup(); }
  });
  return new Response(stream, {headers:{'Content-Type':'text/event-stream','Cache-Control':'no-cache, no-transform','Connection':'keep-alive','X-Accel-Buffering':'no'}});
}
export async function POST(request: NextRequest) {
  // Demo-only endpoint. Add server-side authentication and persistent event storage before public multi-user deployment.
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({error:'Invalid JSON'},{status:400}); }
  const parsed = validateEvent(body);
  if (!parsed.ok) return NextResponse.json({error:parsed.error},{status:400});
  publish(parsed.event);
  return NextResponse.json({event:parsed.event},{status:201});
}
