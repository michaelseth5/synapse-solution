'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  Users, 
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  Database
} from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'SOC 2 Type II Compliance',
    description: 'Fully audited and certified for security, availability, processing integrity, confidentiality, and privacy.',
    status: 'certified',
    details: ['Annual audits', 'Continuous monitoring', 'Third-party validation', 'Compliance reporting']
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'AES-256 encryption for data at rest and TLS 1.3 for data in transit. Your data is never stored in plain text.',
    status: 'active',
    details: ['AES-256 encryption', 'TLS 1.3 transport', 'Key management', 'Zero-knowledge architecture']
  },
  {
    icon: Key,
    title: 'SSO & SAML Integration',
    description: 'Seamless single sign-on with your existing identity provider. Support for SAML 2.0, OAuth 2.0, and LDAP.',
    status: 'active',
    details: ['SAML 2.0 support', 'OAuth 2.0 integration', 'LDAP compatibility', 'Multi-factor authentication']
  },
  {
    icon: Users,
    title: 'Role-Based Access Control',
    description: 'Granular permissions with custom roles. Control who can see what data with fine-grained access controls.',
    status: 'active',
    details: ['Custom roles', 'Granular permissions', 'Data-level access', 'Audit trails']
  },
  {
    icon: Eye,
    title: 'Comprehensive Audit Logs',
    description: 'Complete audit trail of all user actions, data access, and system changes. Immutable logs for compliance.',
    status: 'active',
    details: ['User activity logs', 'Data access tracking', 'System change logs', 'Immutable storage']
  },
  {
    icon: Database,
    title: 'Data Residency Controls',
    description: 'Choose where your data is stored and processed. Full control over data location and jurisdiction.',
    status: 'active',
    details: ['Regional data centers', 'Data sovereignty', 'Cross-border controls', 'Compliance mapping']
  },
  {
    icon: AlertTriangle,
    title: 'Real-time Threat Detection',
    description: 'Advanced security monitoring with AI-powered threat detection and automated incident response.',
    status: 'active',
    details: ['AI threat detection', 'Automated response', '24/7 monitoring', 'Incident management']
  },
  {
    icon: FileText,
    title: 'Privacy by Design',
    description: 'Built-in privacy controls with data minimization, purpose limitation, and user consent management.',
    status: 'active',
    details: ['Data minimization', 'Purpose limitation', 'Consent management', 'Right to be forgotten']
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'certified':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'active':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'certified':
      return <CheckCircle className="w-4 h-4" />;
    case 'active':
      return <Clock className="w-4 h-4" />;
    case 'pending':
      return <AlertTriangle className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

export function SecurityFeatures() {
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
            Enterprise-grade security features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with security and compliance at the core. Every feature is designed 
            to protect your data and meet the highest industry standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-100 h-full">
                {/* Icon and Status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-fintech to-purple-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(feature.status)}`}>
                    {getStatusIcon(feature.status)}
                    <span className="capitalize">{feature.status}</span>
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white rounded-2xl shadow-soft border border-gray-200 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Security by the numbers</h3>
            <p className="text-gray-600">Our commitment to security is backed by measurable results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-fintech mb-2">99.99%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-fintech mb-2">256-bit</div>
              <div className="text-sm text-gray-600">Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-fintech mb-2">24/7</div>
              <div className="text-sm text-gray-600">Security Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-fintech mb-2">SOC 2</div>
              <div className="text-sm text-gray-600">Type II Certified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
