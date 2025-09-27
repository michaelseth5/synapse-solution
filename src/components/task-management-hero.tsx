'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  CheckSquare, 
  Clock, 
  AlertCircle, 
  TrendingUp,
  Users,
  Calendar,
  Target,
  Zap
} from 'lucide-react';

export function TaskManagementHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%235C36CF%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Intelligent Task Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            AI-powered task management with automated workflows, dependency tracking, 
            and real-time collaboration across all departments.
          </p>
        </motion.div>

        {/* Task Board Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-soft-lg border border-gray-200 p-8 max-w-6xl mx-auto"
        >
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Project: Nike Hiring Process</h2>
            <p className="text-gray-600">Real-time task tracking across all departments</p>
          </div>

          {/* Task Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* To Do */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">To Do</h3>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">3</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Prepare interview questions</p>
                      <p className="text-xs text-gray-600">Marketing Team</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Users className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600">David Thompson</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Final hiring decision</p>
                      <p className="text-xs text-gray-600">Leadership</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Users className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600">Lisa Park</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* In Progress */}
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">In Progress</h3>
                <span className="bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-full">2</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Assess team structure</p>
                      <p className="text-xs text-gray-600">Operations</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Users className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600">Jennifer Kim</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Review */}
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Review</h3>
                <span className="bg-yellow-200 text-yellow-700 text-xs px-2 py-1 rounded-full">1</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-yellow-200">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Budget approval</p>
                      <p className="text-xs text-gray-600">Finance</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Users className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600">Michael Rodriguez</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Done */}
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Done</h3>
                <span className="bg-green-200 text-green-700 text-xs px-2 py-1 rounded-full">1</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Create job posting</p>
                      <p className="text-xs text-gray-600">HR</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Users className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600">Sarah Chen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-fintech">7</div>
              <div className="text-sm text-gray-600">Total Tasks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">1</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">3</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">3</div>
              <div className="text-sm text-gray-600">Pending</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
