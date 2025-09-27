'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Users, 
  MessageSquare, 
  Video, 
  FileText,
  Calendar,
  Share2,
  Bell,
  Zap
} from 'lucide-react';

export function TeamCollaborationHero() {
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
            Team Collaboration Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Seamless collaboration tools that connect teams across departments 
            with real-time communication, shared workspaces, and project coordination.
          </p>
        </motion.div>

        {/* Collaboration Workspace Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-soft-lg border border-gray-200 p-8 max-w-6xl mx-auto"
        >
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Nike Hiring Process - Team Workspace</h2>
            <p className="text-gray-600">Real-time collaboration across HR, Finance, Operations, and Marketing</p>
          </div>

          {/* Workspace Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chat & Communication */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-lg p-4 h-80">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Team Chat</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">5 online</span>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">SC</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-gray-900">Sarah Chen</span>
                        <span className="text-xs text-gray-500">2:30 PM</span>
                      </div>
                      <p className="text-sm text-gray-700">Job posting is ready for review. Can someone from Marketing take a look?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">MR</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-gray-900">Michael Rodriguez</span>
                        <span className="text-xs text-gray-500">2:32 PM</span>
                      </div>
                      <p className="text-sm text-gray-700">Budget approved for $95K-$120K range. Finance is ready to proceed.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">JK</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-gray-900">Jennifer Kim</span>
                        <span className="text-xs text-gray-500">2:35 PM</span>
                      </div>
                      <p className="text-sm text-gray-700">Team structure assessment is 60% complete. Will have results by EOD.</p>
                    </div>
                  </div>
                </div>
                
                {/* Message Input */}
                <div className="flex items-center space-x-2">
                  <input 
                    type="text" 
                    placeholder="Type a message..." 
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-fintech"
                  />
                  <button className="bg-purple-fintech text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Team Members & Activity */}
            <div className="space-y-4">
              {/* Team Members */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Team Members</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">SC</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Sarah Chen</p>
                      <p className="text-xs text-gray-600">HR Manager</p>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">MR</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Michael Rodriguez</p>
                      <p className="text-xs text-gray-600">Finance Director</p>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">JK</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Jennifer Kim</p>
                      <p className="text-xs text-gray-600">Operations VP</p>
                    </div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">DT</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">David Thompson</p>
                      <p className="text-xs text-gray-600">Marketing Director</p>
                    </div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Recent Activity</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Budget approved by Finance</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Job posting created</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Team assessment started</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Marketing review pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
            <button className="flex items-center justify-center space-x-2 p-3 bg-purple-50 text-purple-fintech rounded-lg hover:bg-purple-100 transition-colors">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">Start Chat</span>
            </button>
            <button className="flex items-center justify-center space-x-2 p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
              <Video className="w-4 h-4" />
              <span className="text-sm font-medium">Video Call</span>
            </button>
            <button className="flex items-center justify-center space-x-2 p-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Share File</span>
            </button>
            <button className="flex items-center justify-center space-x-2 p-3 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Schedule</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
