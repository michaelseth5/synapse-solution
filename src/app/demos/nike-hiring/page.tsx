import { NikeHiringHero } from '@/components/demos/nike-hiring-hero';
import { NikeHiringWorkflow } from '@/components/demos/nike-hiring-workflow';
import { NikeHiringOrgChart } from '@/components/demos/nike-hiring-org-chart';
import { NikeHiringChatbot } from '@/components/demos/nike-hiring-chatbot';
import { NikeHiringResults } from '@/components/demos/nike-hiring-results';

export default function NikeHiringDemo() {
  return (
    <div className="min-h-screen">
      <NikeHiringHero />
      <NikeHiringWorkflow />
      <NikeHiringOrgChart />
      <NikeHiringChatbot />
      <NikeHiringResults />
    </div>
  );
}
