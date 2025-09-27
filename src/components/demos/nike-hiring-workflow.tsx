'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  UserPlus, 
  DollarSign, 
  Settings, 
  Megaphone, 
  Users, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';

const workflowSteps = [
  {
    id: 1,
    title: 'HR Opens New Role',
    department: 'Human Resources',
    person: 'Sarah Chen - HR Manager',
    action: 'Creates "Senior Marketing Manager" position',
    status: 'completed',
    duration: '2 hours',
    details: 'Posted job description, set requirements, initiated approval workflow',
    icon: UserPlus,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Finance Aligns Budget',
    department: 'Finance',
    person: 'Michael Rodriguez - Finance Director',
    action: 'Reviews salary range and budget allocation',
    status: 'completed',
    duration: '4 hours',
    details: 'Approved $95K-$120K salary range, allocated Q4 budget, updated cost center',
    icon: DollarSign,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'Operations Team Fit',
    department: 'Operations',
    person: 'Jennifer Kim - Operations VP',
    action: 'Assesses team structure and reporting needs',
    status: 'in-progress',
    duration: '6 hours',
    details: 'Reviewing current team capacity, defining reporting structure, checking for conflicts',
    icon: Settings,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 4,
    title: 'Marketing Joins Panel',
    department: 'Marketing',
    person: 'David Thompson - Marketing Director',
    action: 'Prepares interview questions and evaluation criteria',
    status: 'pending',
    duration: '3 hours',
    details: 'Will create role-specific questions, define evaluation criteria, schedule interviews',
    icon: Megaphone,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 5,
    title: 'HR Runs Process',
    department: 'Human Resources',
    person: 'Sarah Chen - HR Manager',
    action: 'Coordinates interviews and candidate evaluation',
    status: 'pending',
    duration: '2 weeks',
    details: 'Will schedule interviews, coordinate with panel, manage candidate pipeline',
    icon: Users,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 6,
    title: 'Final Decision',
    department: 'Leadership',
    person: 'Lisa Park - VP of Sales',
    action: 'Makes final hiring decision with team input',
    status: 'pending',
    duration: '1 day',
    details: 'Will review all feedback, make final decision, approve offer',
    icon: CheckCircle,
    color: 'from-red-500 to-red-600'
  }
];

export function NikeHiringWorkflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

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
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
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
            Interactive Hiring Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click through each step to see how different departments coordinate 
            in real-time using Synapse Solutions.
          </p>
        </motion.div>

        {/* Workflow Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-lg shadow-soft border border-gray-200 p-4 flex items-center space-x-4">
            <button
              onClick={togglePlay}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-fintech text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause' : 'Play'} Demo</span>
            </button>
            <div className="text-sm text-gray-600">
              Step {currentStep + 1} of {workflowSteps.length}
            </div>
          </div>
        </motion.div>

        {/* Workflow Steps */}
        <div className="space-y-6">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group cursor-pointer transition-all duration-300 ${
                index === currentStep ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
              }`}
              onClick={() => handleStepClick(index)}
            >
              <div className="bg-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden hover:shadow-soft-lg transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Step Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-fintech transition-colors">
                          {step.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(step.status)}
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(step.status)}`}>
                            {step.status.replace('-', ' ')}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Department</p>
                          <p className="text-sm text-gray-600">{step.department}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Responsible</p>
                          <p className="text-sm text-gray-600">{step.person}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Duration</p>
                          <p className="text-sm text-gray-600">{step.duration}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-900 mb-1">Action</p>
                        <p className="text-sm text-gray-600">{step.action}</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700">{step.details}</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-fintech transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-white rounded-2xl shadow-soft border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Workflow Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">2</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">1</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">3</div>
              <div className="text-sm text-gray-600">Pending</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-fintech">33%</div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
