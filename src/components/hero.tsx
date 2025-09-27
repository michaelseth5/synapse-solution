'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%235C36CF%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Agentic AI that{' '}
            <span className="gradient-purple bg-clip-text text-transparent">
              un-silos
            </span>{' '}
            revenue teams
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Unify ERP, CRM, HCM, projects, and feedback into a single control tower. 
            Faster decisions, fewer duplicates, higher win rates.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              href="#demo"
              className="group gradient-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-soft-lg transition-all duration-300 flex items-center space-x-2"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group flex items-center space-x-2 text-gray-700 hover:text-purple-fintech px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-purple-fintech transition-all duration-300">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Overview</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm text-gray-500 mb-8"
          >
            Trusted by 500+ revenue teams worldwide
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-soft-lg border border-gray-200 p-8 overflow-hidden">
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-500">Synapse Control Tower</div>
              </div>

              {/* Mock Dashboard Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Revenue Metrics */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Metrics</h3>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-purple-fintech to-purple-light p-4 rounded-lg text-white">
                      <div className="text-2xl font-bold">$2.4M</div>
                      <div className="text-sm opacity-90">Q4 Revenue</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900">+23%</div>
                      <div className="text-sm text-gray-600">vs Last Quarter</div>
                    </div>
                  </div>
                </div>

                {/* Active Projects */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Active Projects</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium">Acme Corp Integration</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Q4 Planning</span>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Team Expansion</span>
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Team Activity */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Team Activity</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-fintech rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        JS
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">John Smith</div>
                        <div className="text-xs text-gray-500">Updated Acme proposal</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-light rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        MJ
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Maria Johnson</div>
                        <div className="text-xs text-gray-500">Completed Q4 review</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Purple accent overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-fintech/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
