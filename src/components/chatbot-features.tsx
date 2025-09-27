'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  MessageCircle, 
  Upload, 
  BarChart3, 
  Users, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Brain,
  Database,
  Lock
} from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Natural Language Processing',
    description: 'Understand complex commands and extract structured data from plain English updates.',
    benefits: [
      'Parse budget updates automatically',
      'Extract task assignments from conversations',
      'Identify key metrics and KPIs'
    ]
  },
  {
    icon: Upload,
    title: 'Smart Document Processing',
    description: 'Upload screenshots, PDFs, and documents for automatic data extraction and sync.',
    benefits: [
      'OCR text recognition from images',
      'PDF content analysis',
      'Automatic data mapping to dashboards'
    ]
  },
  {
    icon: BarChart3,
    title: 'Real-Time Dashboard Sync',
    description: 'Every update automatically flows to the Unified Data Hub and team dashboards.',
    benefits: [
      'Instant budget updates in Finance',
      'Live task status in Operations',
      'Revenue tracking in Sales'
    ]
  },
  {
    icon: Users,
    title: 'Org Chart Integration',
    description: 'Task assignments and workload changes instantly update the interactive org chart.',
    benefits: [
      'Automatic role assignments',
      'Workload distribution updates',
      'Dependency mapping'
    ]
  },
  {
    icon: Shield,
    title: 'Privacy & Governance',
    description: 'Granular visibility controls and automatic audit logging for compliance.',
    benefits: [
      'Team-only vs Leadership visibility',
      'Sensitive data redaction',
      'Complete audit trails'
    ]
  },
  {
    icon: Zap,
    title: 'AI-Powered Insights',
    description: 'Get intelligent recommendations and automated workflow suggestions.',
    benefits: [
      'Smart task prioritization',
      'Resource allocation suggestions',
      'Bottleneck identification'
    ]
  }
];

const userFlow = [
  {
    step: 1,
    title: 'Natural Language Input',
    description: 'Employee types update in plain English',
    example: '"Closed Acme deal, $200k Q4 revenue"',
    icon: MessageCircle
  },
  {
    step: 2,
    title: 'AI Processing',
    description: 'Chatbot extracts structured data',
    example: 'Deal: Acme Corp, Amount: $200,000, Quarter: Q4',
    icon: Brain
  },
  {
    step: 3,
    title: 'Multi-System Sync',
    description: 'Updates flow to all relevant dashboards',
    example: 'Finance sees revenue, Ops sees workload, Leadership sees pipeline',
    icon: Database
  },
  {
    step: 4,
    title: 'Team Notification',
    description: 'Stakeholders are automatically informed',
    example: 'Real-time updates in org chart and task boards',
    icon: Users
  }
];

export function ChatbotFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How Agentic Chatbot Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform natural language into structured data that keeps your entire 
            organization aligned and informed in real-time.
          </p>
        </motion.div>

        {/* User Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            End-to-End User Flow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userFlow.map((flow, index) => (
              <motion.div
                key={flow.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < userFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-fintech to-purple-light z-0" />
                )}
                
                <div className="relative bg-white rounded-2xl shadow-soft border border-gray-200 p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <flow.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-sm font-semibold text-purple-fintech mb-2">
                    Step {flow.step}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {flow.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {flow.description}
                  </p>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <code className="text-xs text-gray-700">
                      {flow.example}
                    </code>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-soft border border-gray-200 p-8 hover:shadow-soft-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-fintech to-purple-light rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Security & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 bg-white rounded-2xl shadow-soft border border-gray-200 p-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enterprise Security & Compliance
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with enterprise-grade security and compliance standards to protect 
              your sensitive business data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">SOC 2 Ready</h4>
              <p className="text-sm text-gray-600">
                Meets SOC 2 Type II compliance standards for data security and availability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Encryption</h4>
              <p className="text-sm text-gray-600">
                End-to-end encryption for data at rest and in transit using AES-256.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Audit Logs</h4>
              <p className="text-sm text-gray-600">
                Complete audit trail of all chatbot interactions and data updates.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Team Communication?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Start using natural language to keep your finance, sales, and operations 
              teams perfectly aligned with real-time updates.
            </p>
            <button className="bg-white text-purple-fintech px-8 py-3 rounded-lg font-semibold hover:shadow-soft-lg transition-all duration-200 flex items-center space-x-2 mx-auto">
              <span>Try Agentic Chatbot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
