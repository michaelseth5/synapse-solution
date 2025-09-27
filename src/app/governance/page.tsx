import { GovernanceHero } from '@/components/governance-hero';
import { PrivacyControls } from '@/components/privacy-controls';
import { AuditTrail } from '@/components/audit-trail';
import { ExportFeatures } from '@/components/export-features';

export default function GovernancePage() {
  return (
    <div className="min-h-screen">
      <GovernanceHero />
      <PrivacyControls />
      <AuditTrail />
      <ExportFeatures />
    </div>
  );
}
