'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  CheckCircle, 
  FileText, 
  Download,
  ExternalLink,
  Calendar,
  Award
} from 'lucide-react';

const complianceStandards = [
  {
    name: 'SOC 2 Type II',
    description: 'Security, availability, processing integrity, confidentiality, and privacy controls',
    status: 'certified',
    lastAudit: '2024-01-15',
    nextAudit: '2025-01-15',
    icon: Shield,
    color: 'from-green-500 to-green-600',
    details: [
      'Annual third-party audits',
      'Continuous monitoring',
      'Control testing and validation',
      'Management attestation'
    ]
  },
  {
    name: 'GDPR Compliance',
    description: 'General Data Protection Regulation compliance for EU data processing',
    status: 'certified',
    lastAudit: '2024-02-01',
    nextAudit: '2025-02-01',
    icon: FileText,
    color: 'from-blue-500 to-blue-600',
    details: [
      'Data protection by design',
      'Right to be forgotten',
      'Data portability',
      'Consent management'
    ]
  },
  {
    name: 'CCPA Compliance',
    description: 'California Consumer Privacy Act compliance for California residents',
    status: 'certified',
    lastAudit: '2024-01-20',
    nextAudit: '2025-01-20',
    icon: Award,
    color: 'from-purple-500 to-purple-600',
    details: [
      'Consumer rights protection',
      'Data transparency',
      'Opt-out mechanisms',
      'Privacy policy compliance'
    ]
  },
  {
    name: 'HIPAA Ready',
    description: 'Health Insurance Portability and Accountability Act compliance framework',
    status: 'ready',
    lastAudit: 'N/A',
    nextAudit: 'On-demand',
    icon: Shield,
    color: 'from-orange-500 to-orange-600',
    details: [
      'Business Associate Agreements',
      'Administrative safeguards',
      'Physical safeguards',
      'Technical safeguards'
    ]
  },
  {
    name: 'ISO 27001',
    description: 'Information security management system certification',
    status: 'in-progress',
    lastAudit: 'N/A',
    nextAudit: '2024-06-30',
    icon: CheckCircle,
    color: 'from-indigo-500 to-indigo-600',
    details: [
      'Information security policies',
      'Risk management framework',
      'Security controls implementation',
      'Continuous improvement'
    ]
  },
  {
    name: 'FedRAMP Ready',
    description: 'Federal Risk and Authorization Management Program compliance',
    status: 'planned',
    lastAudit: 'N/A',
    nextAudit: '2024-12-31',
    icon: Award,
    color: 'from-teal-500 to-teal-600',
    details: [
      'Security assessment framework',
      'Continuous monitoring',
      'Authorization to operate',
      'Government cloud compliance'
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'certified':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'ready':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'in-progress':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'planned':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'certified':
      return <CheckCircle className="w-4 h-4" />;
    case 'ready':
      return <Shield className="w-4 h-4" />;
    case 'in-progress':
      return <Calendar className="w-4 h-4" />;
    case 'planned':
      return <FileText className="w-4 h-4" />;
    default:
      return <FileText className="w-4 h-4" />;
  }
};

export function ComplianceStandards() {
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
            Compliance & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards of compliance and security. 
            Our certifications demonstrate our commitment to protecting your data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {complianceStandards.map((standard, index) => (
            <motion.div
              key={standard.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-soft border border-gray-200 p-6 hover:shadow-soft-lg transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${standard.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <standard.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(standard.status)}`}>
                    {getStatusIcon(standard.status)}
                    <span className="capitalize">{standard.status}</span>
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {standard.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {standard.description}
                </p>

                {/* Audit Dates */}
                <div className="mb-4 space-y-2">
                  {standard.lastAudit !== 'N/A' && (
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Last Audit:</span>
                      <span className="text-gray-900">{new Date(standard.lastAudit).toLocaleDateString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Next Audit:</span>
                    <span className="text-gray-900">
                      {standard.nextAudit === 'On-demand' ? 'On-demand' : new Date(standard.nextAudit).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {standard.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full flex items-center justify-center space-x-2 text-purple-fintech hover:text-purple-700 font-medium text-sm py-2 px-4 rounded-lg border border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200">
                  <Download className="w-4 h-4" />
                  <span>Download Report</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need specific compliance requirements?</h3>
            <p className="text-lg mb-6 opacity-90">
              We can help you meet industry-specific compliance needs. 
              Contact our security team for a custom compliance assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-fintech px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Security Team
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
