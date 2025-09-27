'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Brain, 
  TrendingUp, 
  Lightbulb, 
  Target,
  Zap,
  BarChart3,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export function AIInsightsHero() {
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
            AI-Powered Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Advanced AI analytics that predict bottlenecks, optimize workflows, 
            and provide intelligent recommendations for better decision-making.
          </p>
        </motion.div>

        {/* AI Insights Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-soft-lg border border-gray-200 p-8 max-w-6xl mx-auto"
        >
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Nike Hiring Process - AI Analysis</h2>
            <p className="text-gray-600">Predictive insights and intelligent recommendations</p>
          </div>

          {/* AI Predictions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Success Prediction</h3>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
              <p className="text-sm text-gray-600 mb-3">Likelihood of successful completion within timeline</p>
              <div className="text-xs text-blue-700">
                <strong>Key Factors:</strong> Strong team coordination, clear dependencies, adequate resources
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Risk Alert</h3>
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">Medium</div>
              <p className="text-sm text-gray-600 mb-3">Risk level for potential delays</p>
              <div className="text-xs text-orange-700">
                <strong>Concerns:</strong> Marketing review dependency, budget approval timeline
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Optimization</h3>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">23%</div>
              <p className="text-sm text-gray-600 mb-3">Potential efficiency improvement</p>
              <div className="text-xs text-green-700">
                <strong>Opportunity:</strong> Parallel task execution, resource reallocation
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-fintech" />
              AI Recommendations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Immediate Action</h4>
                    <p className="text-sm text-gray-600">
                      Start Marketing review process now to avoid delays in final approval phase.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Process Improvement</h4>
                    <p className="text-sm text-gray-600">
                      Implement parallel review process for future hiring cycles to reduce timeline by 40%.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Resource Allocation</h4>
                    <p className="text-sm text-gray-600">
                      Reassign 2 tasks from Operations to Marketing to balance workload distribution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Performance Insight</h4>
                    <p className="text-sm text-gray-600">
                      HR team efficiency is 15% above average. Consider sharing best practices with other departments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Predictive Timeline */}
          <div className="bg-gradient-to-r from-purple-fintech to-purple-light rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              Predictive Timeline Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">12 days</div>
                <div className="text-sm opacity-90">Predicted completion</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">3 days</div>
                <div className="text-sm opacity-90">Buffer time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">95%</div>
                <div className="text-sm opacity-90">Confidence level</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
