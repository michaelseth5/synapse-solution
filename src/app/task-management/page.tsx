import { TaskManagementHero } from '@/components/task-management-hero';
import { TaskBoard } from '@/components/task-board';
import { TaskAnalytics } from '@/components/task-analytics';
import { TaskDependencies } from '@/components/task-dependencies';
import { TaskAutomation } from '@/components/task-automation';

export default function TaskManagement() {
  return (
    <div className="min-h-screen">
      <TaskManagementHero />
      <TaskBoard />
      <TaskAnalytics />
      <TaskDependencies />
      <TaskAutomation />
    </div>
  );
}
