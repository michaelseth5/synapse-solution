'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  TrendingUp,
  ArrowRight,
  Building2,
  MapPin,
  DollarSign,
  UserPlus,
  Shield
} from 'lucide-react';

const departments = [
  {
    id: 'real-estate',
    name: 'Real Estate',
    color: 'from-blue-500 to-blue-600',
    icon: MapPin,
    people: [
      {
        id: 're-manager',
        name: 'Real Estate Manager',
        role: 'Location Acquisition',
        status: 'completed',
        workload: 100,
        currentTask: 'Location secured in North Carolina',
        lastUpdate: '1 week ago',
        avatar: 'RE'
      },
      {
        id: 're-vp',
        name: 'VP Real Estate',
        role: 'Strategic Planning',
        status: 'completed',
        workload: 100,
        currentTask: 'Lease terms finalized',
        lastUpdate: '1 week ago',
        avatar: 'VP'
      },
      {
        id: 're-analyst',
        name: 'Market Analyst',
        role: 'Market Research',
        status: 'completed',
        workload: 90,
        currentTask: 'Demographic analysis completed',
        lastUpdate: '1 week ago',
        avatar: 'RA'
      },
      {
        id: 're-coordinator',
        name: 'Site Coordinator',
        role: 'Site Management',
        status: 'in-progress',
        workload: 75,
        currentTask: 'Site preparation planning',
        lastUpdate: '3 days ago',
        avatar: 'RC'
      },
      {
        id: 're-specialist',
        name: 'Lease Specialist',
        role: 'Contract Management',
        status: 'completed',
        workload: 95,
        currentTask: 'Lease documentation finalized',
        lastUpdate: '5 days ago',
        avatar: 'RS'
      },
      {
        id: 're-assistant',
        name: 'RE Assistant',
        role: 'Administrative Support',
        status: 'active',
        workload: 60,
        currentTask: 'Documentation filing',
        lastUpdate: '2 days ago',
        avatar: 'RA'
      }
    ]
  },
  {
    id: 'finance',
    name: 'Finance & Accounting',
    color: 'from-green-500 to-green-600',
    icon: DollarSign,
    people: [
      {
        id: 'finance-director',
        name: 'Finance Director',
        role: 'Budget Management',
        status: 'completed',
        workload: 80,
        currentTask: '$2.5M budget allocated',
        lastUpdate: '5 days ago',
        avatar: 'FD'
      },
      {
        id: 'accounting-manager',
        name: 'Accounting Manager',
        role: 'Vendor Contracts',
        status: 'in-progress',
        workload: 60,
        currentTask: 'Vendor contract negotiations',
        lastUpdate: '2 days ago',
        avatar: 'AM'
      },
      {
        id: 'financial-analyst',
        name: 'Financial Analyst',
        role: 'Cost Analysis',
        status: 'active',
        workload: 70,
        currentTask: 'ROI projections for new location',
        lastUpdate: '1 day ago',
        avatar: 'FA'
      },
      {
        id: 'accounts-payable',
        name: 'Accounts Payable',
        role: 'Payment Processing',
        status: 'active',
        workload: 65,
        currentTask: 'Vendor payment setup',
        lastUpdate: '2 days ago',
        avatar: 'AP'
      },
      {
        id: 'budget-coordinator',
        name: 'Budget Coordinator',
        role: 'Budget Tracking',
        status: 'in-progress',
        workload: 55,
        currentTask: 'Monthly budget variance analysis',
        lastUpdate: '3 days ago',
        avatar: 'BC'
      },
      {
        id: 'cost-controller',
        name: 'Cost Controller',
        role: 'Cost Management',
        status: 'pending',
        workload: 45,
        currentTask: 'Cost control procedures setup',
        lastUpdate: '4 days ago',
        avatar: 'CC'
      }
    ]
  },
  {
    id: 'operations',
    name: 'Operations',
    color: 'from-orange-500 to-orange-600',
    icon: Building2,
    people: [
      {
        id: 'ops-vp',
        name: 'Operations VP',
        role: 'Training & Coordination',
        status: 'in-progress',
        workload: 70,
        currentTask: 'Setting up training programs',
        lastUpdate: '1 day ago',
        avatar: 'OV'
      },
      {
        id: 'ops-manager',
        name: 'Operations Manager',
        role: 'Daily Operations',
        status: 'active',
        workload: 80,
        currentTask: 'Standard operating procedures',
        lastUpdate: '2 days ago',
        avatar: 'OM'
      },
      {
        id: 'training-coordinator',
        name: 'Training Coordinator',
        role: 'Staff Training',
        status: 'in-progress',
        workload: 75,
        currentTask: 'Training curriculum development',
        lastUpdate: '1 day ago',
        avatar: 'TC'
      },
      {
        id: 'quality-manager',
        name: 'Quality Manager',
        role: 'Quality Control',
        status: 'pending',
        workload: 50,
        currentTask: 'Quality standards implementation',
        lastUpdate: '3 days ago',
        avatar: 'QM'
      },
      {
        id: 'supply-coordinator',
        name: 'Supply Coordinator',
        role: 'Inventory Management',
        status: 'active',
        workload: 65,
        currentTask: 'Vendor relationship management',
        lastUpdate: '2 days ago',
        avatar: 'SC'
      },
      {
        id: 'facilities-manager',
        name: 'Facilities Manager',
        role: 'Facility Setup',
        status: 'in-progress',
        workload: 70,
        currentTask: 'Equipment installation planning',
        lastUpdate: '1 day ago',
        avatar: 'FM'
      }
    ]
  },
  {
    id: 'hr',
    name: 'Human Resources',
    color: 'from-purple-500 to-purple-600',
    icon: UserPlus,
    people: [
      {
        id: 'hr-manager',
        name: 'HR Manager',
        role: 'Hiring & Relocations',
        status: 'in-progress',
        workload: 85,
        currentTask: 'Recruiting local talent',
        lastUpdate: '3 hours ago',
        avatar: 'HR'
      },
      {
        id: 'recruiter',
        name: 'Recruiter',
        role: 'Talent Acquisition',
        status: 'active',
        workload: 80,
        currentTask: 'Interview scheduling',
        lastUpdate: '2 hours ago',
        avatar: 'RC'
      },
      {
        id: 'onboarding-specialist',
        name: 'Onboarding Specialist',
        role: 'Employee Onboarding',
        status: 'pending',
        workload: 60,
        currentTask: 'Onboarding process design',
        lastUpdate: '1 day ago',
        avatar: 'OS'
      },
      {
        id: 'benefits-coordinator',
        name: 'Benefits Coordinator',
        role: 'Benefits Management',
        status: 'active',
        workload: 55,
        currentTask: 'Benefits package setup',
        lastUpdate: '2 days ago',
        avatar: 'BC'
      },
      {
        id: 'payroll-specialist',
        name: 'Payroll Specialist',
        role: 'Payroll Processing',
        status: 'pending',
        workload: 45,
        currentTask: 'Payroll system setup',
        lastUpdate: '3 days ago',
        avatar: 'PS'
      },
      {
        id: 'hr-assistant',
        name: 'HR Assistant',
        role: 'Administrative Support',
        status: 'active',
        workload: 50,
        currentTask: 'Documentation management',
        lastUpdate: '1 day ago',
        avatar: 'HA'
      }
    ]
  },
  {
    id: 'legal',
    name: 'Legal',
    color: 'from-red-500 to-red-600',
    icon: Shield,
    people: [
      {
        id: 'legal-counsel',
        name: 'Legal Counsel',
        role: 'Compliance & Permits',
        status: 'pending',
        workload: 40,
        currentTask: 'Permit applications submitted',
        lastUpdate: '3 days ago',
        avatar: 'LC'
      },
      {
        id: 'compliance-officer',
        name: 'Compliance Officer',
        role: 'Regulatory Compliance',
        status: 'in-progress',
        workload: 65,
        currentTask: 'Compliance checklist review',
        lastUpdate: '2 days ago',
        avatar: 'CO'
      },
      {
        id: 'contract-specialist',
        name: 'Contract Specialist',
        role: 'Contract Review',
        status: 'active',
        workload: 70,
        currentTask: 'Vendor contract review',
        lastUpdate: '1 day ago',
        avatar: 'CS'
      },
      {
        id: 'permits-coordinator',
        name: 'Permits Coordinator',
        role: 'Permit Management',
        status: 'pending',
        workload: 55,
        currentTask: 'Health department permits',
        lastUpdate: '4 days ago',
        avatar: 'PC'
      },
      {
        id: 'risk-manager',
        name: 'Risk Manager',
        role: 'Risk Assessment',
        status: 'pending',
        workload: 50,
        currentTask: 'Insurance policy review',
        lastUpdate: '5 days ago',
        avatar: 'RM'
      },
      {
        id: 'legal-assistant',
        name: 'Legal Assistant',
        role: 'Documentation Support',
        status: 'active',
        workload: 45,
        currentTask: 'Legal document filing',
        lastUpdate: '2 days ago',
        avatar: 'LA'
      }
    ]
  }
];

