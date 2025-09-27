import { TeamCollaborationHero } from '@/components/team-collaboration-hero';
import { TeamWorkspace } from '@/components/team-workspace';
import { TeamCommunication } from '@/components/team-communication';
import { TeamProjects } from '@/components/team-projects';
import { TeamPerformance } from '@/components/team-performance';

export default function TeamCollaboration() {
  return (
    <div className="min-h-screen">
      <TeamCollaborationHero />
      <TeamWorkspace />
      <TeamCommunication />
      <TeamProjects />
      <TeamPerformance />
    </div>
  );
}
