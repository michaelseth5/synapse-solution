import { FogoRestaurantHero } from '@/components/demos/fogo-restaurant-hero';
import { FogoRestaurantWorkflow } from '@/components/demos/fogo-restaurant-workflow';
import { FogoRestaurantTimeline } from '@/components/demos/fogo-restaurant-timeline';
import { FogoRestaurantCoordination } from '@/components/demos/fogo-restaurant-coordination';
import { FogoRestaurantResults } from '@/components/demos/fogo-restaurant-results';

export default function FogoRestaurantDemo() {
  return (
    <div className="min-h-screen">
      <FogoRestaurantHero />
      <FogoRestaurantWorkflow />
      <FogoRestaurantTimeline />
      <FogoRestaurantCoordination />
      <FogoRestaurantResults />
    </div>
  );
}
