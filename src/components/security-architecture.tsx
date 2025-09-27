'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  Database, 
  Network,
  Server,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const architectureLayers = [
  {
    name: 'Application Layer',
    icon: Shield,
    color: 'from-purple-500 to-purple-600',
    description: 'Secure application controls and user authentication',
    features: [
      'Multi-factor authentication',
      'Session management',
      'API security',
      'Input validation'
    ]
  },
  {
    name: 'Data Layer',
    icon: Database,
    color: 'from-blue-500 to-blue-600',
    description: 'Encrypted data storage and processing',
    features: [
      'AES-256 encryption',
      'Data masking',
      'Backup encryption',
      'Key management'
    ]
  },
  {
    name: 'Network Layer',
    icon: Network,
    color: 'from-green-500 to-green-600',
    description: 'Secure network communication and monitoring',
    features: [
      'TLS 1.3 encryption',
      'VPN support',
      'DDoS protection',
      'Network monitoring'
    ]
  },
  {
    name: 'Infrastructure Layer',
    icon: Server,
    color: 'from-orange-500 to-orange-600',
    description: 'Secure cloud infrastructure and hosting',
    features: [
      'AWS/Azure security',
      'Container security',
      'Server hardening',
      'Disaster recovery'
    ]
  },
  {
    name: 'Identity Layer',
    icon: Users,
    color: 'from-pink-500 to-pink-600',
    description: 'Identity and access management',
    features: [
      'SSO integration',
      'Role-based access',
      'Privileged access',
      'Identity federation'
    ]
  },
  {
    name: 'Monitoring Layer',
    icon: Eye,
    color: 'from-indigo-500 to-indigo-600',
    description: 'Security monitoring and incident response',
    features: [
      'SIEM integration',
      'Threat detection',
      'Incident response',
      'Compliance monitoring'
    ]
  }
];

const securityPrinciples = [
  {
    principle: 'Zero Trust Architecture',
    description: 'Never trust, always verify. Every request is authenticated and authorized.',
    icon: Shield
  },
  {
    principle: 'Defense in Depth',
    description: 'Multiple layers of security controls to protect against various attack vectors.',
    icon: Lock
  },
  {
    principle: 'Least Privilege Access',
    description: 'Users and systems have only the minimum access required for their function.',
    icon: Key
  },
  {
    principle: 'Continuous Monitoring',
    description: 'Real-time monitoring and analysis of security events and threats.',
    icon: Eye
  }
];

export function SecurityArchitecture() {
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
            Security Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our security architecture is built on industry best practices with 
            multiple layers of protection and continuous monitoring.
          </p>
        </motion.div>

        {/* Architecture Layers */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-layered Security Architecture</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each layer provides specific security controls and monitoring capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${layer.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <layer.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{layer.name}</h4>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {layer.description}
                  </p>

                  <div className="space-y-2">
                    {layer.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-soft border border-gray-200 p-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Principles</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our security approach is guided by fundamental principles that ensure 
              comprehensive protection of your data and systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityPrinciples.map((principle, index) => (
              <motion.div
                key={principle.principle}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-fintech to-purple-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {principle.principle}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to see our security architecture in detail?</h3>
            <p className="text-lg mb-6 opacity-90">
              Download our comprehensive security architecture document and 
              schedule a security review with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-fintech px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <span>Download Architecture Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Security Review
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
