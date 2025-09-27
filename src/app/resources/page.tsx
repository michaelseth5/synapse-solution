import { ResourcesHero } from '@/components/resources-hero';
import { CaseStudies } from '@/components/case-studies';
import { BlogPosts } from '@/components/blog-posts';
import { ResearchPapers } from '@/components/research-papers';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <ResourcesHero />
      <CaseStudies />
      <BlogPosts />
      <ResearchPapers />
    </div>
  );
}
