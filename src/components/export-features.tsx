'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, Image, Calendar, Settings, Share2 } from 'lucide-react';

const exportOptions = [
  {
    name: 'Daily PDF Reports',
    description: 'Automated daily snapshots compiled into comprehensive PDF reports',
    icon: FileText,
    color: 'from-blue-500 to-blue-600',
    features: ['Auto-generated every 4 hours', 'Customizable templates', 'Email delivery', 'Archive storage']
  },
  {
    name: 'Org Chart Exports',
    description: 'Export interactive org charts as high-resolution images or PDFs',
    icon: Image,
    color: 'from-green-500 to-green-600',
    features: ['PNG/PDF formats', 'High resolution', 'Custom branding', 'Interactive elements']
  },
  {
    name: 'Audit Logs',
    description: 'Comprehensive audit trails with detailed activity logs',
    icon: Calendar,
    color: 'from-purple-500 to-purple-600',
    features: ['CSV/JSON formats', 'Filtered exports', 'Date ranges', 'User attribution']
  }
];

const sharingOptions = [
  {
    name: 'Secure Sharing',
    description: 'Share reports with password protection and expiration dates',
    icon: Share2,
    features: ['Password protection', 'Expiration dates', 'View tracking', 'Download limits']
  },
  {
    name: 'Custom Schedules',
    description: 'Set up automated exports on your preferred schedule',
    icon: Settings,
    features: ['Custom intervals', 'Multiple recipients', 'Format selection', 'Conditional exports']
  }
];

export function ExportFeatures() {
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
            Export & Sharing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Export your data in multiple formats with advanced sharing options. 
            Maintain control with granular permissions and automated scheduling.
          </p>
        </motion.div>

        {/* Export Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {exportOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className="bg-white rounded-2xl shadow-soft border border-gray-200 p-8 hover:shadow-soft-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mb-6`}>
                <option.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{option.name}</h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <ul className="space-y-2 mb-6">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-fintech rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full gradient-purple text-white py-3 px-6 rounded-lg font-semibold hover:shadow-soft transition-all duration-200 flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export Now</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Sharing Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-soft border border-gray-200 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Advanced Sharing Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sharingOptions.map((option, index) => (
              <div key={option.name} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-fintech to-purple-light rounded-lg flex items-center justify-center">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{option.name}</h4>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-fintech rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Set up your first automated export and experience the power of transparent governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-fintech px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-fintech transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
