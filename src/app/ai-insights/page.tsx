import { AIInsightsHero } from '@/components/ai-insights-hero';
import { PredictiveAnalytics } from '@/components/predictive-analytics';
import { SmartRecommendations } from '@/components/smart-recommendations';
import { AnomalyDetection } from '@/components/anomaly-detection';
import { AIWorkflow } from '@/components/ai-workflow';

export default function AIInsights() {
  return (
    <div className="min-h-screen">
      <AIInsightsHero />
      <PredictiveAnalytics />
      <SmartRecommendations />
      <AnomalyDetection />
      <AIWorkflow />
    </div>
  );
}
