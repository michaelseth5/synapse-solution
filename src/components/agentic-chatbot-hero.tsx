'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Zap, Users, BarChart3 } from 'lucide-react';

export function AgenticChatbotHero() {
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
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Agentic{' '}
              <span className="gradient-purple bg-clip-text text-transparent">
                Chatbot
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Add data and task updates in natural language. Automatically sync with 
              your dashboard and org chart to keep finance, sales, and operations aligned.
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-soft">
              <MessageCircle className="w-5 h-5 text-purple-fintech" />
              <span className="text-gray-700 font-medium">Natural Language</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-soft">
              <Zap className="w-5 h-5 text-purple-fintech" />
              <span className="text-gray-700 font-medium">Real-time Sync</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-soft">
              <Users className="w-5 h-5 text-purple-fintech" />
              <span className="text-gray-700 font-medium">Team Alignment</span>
            </div>
          </motion.div>

          {/* Example Commands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-soft border border-gray-200 p-8 max-w-3xl mx-auto"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-purple-fintech" />
              Try These Commands
            </h3>
            <div className="space-y-3 text-left">
              <div className="p-3 bg-gray-50 rounded-lg">
                <code className="text-sm text-gray-700">
                  "Update marketing campaign budget to $50,000"
                </code>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <code className="text-sm text-gray-700">
                  "Assign John to the Dallas restaurant launch"
                </code>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <code className="text-sm text-gray-700">
                  "What tasks are due this week?"
                </code>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
