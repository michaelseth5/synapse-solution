import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { DashboardPreview } from '@/components/dashboard-preview';
import { Stats } from '@/components/stats';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <DashboardPreview />
      <Testimonials />
    </div>
  );
}