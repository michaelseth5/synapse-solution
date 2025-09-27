import { DataSourcesHero } from '@/components/data-sources-hero';
import { DataSourcesGrid } from '@/components/data-sources-grid';
import { IntegrationBenefits } from '@/components/integration-benefits';

export default function DataSourcesPage() {
  return (
    <div className="min-h-screen">
      <DataSourcesHero />
      <DataSourcesGrid />
      <IntegrationBenefits />
    </div>
  );
}
