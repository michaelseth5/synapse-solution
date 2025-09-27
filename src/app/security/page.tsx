import { SecurityHero } from '@/components/security-hero';
import { SecurityFeatures } from '@/components/security-features';
import { ComplianceStandards } from '@/components/compliance-standards';
import { SecurityArchitecture } from '@/components/security-architecture';

export default function SecurityPage() {
  return (
    <div className="min-h-screen">
      <SecurityHero />
      <SecurityFeatures />
      <ComplianceStandards />
      <SecurityArchitecture />
    </div>
  );
}
