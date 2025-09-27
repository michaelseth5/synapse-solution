'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle 
} from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Real-time Synchronization',
    description: 'All your data stays in sync across systems with sub-second latency. No more manual updates or data discrepancies.',
    features: ['Live data updates', 'Bidirectional sync', 'Conflict resolution', 'Change tracking']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption, SSO integration, and comprehensive audit trails.',
    features: ['SOC 2 compliance', 'Data encryption', 'Role-based access', 'Audit logs']
  },
  {
    icon: BarChart3,
    title: 'Unified Analytics',
    description: 'Get insights from all your data sources in one place with AI-powered analytics and custom dashboards.',
    features: ['Cross-system reports', 'AI insights', 'Custom dashboards', 'Real-time metrics']
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Break down silos with shared visibility, collaborative workflows, and intelligent task management.',
    features: ['Shared workspaces', 'Team dashboards', 'Collaborative tasks', 'Communication tools']
  },
  {
    icon: Clock,
    title: 'Automated Workflows',
    description: 'Streamline processes with intelligent automation, smart routing, and predictive task management.',
    features: ['Workflow automation', 'Smart routing', 'Predictive tasks', 'Process optimization']
  },
  {
    icon: CheckCircle,
    title: 'Zero Downtime',
    description: 'Seamless integration with no service interruption. Your existing systems keep running while we connect them.',
    features: ['No migration needed', 'Gradual rollout', 'Rollback capability', '24/7 monitoring']
  }
];

export function IntegrationBenefits() {
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
            Why choose Synapse Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just connect your systems—we transform how your teams work together 
            with intelligent automation and unified insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-fintech to-purple-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                <div className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Trusted by industry leaders</h3>
            <p className="text-lg opacity-90">
              Join hundreds of companies already using Synapse Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-sm opacity-90">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2.3s</div>
              <div className="text-sm opacity-90">Avg Sync Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
