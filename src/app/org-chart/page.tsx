import { OrgChartHero } from '@/components/org-chart-hero';
import { InteractiveOrgChart } from '@/components/interactive-org-chart';
import { TaskManagement } from '@/components/task-management';

export default function OrgChartPage() {
  return (
    <div className="min-h-screen">
      <OrgChartHero />
      <InteractiveOrgChart />
      <TaskManagement />
    </div>
  );
}
