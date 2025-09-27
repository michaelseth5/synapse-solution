'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowRight, Building2, TrendingUp, Users, Clock } from 'lucide-react';

const caseStudies = [
  {
    id: '1',
    title: 'Fortune 500 Retailer Transforms Operations with Agentic AI',
    company: 'Global Retail Corp',
    industry: 'Retail',
    logo: 'GRC',
    challenge: 'Siloed data across 15+ systems causing 30% duplicate work and delayed decisions',
    solution: 'Implemented Synapse Solutions to unify ERP, CRM, and POS systems',
    results: [
      { metric: '40%', description: 'Reduction in duplicate work' },
      { metric: '60%', description: 'Faster decision making' },
      { metric: '$2.3M', description: 'Annual cost savings' }
    ],
    source: 'Harvard Business Review',
    readTime: '8 min read',
    category: 'Operations'
  },
  {
    id: '2',
    title: 'Financial Services Firm Achieves 50% Efficiency Gains',
    company: 'Premier Financial',
    industry: 'Financial Services',
    logo: 'PF',
    challenge: 'Manual processes across compliance, risk management, and client onboarding',
    solution: 'Deployed AI agents to automate workflows and improve data visibility',
    results: [
      { metric: '50%', description: 'Process efficiency improvement' },
      { metric: '75%', description: 'Faster compliance reporting' },
      { metric: '90%', description: 'Reduction in manual errors' }
    ],
    source: 'McKinsey & Company',
    readTime: '12 min read',
    category: 'Finance'
  },
  {
    id: '3',
    title: 'Manufacturing Leader Streamlines Supply Chain Operations',
    company: 'Industrial Solutions Inc',
    industry: 'Manufacturing',
    logo: 'ISI',
    challenge: 'Complex supply chain with multiple vendors and inconsistent data formats',
    solution: 'Integrated all supply chain systems with AI-powered orchestration',
    results: [
      { metric: '35%', description: 'Supply chain visibility improvement' },
      { metric: '25%', description: 'Inventory cost reduction' },
      { metric: '80%', description: 'Faster vendor onboarding' }
    ],
    source: 'IBM Research',
    readTime: '10 min read',
    category: 'Supply Chain'
  },
  {
    id: '4',
    title: 'Healthcare System Improves Patient Care Coordination',
    company: 'Metro Health System',
    industry: 'Healthcare',
    logo: 'MHS',
    challenge: 'Fragmented patient data across multiple departments and systems',
    solution: 'Unified patient records and care coordination with AI assistance',
    results: [
      { metric: '45%', description: 'Faster patient processing' },
      { metric: '30%', description: 'Reduced administrative burden' },
      { metric: '95%', description: 'Patient satisfaction score' }
    ],
    source: 'PwC Health Research',
    readTime: '15 min read',
    category: 'Healthcare'
  },
  {
    id: '5',
    title: 'Technology Company Accelerates Sales Pipeline',
    company: 'TechFlow Solutions',
    industry: 'Technology',
    logo: 'TFS',
    challenge: 'Disconnected sales tools leading to lost opportunities and poor forecasting',
    solution: 'Connected CRM, marketing automation, and project management systems',
    results: [
      { metric: '55%', description: 'Increase in win rate' },
      { metric: '40%', description: 'Faster deal closure' },
      { metric: '$5.2M', description: 'Additional revenue generated' }
    ],
    source: 'Salesforce Research',
    readTime: '7 min read',
    category: 'Sales'
  },
  {
    id: '6',
    title: 'Consulting Firm Enhances Client Delivery',
    company: 'Strategic Partners Group',
    industry: 'Consulting',
    logo: 'SPG',
    challenge: 'Manual project tracking and resource allocation across multiple clients',
    solution: 'Automated project management and resource optimization with AI',
    results: [
      { metric: '60%', description: 'Project delivery efficiency' },
      { metric: '45%', description: 'Resource utilization improvement' },
      { metric: '25%', description: 'Client satisfaction increase' }
    ],
    source: 'CIO Dive',
    readTime: '9 min read',
    category: 'Consulting'
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Operations':
      return 'from-blue-500 to-blue-600';
    case 'Finance':
      return 'from-green-500 to-green-600';
    case 'Supply Chain':
      return 'from-orange-500 to-orange-600';
    case 'Healthcare':
      return 'from-red-500 to-red-600';
    case 'Sales':
      return 'from-purple-500 to-purple-600';
    case 'Consulting':
      return 'from-indigo-500 to-indigo-600';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

export function CaseStudies() {
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real organizations achieving measurable results with Synapse Solutions. 
            Discover how industry leaders are transforming their operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden hover:shadow-soft-lg transition-all duration-300 group"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-fintech to-purple-light rounded-lg flex items-center justify-center text-white font-bold">
                      {study.logo}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-fintech transition-colors">
                        {study.company}
                      </h3>
                      <p className="text-sm text-gray-600">{study.industry}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(study.category)} text-white text-xs font-medium rounded-full`}>
                    {study.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {study.title}
                </h4>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-1">Challenge:</h5>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-1">Solution:</h5>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-900 mb-3">Key Results:</h5>
                  <div className="grid grid-cols-1 gap-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-2xl font-bold text-purple-fintech">{result.metric}</span>
                        <span className="text-sm text-gray-700">{result.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Building2 className="w-3 h-3" />
                      <span>{study.source}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{study.readTime}</span>
                    </div>
                  </div>
                  <button className="flex items-center space-x-1 text-purple-fintech hover:text-purple-700 text-sm font-medium group">
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
            <h3 className="text-2xl font-bold mb-4">Want to See Your Success Story Here?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join hundreds of organizations already transforming their operations with Synapse Solutions.
            </p>
            <button className="bg-white text-purple-fintech px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Transformation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
