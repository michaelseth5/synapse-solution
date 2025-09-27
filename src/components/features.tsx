'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Database, 
  Users, 
  Shield, 
  BarChart3, 
  Workflow, 
  MessageSquare,
  Clock,
  Eye
} from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Unified Data Sources',
    description: 'Connect ERP, CRM, HCM, and project tools in one place. Real-time sync across all systems.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Users,
    title: 'Interactive Org Chart',
    description: 'Visualize team structure with real-time task status, dependencies, and capacity heatmaps.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: 'Governance & Transparency',
    description: 'Auto-snapshots every 4 hours with privacy controls and audit trails for compliance.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get insights from unified data with AI-powered recommendations and forecasting.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Workflow,
    title: 'Automated Workflows',
    description: 'Streamline processes with intelligent automation and cross-system task management.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: MessageSquare,
    title: 'AI Org Assistant',
    description: 'Natural language interface to manage people, roles, and tasks with smart suggestions.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Clock,
    title: 'Real-time Updates',
    description: 'Stay synchronized with live data feeds and instant notifications across all platforms.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Eye,
    title: 'Role-based Access',
    description: 'Granular permissions with privacy toggles and redaction for sensitive information.',
    color: 'from-red-500 to-red-600'
  }
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to un-silo your revenue teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to break down silos and create a unified, 
            efficient revenue organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-100 h-full">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
