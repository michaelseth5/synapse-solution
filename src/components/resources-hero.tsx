'use client';

import { motion } from 'framer-motion';
import { BookOpen, FileText, Users, TrendingUp } from 'lucide-react';

export function ResourcesHero() {
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
            Resources &{' '}
            <span className="gradient-purple bg-clip-text text-transparent">
              Research
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Explore case studies, research papers, and insights from industry leaders. 
            Learn how organizations are transforming their operations with agentic AI.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12"
          >
            <div className="text-center">
              <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600">Case Studies</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center mb-4 mx-auto">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-sm text-gray-600">Research Papers</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
              <div className="text-sm text-gray-600">Avg. Efficiency Gain</div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group gradient-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-soft-lg transition-all duration-300 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Browse All Resources</span>
            </button>
            
            <button className="group flex items-center space-x-2 text-gray-700 hover:text-purple-fintech px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-purple-fintech transition-all duration-300">
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Download Whitepaper</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