const coordinationUpdates = [
  {
    id: 1,
    type: 'update',
    department: 'Real Estate',
    person: 'Real Estate Manager',
    action: 'Location secured in North Carolina',
    timestamp: '1 week ago',
    impact: 'Enables all other departments to proceed',
    color: 'text-green-600'
  },
  {
    id: 2,
    type: 'coordination',
    department: 'Finance',
    person: 'Finance Director',
    action: 'Budget allocation shared with all departments',
    timestamp: '5 days ago',
    impact: 'Operations and HR can now plan accordingly',
    color: 'text-blue-600'
  },
  {
    id: 3,
    type: 'update',
    department: 'Operations',
    person: 'Operations VP',
    action: 'Training program design completed',
    timestamp: '2 days ago',
    impact: 'HR can now schedule staff training',
    color: 'text-orange-600'
  },
  {
    id: 4,
    type: 'coordination',
    department: 'HR',
    person: 'HR Manager',
    action: 'Local talent recruitment started',
    timestamp: '1 day ago',
    impact: 'Operations team can plan for new staff',
    color: 'text-purple-600'
  },
  {
    id: 5,
    type: 'blocker',
    department: 'Legal',
    person: 'Legal Counsel',
    action: 'Permit applications submitted',
    timestamp: '3 days ago',
    impact: 'Waiting for approval to proceed with final setup',
    color: 'text-red-600'
  }
];

