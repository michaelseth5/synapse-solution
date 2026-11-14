import Link from 'next/link';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { DashboardPreview } from '@/components/dashboard-preview';
import { Stats } from '@/components/stats';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="bg-violet-950 px-5 py-8 text-center text-white"><h2 className="text-2xl font-bold">Try the functional collaboration workspace</h2><p className="mx-auto mt-2 max-w-2xl text-violet-100">Cross-department SSE alerts, priority routing, and interactive financial scenarios.</p><Link href="/workspace" className="mt-4 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-violet-900">Open live workspace</Link></section>
      <Stats />
      <Features />
      <DashboardPreview />
      <Testimonials />
    </div>
  );
}