'use client';

import { motion } from 'framer-motion';
import { Building2, ArrowRight, Clock, CheckCircle, AlertCircle, MapPin } from 'lucide-react';

export function FogoRestaurantHero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%235C36CF%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
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
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Fogo de Chão Restaurant Opening
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See how Synapse Solutions coordinates a 4-month restaurant opening cycle 
              across Real Estate, Operations, Finance, HR, and Legal departments.
            </p>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold text-blue-800">New Location: North Carolina</h3>
            </div>
            <p className="text-blue-700 mb-4">
              HQ in Dallas managing a complex 4-month opening cycle with multiple departments
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>4-month timeline</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4" />
                <span>New restaurant location</span>
              </div>
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-12 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-semibold text-red-800">The Challenge</h3>
            </div>
            <p className="text-lg text-red-700 mb-4">
              Opening one restaurant requires constant cross-department updates, 
              but data and decisions stay siloed
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-red-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>4-month coordination cycle</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4" />
                <span>6 departments involved</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4" />
                <span>Constant status updates needed</span>
              </div>
            </div>
          </motion.div>

          {/* Solution Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-green-50 border border-green-200 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-semibold text-green-800">Synapse Solution</h3>
            </div>
            <p className="text-lg text-green-700 mb-4">
              Unified control tower with real-time coordination and automated workflows
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-green-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Real-time coordination</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Automated status updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Cross-department visibility</span>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <button className="group gradient-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-soft-lg transition-all duration-300 flex items-center space-x-2">
              <span>Start Interactive Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
