'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Calendar, 
  MapPin, 
  DollarSign, 
  Users, 
  UserPlus, 
  Shield, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Building2,
  TrendingUp
} from 'lucide-react';

const timelineData = [
  {
    month: 'Month 1',
    title: 'Location & Budget Setup',
    status: 'completed',
    progress: 100,
    departments: ['Real Estate', 'Finance'],
    keyMilestones: [
      'Location secured in North Carolina',
      '$2.5M budget allocated',
      'Lease terms finalized',
      'Vendor contracts initiated'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    month: 'Month 2',
    title: 'Operations & HR Setup',
    status: 'in-progress',
    progress: 60,
    departments: ['Operations', 'HR'],
    keyMilestones: [
      'Training programs designed',
      'Local talent recruitment started',
      'Relocation packages prepared',
      'Staff onboarding process created'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    month: 'Month 3',
    title: 'Legal & Compliance',
    status: 'pending',
    progress: 20,
    departments: ['Legal', 'Finance'],
    keyMilestones: [
      'Permits application submitted',
      'Compliance review completed',
      'Vendor contracts finalized',
      'Insurance policies secured'
    ],
    color: 'from-orange-500 to-orange-600'
  },
  {
    month: 'Month 4',
    title: 'Final Launch',
    status: 'pending',
    progress: 0,
    departments: ['All Departments'],
    keyMilestones: [
      'Final staff training completed',
      'Soft opening scheduled',
      'Grand opening planned',
      'Operations fully launched'
    ],
    color: 'from-purple-500 to-purple-600'
  }
];

const departmentStats = [
  {
    name: 'Real Estate',
    completed: 100,
    inProgress: 0,
    pending: 0,
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Finance',
    completed: 80,
    inProgress: 20,
    pending: 0,
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Operations',
    completed: 40,
    inProgress: 60,
    pending: 0,
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'HR',
    completed: 30,
    inProgress: 70,
    pending: 0,
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Legal',
    completed: 10,
    inProgress: 20,
    pending: 70,
    color: 'from-red-500 to-red-600'
  }
];

export function FogoRestaurantTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMonth, setSelectedMonth] = useState(0);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            4-Month Project Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track the progress of the restaurant opening across all departments 
            with real-time updates and milestone tracking.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {timelineData.map((month, index) => (
            <motion.div
              key={month.month}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group cursor-pointer transition-all duration-300 ${
                index === selectedMonth ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
              }`}
              onClick={() => setSelectedMonth(index)}
            >
              <div className="bg-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden hover:shadow-soft-lg transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Month Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${month.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Calendar className="w-8 h-8 text-white" />
                    </div>

                    {/* Month Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-fintech transition-colors">
                            {month.month}
                          </h3>
                          <p className="text-lg text-gray-600">{month.title}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(month.status)}
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(month.status)}`}>
                            {month.status.replace('-', ' ')}
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                          <span>Progress</span>
                          <span>{month.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className={`bg-gradient-to-r ${month.color} h-3 rounded-full transition-all duration-300`}
                            style={{ width: `${month.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Departments */}
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-900 mb-2">Departments Involved</p>
                        <div className="flex flex-wrap gap-2">
                          {month.departments.map((dept, deptIndex) => (
                            <span key={deptIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                              {dept}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Milestones */}
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-2">Key Milestones</p>
                        <ul className="space-y-1">
                          {month.keyMilestones.map((milestone, milestoneIndex) => (
                            <li key={milestoneIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-purple-fintech rounded-full"></div>
                              <span>{milestone}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Department Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Department Performance Overview
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {departmentStats.map((dept, index) => (
              <div key={dept.name} className="bg-white rounded-xl p-6 text-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{dept.name}</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600">Completed</span>
                    <span className="font-semibold">{dept.completed}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${dept.completed}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-600">In Progress</span>
                    <span className="font-semibold">{dept.inProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${dept.inProgress}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Pending</span>
                    <span className="font-semibold">{dept.pending}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gray-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${dept.pending}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
