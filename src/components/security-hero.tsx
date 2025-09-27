'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle, ArrowRight } from 'lucide-react';

export function SecurityHero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%235C36CF" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Enterprise{' '}
              <span className="gradient-purple bg-clip-text text-transparent">
                Security
              </span>{' '}
              & Compliance
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Bank-grade security with SOC 2 compliance, end-to-end encryption, 
              and comprehensive audit trails. Your data is protected at every level.
            </p>
          </motion.div>

          {/* Security Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-soft">
              <Lock className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-soft">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">End-to-End Encryption</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-soft">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">24/7 Monitoring</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group gradient-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-soft-lg transition-all duration-300 flex items-center space-x-2">
              <span>View Security Report</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="text-gray-700 hover:text-purple-fintech px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-purple-fintech transition-all duration-300">
              Download Compliance Docs
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
