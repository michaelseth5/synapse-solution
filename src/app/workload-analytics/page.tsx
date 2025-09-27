import { WorkloadAnalyticsHero } from '@/components/workload-analytics-hero';
import { WorkloadDashboard } from '@/components/workload-dashboard';
import { CapacityPlanning } from '@/components/capacity-planning';
import { PerformanceMetrics } from '@/components/performance-metrics';
import { ResourceOptimization } from '@/components/resource-optimization';

export default function WorkloadAnalytics() {
  return (
    <div className="min-h-screen">
      <WorkloadAnalyticsHero />
      <WorkloadDashboard />
      <CapacityPlanning />
      <PerformanceMetrics />
      <ResourceOptimization />
    </div>
  );
}