export function FogoRestaurantCoordination() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showDependencies, setShowDependencies] = useState(true);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
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
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cross-Department Coordination
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time coordination between all departments with automated updates, 
            dependency tracking, and seamless communication.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-lg p-4 flex items-center space-x-4">
            <button
              onClick={() => setShowDependencies(!showDependencies)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                showDependencies 
                  ? 'bg-purple-fintech text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <TrendingUp className="w-4 h-4 mr-2 inline" />
              {showDependencies ? 'Hide' : 'Show'} Dependencies
            </button>
            <div className="text-sm text-gray-600">
              Click on any person to see their coordination details
            </div>
          </div>
        </motion.div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {departments.map((dept, deptIndex) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: deptIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden"
            >
              {/* Department Header */}
              <div className={`bg-gradient-to-r ${dept.color} px-6 py-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <dept.icon className="w-6 h-6 text-white" />
                    <h3 className="text-lg font-semibold text-white">{dept.name}</h3>
                  </div>
                  <div className="text-white text-sm">
                    {dept.people.length} person{dept.people.length !== 1 ? 's' : ''}
                  </div>
                </div>
              </div>

              {/* People in Department */}
              <div className="p-6">
                <div className="space-y-4">
                  {dept.people.map((person, personIndex) => (
                    <div
                      key={person.id}
                      className={`group cursor-pointer transition-all duration-300 p-4 rounded-lg border ${
                        selectedPerson?.id === person.id 
                          ? 'border-purple-500 bg-purple-50' 
                          : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedPerson(person)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${dept.color} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                          {person.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 truncate">{person.name}</h4>
                          <p className="text-xs text-gray-600">{person.role}</p>
                        </div>
                        {getStatusIcon(person.status)}
                      </div>

                      <div className="mt-3">
                        <p className="text-xs text-gray-600 mb-2">{person.currentTask}</p>
                        
                        {/* Workload Indicator */}
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                          <span>Workload</span>
                          <span>{person.workload}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full transition-all duration-300 ${getWorkloadColor(person.workload)}`}
                            style={{ width: `${person.workload}%` }}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(person.status)}`}>
                            {person.status}
                          </span>
                          <span className="text-xs text-gray-500">{person.lastUpdate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real-time Updates Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-soft border border-gray-200 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MessageSquare className="w-6 h-6 mr-3 text-purple-fintech" />
            Real-time Coordination Updates
          </h3>
          
          <div className="space-y-4">
            {coordinationUpdates.map((update, index) => (
              <div key={update.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${update.color.replace('text-', 'bg-')}`}></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold text-gray-900">
                      {update.person} ({update.department})
                    </h4>
                    <span className="text-xs text-gray-500">{update.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{update.action}</p>
                  <p className="text-xs text-gray-600">
                    <strong>Impact:</strong> {update.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
