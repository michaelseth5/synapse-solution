import { EmployeeProfileHero } from '@/components/employee-profile-hero';
import { EmployeeDetails } from '@/components/employee-details';
import { EmployeeTasks } from '@/components/employee-tasks';
import { EmployeeTimeline } from '@/components/employee-timeline';
import { EmployeeCollaboration } from '@/components/employee-collaboration';

export default function EmployeeProfile() {
  return (
    <div className="min-h-screen">
      <EmployeeProfileHero />
      <EmployeeDetails />
      <EmployeeTasks />
      <EmployeeTimeline />
      <EmployeeCollaboration />
    </div>
  );
}
