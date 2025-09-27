'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, ExternalLink, Calendar, Users, FileText, Award } from 'lucide-react';

const researchPapers = [
  {
    id: '1',
    title: 'Agentic AI in Enterprise Operations: A Comprehensive Study',
    authors: ['Dr. Sarah Chen', 'Prof. Michael Rodriguez', 'Dr. Lisa Thompson'],
    institution: 'Stanford University & IBM Research',
    publishDate: '2024-01-10',
    journal: 'Nature Machine Intelligence',
    abstract: 'This study examines the impact of agentic AI systems on enterprise operations, revealing significant improvements in efficiency, decision-making speed, and resource utilization.',
    citations: 127,
    impact: 'High',
    category: 'AI Research',
    tags: ['Agentic AI', 'Enterprise', 'Operations', 'Efficiency'],
    downloadUrl: '#',
    externalUrl: '#'
  },
  {
    id: '2',
    title: 'Data Integration Patterns for Modern Enterprises',
    authors: ['Dr. David Chen', 'Prof. Emily Watson'],
    institution: 'MIT & Gartner Research',
    publishDate: '2024-01-05',
    journal: 'ACM Computing Surveys',
    abstract: 'A comprehensive analysis of data integration patterns and their effectiveness in reducing silos and improving organizational agility.',
    citations: 89,
    impact: 'Medium',
    category: 'Data Science',
    tags: ['Data Integration', 'Enterprise Architecture', 'Silos'],
    downloadUrl: '#',
    externalUrl: '#'
  },
  {
    id: '3',
    title: 'ROI Measurement in AI Implementation Projects',
    authors: ['Dr. James Wilson', 'Prof. Maria Johnson'],
    institution: 'Harvard Business School & McKinsey',
    publishDate: '2023-12-20',
    journal: 'Harvard Business Review',
    abstract: 'A framework for measuring and maximizing return on investment in AI implementation projects across different industries.',
    citations: 203,
    impact: 'High',
    category: 'Business Strategy',
    tags: ['ROI', 'AI Implementation', 'Business Value', 'Metrics'],
    downloadUrl: '#',
    externalUrl: '#'
  },
  {
    id: '4',
    title: 'Security Considerations in Autonomous AI Systems',
    authors: ['Dr. Robert Kim', 'Prof. Jennifer Lee'],
    institution: 'Carnegie Mellon & IBM Security',
    publishDate: '2023-12-15',
    journal: 'IEEE Security & Privacy',
    abstract: 'Critical security considerations and best practices for implementing autonomous AI systems in enterprise environments.',
    citations: 156,
    impact: 'High',
    category: 'Cybersecurity',
    tags: ['AI Security', 'Autonomous Systems', 'Enterprise Security'],
    downloadUrl: '#',
    externalUrl: '#'
  },
  {
    id: '5',
    title: 'Change Management in AI-Driven Organizations',
    authors: ['Dr. Amanda Davis', 'Prof. Thomas Brown'],
    institution: 'Wharton School & Deloitte',
    publishDate: '2023-12-10',
    journal: 'MIT Sloan Management Review',
    abstract: 'Strategies for managing organizational change and cultural transformation when adopting AI technologies.',
    citations: 78,
    impact: 'Medium',
    category: 'Organizational Behavior',
    tags: ['Change Management', 'AI Adoption', 'Culture', 'Transformation'],
    downloadUrl: '#',
    externalUrl: '#'
  },
  {
    id: '6',
    title: 'The Future of Revenue Operations: AI-Powered Growth',
    authors: ['Dr. Christopher Taylor', 'Prof. Rachel Green'],
    institution: 'Salesforce Research & PwC',
    publishDate: '2023-12-05',
    journal: 'Journal of Revenue Operations',
    abstract: 'Exploring how AI is transforming revenue operations and enabling new growth strategies for modern businesses.',
    citations: 94,
    impact: 'Medium',
    category: 'Revenue Operations',
    tags: ['RevOps', 'AI', 'Growth', 'Sales'],
    downloadUrl: '#',
    externalUrl: '#'
  }
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case 'High':
      return 'text-green-600 bg-green-100';
    case 'Medium':
      return 'text-yellow-600 bg-yellow-100';
    case 'Low':
      return 'text-gray-600 bg-gray-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'AI Research':
      return 'from-purple-500 to-purple-600';
    case 'Data Science':
      return 'from-blue-500 to-blue-600';
    case 'Business Strategy':
      return 'from-green-500 to-green-600';
    case 'Cybersecurity':
      return 'from-red-500 to-red-600';
    case 'Organizational Behavior':
      return 'from-orange-500 to-orange-600';
    case 'Revenue Operations':
      return 'from-indigo-500 to-indigo-600';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

export function ResearchPapers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Research Papers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peer-reviewed research and academic papers from leading institutions 
            exploring the latest developments in agentic AI and enterprise operations.
          </p>
        </motion.div>

        <div className="space-y-8">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-soft border border-gray-200 p-8 hover:shadow-soft-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(paper.category)} text-white text-sm font-medium rounded-full`}>
                        {paper.category}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getImpactColor(paper.impact)}`}>
                        {paper.impact} Impact
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Award className="w-4 h-4" />
                      <span>{paper.citations} citations</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {paper.title}
                  </h3>

                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{paper.authors.join(', ')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>{paper.journal}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {paper.abstract}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm text-gray-500">
                    <strong>Institution:</strong> {paper.institution}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-3 lg:w-48">
                  <button className="w-full gradient-purple text-white py-3 px-4 rounded-lg font-semibold hover:shadow-soft transition-all duration-200 flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:border-purple-fintech hover:text-purple-fintech transition-all duration-200 flex items-center justify-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Online</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Research</h3>
            <p className="text-lg mb-6 opacity-90">
              Get notified when new research papers are published and access exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-fintech px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe to Updates
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-fintech transition-colors">
                Browse All Papers
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
