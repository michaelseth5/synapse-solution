'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Building2, 
  Users, 
  Briefcase, 
  CreditCard, 
  MessageSquare, 
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const dataSources = [
  {
    category: 'ERP Systems',
    icon: Building2,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    sources: [
      {
        name: 'SAP',
        description: 'Enterprise resource planning and business processes',
        status: 'connected',
        features: ['Financial data', 'Supply chain', 'HR modules', 'Analytics']
      },
      {
        name: 'Oracle',
        description: 'Comprehensive business management suite',
        status: 'connected',
        features: ['ERP Cloud', 'HCM', 'SCM', 'Financials']
      }
    ]
  },
  {
    category: 'CRM Platforms',
    icon: Users,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    sources: [
      {
        name: 'Salesforce',
        description: 'Customer relationship management and sales automation',
        status: 'connected',
        features: ['Leads & Opportunities', 'Sales Pipeline', 'Customer Data', 'Reports']
      }
    ]
  },
  {
    category: 'Human Capital Management',
    icon: Briefcase,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    sources: [
      {
        name: 'Workday',
        description: 'Human capital management and financial management',
        status: 'connected',
        features: ['Employee data', 'Payroll', 'Benefits', 'Performance']
      }
    ]
  },
  {
    category: 'Project Management',
    icon: Briefcase,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    sources: [
      {
        name: 'Jira',
        description: 'Issue tracking and project management',
        status: 'connected',
        features: ['Tasks & Issues', 'Sprints', 'Workflows', 'Reports']
      }
    ]
  },
  {
    category: 'Point of Sale',
    icon: CreditCard,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    sources: [
      {
        name: 'Square',
        description: 'Payment processing and business management',
        status: 'connected',
        features: ['Transactions', 'Inventory', 'Analytics', 'Payments']
      },
      {
        name: 'Toast',
        description: 'Restaurant management and POS system',
        status: 'connected',
        features: ['Orders', 'Menu management', 'Staff scheduling', 'Reports']
      }
    ]
  },
  {
    category: 'Feedback Systems',
    icon: MessageSquare,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    sources: [
      {
        name: 'Merchant Centric',
        description: 'Customer feedback and review management',
        status: 'connected',
        features: ['Reviews', 'Ratings', 'Feedback', 'Analytics']
      }
    ]
  },
  {
    category: 'Analytics',
    icon: BarChart3,
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    sources: [
      {
        name: 'Google Analytics',
        description: 'Web analytics and user behavior tracking',
        status: 'connected',
        features: ['Traffic data', 'User behavior', 'Conversions', 'Reports']
      }
    ]
  }
];

export function DataSourcesGrid() {
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
            Seamlessly connect your entire tech stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrate with all your existing tools and systems. 
            No migration needed, just connect and start working.
          </p>
        </motion.div>

        <div className="space-y-12">
          {dataSources.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden"
            >
              {/* Category Header */}
              <div className={`${category.bgColor} px-6 py-4 border-b ${category.borderColor}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                    <p className="text-sm text-gray-600">Enterprise-grade integrations</p>
                  </div>
                </div>
              </div>

              {/* Sources Grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.sources.map((source, sourceIndex) => (
                    <motion.div
                      key={source.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (sourceIndex * 0.05) }}
                      className="group"
                    >
                      <div className="bg-gray-50 rounded-xl p-6 hover:shadow-soft transition-all duration-300 border border-gray-100 h-full">
                        {/* Source Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">
                              {source.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {source.description}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-sm font-medium text-green-600 capitalize">
                              {source.status}
                            </span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h5>
                          <div className="flex flex-wrap gap-2">
                            {source.features.map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="px-2 py-1 bg-white rounded-md text-xs font-medium text-gray-700 border border-gray-200"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Button */}
                        <button className="group/btn w-full flex items-center justify-center space-x-2 text-purple-fintech hover:text-purple-700 font-medium text-sm py-2 px-4 rounded-lg border border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200">
                          <span>Configure Integration</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Don't see your system?</h3>
            <p className="text-lg mb-6 opacity-90">
              We support 100+ integrations and can build custom connectors for your specific needs.
            </p>
            <button className="bg-white text-purple-fintech px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Custom Integration
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
