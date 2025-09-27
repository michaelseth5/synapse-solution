'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Users, 
  User, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  MessageSquare,
  Calendar,
  TrendingUp
} from 'lucide-react';

const orgData = {
  departments: [
    {
      id: 'hr',
      name: 'Human Resources',
      color: 'from-blue-500 to-blue-600',
      people: [
        {
          id: 'sarah-chen',
          name: 'Sarah Chen',
          role: 'HR Manager',
          status: 'active',
          workload: 85,
          currentTask: 'Creating job posting for Senior Marketing Manager',
          taskProgress: 75,
          lastUpdate: '2 hours ago',
          avatar: 'SC'
        },
        {
          id: 'mike-johnson',
          name: 'Mike Johnson',
          role: 'Recruiter',
          status: 'active',
          workload: 70,
          currentTask: 'Screening candidates for open positions',
          taskProgress: 60,
          lastUpdate: '1 hour ago',
          avatar: 'MJ'
        },
        {
          id: 'lisa-wang',
          name: 'Lisa Wang',
          role: 'HR Specialist',
          status: 'busy',
          workload: 90,
          currentTask: 'Onboarding new employees',
          taskProgress: 80,
          lastUpdate: '30 minutes ago',
          avatar: 'LW'
        },
        {
          id: 'david-kim',
          name: 'David Kim',
          role: 'Compensation Analyst',
          status: 'active',
          workload: 65,
          currentTask: 'Salary benchmarking for new role',
          taskProgress: 40,
          lastUpdate: '3 hours ago',
          avatar: 'DK'
        },
        {
          id: 'emma-rodriguez',
          name: 'Emma Rodriguez',
          role: 'Benefits Coordinator',
          status: 'pending',
          workload: 50,
          currentTask: 'Updating benefits packages',
          taskProgress: 20,
          lastUpdate: '1 day ago',
          avatar: 'ER'
        },
        {
          id: 'james-wilson',
          name: 'James Wilson',
          role: 'HR Assistant',
          status: 'active',
          workload: 55,
          currentTask: 'Scheduling interviews',
          taskProgress: 70,
          lastUpdate: '2 hours ago',
          avatar: 'JW'
        }
      ]
    },
    {
      id: 'finance',
      name: 'Finance',
      color: 'from-green-500 to-green-600',
      people: [
        {
          id: 'michael-rodriguez',
          name: 'Michael Rodriguez',
          role: 'Finance Director',
          status: 'active',
          workload: 70,
          currentTask: 'Budget approval for new hire ($95K-$120K range)',
          taskProgress: 100,
          lastUpdate: '1 hour ago',
          avatar: 'MR'
        },
        {
          id: 'sarah-martinez',
          name: 'Sarah Martinez',
          role: 'Financial Analyst',
          status: 'busy',
          workload: 85,
          currentTask: 'Q4 financial forecasting',
          taskProgress: 65,
          lastUpdate: '45 minutes ago',
          avatar: 'SM'
        },
        {
          id: 'robert-chen',
          name: 'Robert Chen',
          role: 'Accounting Manager',
          status: 'active',
          workload: 75,
          currentTask: 'Month-end closing procedures',
          taskProgress: 90,
          lastUpdate: '1 hour ago',
          avatar: 'RC'
        },
        {
          id: 'jennifer-lee',
          name: 'Jennifer Lee',
          role: 'Budget Analyst',
          status: 'active',
          workload: 60,
          currentTask: 'Department budget reviews',
          taskProgress: 50,
          lastUpdate: '2 hours ago',
          avatar: 'JL'
        },
        {
          id: 'alex-thompson',
          name: 'Alex Thompson',
          role: 'Financial Controller',
          status: 'pending',
          workload: 40,
          currentTask: 'Audit preparation',
          taskProgress: 25,
          lastUpdate: '4 hours ago',
          avatar: 'AT'
        },
        {
          id: 'maria-garcia',
          name: 'Maria Garcia',
          role: 'Accounts Payable Specialist',
          status: 'active',
          workload: 70,
          currentTask: 'Processing vendor payments',
          taskProgress: 85,
          lastUpdate: '30 minutes ago',
          avatar: 'MG'
        }
      ]
    },
    {
      id: 'operations',
      name: 'Operations',
      color: 'from-orange-500 to-orange-600',
      people: [
        {
          id: 'jennifer-kim',
          name: 'Jennifer Kim',
          role: 'Operations VP',
          status: 'busy',
          workload: 95,
          currentTask: 'Assessing team structure for new marketing role',
          taskProgress: 60,
          lastUpdate: '30 minutes ago',
          avatar: 'JK'
        },
        {
          id: 'mark-davis',
          name: 'Mark Davis',
          role: 'Operations Manager',
          status: 'active',
          workload: 80,
          currentTask: 'Process optimization review',
          taskProgress: 70,
          lastUpdate: '1 hour ago',
          avatar: 'MD'
        },
        {
          id: 'susan-brown',
          name: 'Susan Brown',
          role: 'Quality Assurance Lead',
          status: 'busy',
          workload: 90,
          currentTask: 'Quality metrics analysis',
          taskProgress: 75,
          lastUpdate: '45 minutes ago',
          avatar: 'SB'
        },
        {
          id: 'kevin-taylor',
          name: 'Kevin Taylor',
          role: 'Process Engineer',
          status: 'active',
          workload: 65,
          currentTask: 'Workflow documentation',
          taskProgress: 55,
          lastUpdate: '2 hours ago',
          avatar: 'KT'
        },
        {
          id: 'amanda-clark',
          name: 'Amanda Clark',
          role: 'Operations Coordinator',
          status: 'pending',
          workload: 50,
          currentTask: 'Resource allocation planning',
          taskProgress: 30,
          lastUpdate: '3 hours ago',
          avatar: 'AC'
        },
        {
          id: 'daniel-moore',
          name: 'Daniel Moore',
          role: 'Operations Analyst',
          status: 'active',
          workload: 70,
          currentTask: 'Performance reporting',
          taskProgress: 60,
          lastUpdate: '1 hour ago',
          avatar: 'DM'
        }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing',
      color: 'from-purple-500 to-purple-600',
      people: [
        {
          id: 'david-thompson',
          name: 'David Thompson',
          role: 'Marketing Director',
          status: 'pending',
          workload: 45,
          currentTask: 'Preparing interview questions for marketing role',
          taskProgress: 0,
          lastUpdate: 'Not started',
          avatar: 'DT'
        },
        {
          id: 'rachel-green',
          name: 'Rachel Green',
          role: 'Marketing Manager',
          status: 'active',
          workload: 75,
          currentTask: 'Campaign strategy development',
          taskProgress: 65,
          lastUpdate: '1 hour ago',
          avatar: 'RG'
        },
        {
          id: 'steve-walker',
          name: 'Steve Walker',
          role: 'Content Specialist',
          status: 'busy',
          workload: 85,
          currentTask: 'Content calendar planning',
          taskProgress: 80,
          lastUpdate: '30 minutes ago',
          avatar: 'SW'
        },
        {
          id: 'lisa-anderson',
          name: 'Lisa Anderson',
          role: 'Digital Marketing Lead',
          status: 'active',
          workload: 70,
          currentTask: 'SEO optimization review',
          taskProgress: 55,
          lastUpdate: '2 hours ago',
          avatar: 'LA'
        },
        {
          id: 'chris-miller',
          name: 'Chris Miller',
          role: 'Brand Manager',
          status: 'pending',
          workload: 60,
          currentTask: 'Brand guidelines update',
          taskProgress: 35,
          lastUpdate: '4 hours ago',
          avatar: 'CM'
        },
        {
          id: 'jessica-white',
          name: 'Jessica White',
          role: 'Marketing Coordinator',
          status: 'active',
          workload: 65,
          currentTask: 'Event planning coordination',
          taskProgress: 70,
          lastUpdate: '1 hour ago',
          avatar: 'JW'
        }
      ]
    },
    {
      id: 'leadership',
      name: 'Leadership',
      color: 'from-red-500 to-red-600',
      people: [
        {
          id: 'lisa-park',
          name: 'Lisa Park',
          role: 'VP of Sales',
          status: 'pending',
          workload: 60,
          currentTask: 'Final hiring decision and offer approval',
          taskProgress: 0,
          lastUpdate: 'Waiting for input',
          avatar: 'LP'
        },
        {
          id: 'john-smith',
          name: 'John Smith',
          role: 'CEO',
          status: 'active',
          workload: 85,
          currentTask: 'Strategic planning for Q1',
          taskProgress: 70,
          lastUpdate: '2 hours ago',
          avatar: 'JS'
        },
        {
          id: 'sarah-johnson',
          name: 'Sarah Johnson',
          role: 'CTO',
          status: 'busy',
          workload: 90,
          currentTask: 'Technology roadmap review',
          taskProgress: 75,
          lastUpdate: '1 hour ago',
          avatar: 'SJ'
        },
        {
          id: 'michael-brown',
          name: 'Michael Brown',
          role: 'CFO',
          status: 'active',
          workload: 80,
          currentTask: 'Financial strategy planning',
          taskProgress: 65,
          lastUpdate: '1 hour ago',
          avatar: 'MB'
        },
        {
          id: 'emily-davis',
          name: 'Emily Davis',
          role: 'VP of Marketing',
          status: 'active',
          workload: 75,
          currentTask: 'Marketing budget allocation',
          taskProgress: 60,
          lastUpdate: '2 hours ago',
          avatar: 'ED'
        },
        {
          id: 'robert-wilson',
          name: 'Robert Wilson',
          role: 'VP of Operations',
          status: 'busy',
          workload: 85,
          currentTask: 'Operational efficiency review',
          taskProgress: 70,
          lastUpdate: '45 minutes ago',
          avatar: 'RW'
        }
      ]
    }
  ]
};

export function NikeHiringOrgChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showHeatmap, setShowHeatmap] = useState(false);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'busy':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'busy':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getWorkloadColor = (workload: number) => {
    if (workload >= 90) return 'bg-red-500';
    if (workload >= 70) return 'bg-yellow-500';
    if (workload >= 50) return 'bg-blue-500';
    return 'bg-green-500';
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
            Real-Time Org Chart & Task Dependencies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how each department's workload and tasks are interconnected 
            in the hiring process.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
            <button
              onClick={() => setShowHeatmap(!showHeatmap)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                showHeatmap 
                  ? 'bg-purple-fintech text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <TrendingUp className="w-4 h-4 mr-2 inline" />
              {showHeatmap ? 'Hide' : 'Show'} Workload Heatmap
            </button>
            <div className="text-sm text-gray-600">
              Click on any person to see their details
            </div>
          </div>
        </motion.div>

        {/* Org Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          {orgData.departments.map((dept, deptIndex) => (
            <div key={dept.id} className="bg-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden">
              {/* Department Header */}
              <div className={`bg-gradient-to-r ${dept.color} px-6 py-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-white" />
                    <h3 className="text-lg font-semibold text-white">{dept.name}</h3>
                  </div>
                  <div className="text-white text-sm">
                    {dept.people.length} person{dept.people.length !== 1 ? 's' : ''}
                  </div>
                </div>
              </div>

              {/* People in Department */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dept.people.map((person, personIndex) => (
                    <motion.div
                      key={person.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, delay: (deptIndex * 0.2) + (personIndex * 0.1) }}
                      className={`group cursor-pointer transition-all duration-300 ${
                        selectedPerson?.id === person.id ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
                      }`}
                      onClick={() => setSelectedPerson(person)}
                    >
                      <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                        {/* Person Header */}
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                            {person.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 truncate">{person.name}</h4>
                            <p className="text-xs text-gray-600">{person.role}</p>
                          </div>
                          {getStatusIcon(person.status)}
                        </div>

                        {/* Workload Indicator */}
                        {showHeatmap && (
                          <div className="mb-4">
                            <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                              <span>Workload</span>
                              <span>{person.workload}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full transition-all duration-300 ${getWorkloadColor(person.workload)}`}
                                style={{ width: `${person.workload}%` }}
                              />
                            </div>
                          </div>
                        )}

                        {/* Current Task */}
                        <div className="mb-4">
                          <p className="text-xs font-medium text-gray-900 mb-1">Current Task</p>
                          <p className="text-xs text-gray-600 line-clamp-2">{person.currentTask}</p>
                        </div>

                        {/* Task Progress */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{person.taskProgress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                              className="bg-gradient-to-r from-purple-fintech to-purple-light h-1.5 rounded-full transition-all duration-300"
                              style={{ width: `${person.taskProgress}%` }}
                            />
                          </div>
                        </div>

                        {/* Status and Last Update */}
                        <div className="flex items-center justify-between">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(person.status)}`}>
                            {person.status}
                          </span>
                          <span className="text-xs text-gray-500">{person.lastUpdate}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Selected Person Details */}
        {selectedPerson && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white rounded-2xl shadow-soft-lg border border-gray-200 p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-fintech to-purple-light rounded-full flex items-center justify-center text-white font-bold text-lg">
                {selectedPerson.avatar}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedPerson.name}</h3>
                <p className="text-gray-600 mb-4">{selectedPerson.role}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Current Task</p>
                    <p className="text-sm text-gray-600">{selectedPerson.currentTask}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Workload</p>
                    <p className="text-sm text-gray-600">{selectedPerson.workload}%</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Last Update</p>
                    <p className="text-sm text-gray-600">{selectedPerson.lastUpdate}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedPerson(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
