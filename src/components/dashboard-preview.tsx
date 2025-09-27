'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Target,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { useDemoData } from './demo-data-generator';

export function DashboardPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data: demoData } = useDemoData();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'blocked':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'blocked':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
            See your unified control tower in action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a real-time view of your entire revenue organization with 
            intelligent insights and automated workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-soft-lg border border-gray-200 overflow-hidden"
        >
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-purple-fintech to-purple-light px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Synapse Control Tower</h3>
                  <p className="text-sm text-white/80">Real-time revenue operations dashboard</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-white/80">Live</span>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue Metrics */}
              <div className="lg:col-span-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-purple-fintech" />
                  Revenue Overview
                </h4>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-fintech to-purple-light p-4 rounded-lg text-white">
                    <div className="text-3xl font-bold" data-demo="revenue-metric">
                      {formatCurrency(demoData.revenue.current)}
                    </div>
                    <div className="text-sm opacity-90">Q4 2024</div>
                    <div className="text-sm font-medium mt-1">
                      {demoData.revenue.growth > 0 ? '+' : ''}{demoData.revenue.growth}% vs last quarter
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900">{demoData.activeDeals}</div>
                      <div className="text-xs text-gray-600">Active Deals</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900">{demoData.closedThisMonth}</div>
                      <div className="text-xs text-gray-600">Closed This Month</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Tasks */}
              <div className="lg:col-span-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-fintech" />
                  Active Tasks
                </h4>
                <div className="space-y-3">
                  {demoData.tasks.map((task) => (
                    <div key={task.id} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="text-sm font-medium text-gray-900">{task.title}</h5>
                        {getStatusIcon(task.status)}
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>{task.assignee}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                          {task.status.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Activity */}
              <div className="lg:col-span-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-purple-fintech" />
                  Team Activity
                </h4>
                <div className="space-y-3">
                  {demoData.teamActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-fintech rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        {activity.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900">{activity.name}</div>
                        <div className="text-xs text-gray-600 truncate">{activity.action}</div>
                      </div>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-fintech">98%</div>
                  <div className="text-sm text-gray-600">Data Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-fintech">2.3s</div>
                  <div className="text-sm text-gray-600">Avg Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-fintech">24/7</div>
                  <div className="text-sm text-gray-600">System Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
