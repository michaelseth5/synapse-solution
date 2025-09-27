'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Zap,
  ArrowRight,
  BarChart3,
  Target,
  Calendar,
  Building2,
  MapPin,
  AlertCircle
} from 'lucide-react';

const results = {
  timeToOpen: {
    before: '6-8 months',
    after: '4 months',
    improvement: '33% faster'
  },
  coordination: {
    before: 'Manual updates',
    after: 'Real-time sync',
    improvement: '100% automated'
  },
  departments: {
    before: 'Siloed communication',
    after: 'Unified platform',
    improvement: 'Seamless coordination'
  },
  visibility: {
    before: 'Limited visibility',
    after: 'Full transparency',
    improvement: 'Complete oversight'
  }
};

const metrics = [
  {
    title: 'Time to Opening',
    before: '6-8 months',
    after: '4 months',
    improvement: '+33%',
    icon: Calendar,
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Coordination Efficiency',
    before: 'Manual updates',
    after: 'Real-time sync',
    improvement: '+100%',
    icon: Zap,
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Department Visibility',
    before: 'Limited',
    after: 'Complete',
    improvement: '+100%',
    icon: Users,
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Project Success Rate',
    before: '75%',
    after: '95%',
    improvement: '+20%',
    icon: Target,
    color: 'from-orange-500 to-orange-600'
  }
];

const testimonials = [
  {
    name: 'Real Estate Manager',
    role: 'Location Acquisition',
    department: 'Real Estate',
    quote: 'Finally, I can see how my work impacts every other department in real-time. No more guessing!',
    avatar: 'RE'
  },
  {
    name: 'Operations VP',
    role: 'Training & Coordination',
    department: 'Operations',
    quote: 'The coordination features saved us weeks of back-and-forth. Everything is connected and visible.',
    avatar: 'OV'
  },
  {
    name: 'Finance Director',
    role: 'Budget Management',
    department: 'Finance',
    quote: 'Real-time budget visibility across all departments. This is how project management should work.',
    avatar: 'FD'
  }
];

const projectTimeline = [
  {
    phase: 'Month 1',
    title: 'Location & Budget',
    status: 'completed',
    departments: ['Real Estate', 'Finance'],
    keyOutcomes: ['Location secured', 'Budget allocated', 'Vendor contracts initiated']
  },
  {
    phase: 'Month 2',
    title: 'Operations & HR',
    status: 'in-progress',
    departments: ['Operations', 'HR'],
    keyOutcomes: ['Training programs designed', 'Local recruitment started', 'Relocation packages prepared']
  },
  {
    phase: 'Month 3',
    title: 'Legal & Compliance',
    status: 'pending',
    departments: ['Legal', 'Finance'],
    keyOutcomes: ['Permits submitted', 'Compliance reviewed', 'Contracts finalized']
  },
  {
    phase: 'Month 4',
    title: 'Final Launch',
    status: 'pending',
    departments: ['All Departments'],
    keyOutcomes: ['Staff training completed', 'Soft opening scheduled', 'Grand opening planned']
  }
];

export function FogoRestaurantResults() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Results: Fogo de Chão Restaurant Opening
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the measurable impact of unifying Real Estate, Operations, Finance, 
            HR, and Legal into one seamless 4-month opening process.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-soft border border-gray-200 p-6 text-center">
              <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</h3>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">
                  <span className="line-through">{metric.before}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {metric.after}
                </div>
                <div className={`text-sm font-semibold ${
                  metric.improvement.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.improvement}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Before vs After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Before */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
              <BarChart3 className="w-6 h-6 mr-3" />
              Before Synapse
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">6-8 months to open restaurant</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">Siloed department communication</span>
              </div>
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">Manual status updates and coordination</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">Limited visibility into budget impact</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">Constant back-and-forth between departments</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3" />
              After Synapse
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">4 months to open restaurant</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Unified platform for all departments</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Real-time updates and coordination</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Complete budget visibility and tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Automated workflows and dependencies</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Timeline Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            4-Month Opening Timeline Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTimeline.map((phase, index) => (
              <div key={phase.phase} className="bg-gray-50 rounded-2xl p-6">
                <div className="text-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${
                    phase.status === 'completed' ? 'from-green-500 to-green-600' :
                    phase.status === 'in-progress' ? 'from-blue-500 to-blue-600' :
                    'from-gray-400 to-gray-500'
                  } rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{phase.phase}</h4>
                  <p className="text-sm text-gray-600">{phase.title}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Departments</p>
                  <div className="flex flex-wrap gap-1">
                    {phase.departments.map((dept, deptIndex) => (
                      <span key={deptIndex} className="px-2 py-1 bg-white text-gray-700 text-xs rounded">
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">Key Outcomes</p>
                  <ul className="space-y-1">
                    {phase.keyOutcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-center space-x-2 text-xs text-gray-600">
                        <div className="w-1 h-1 bg-purple-fintech rounded-full"></div>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What the Team Says
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-fintech to-purple-light rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-purple-fintech">{testimonial.department}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ROI Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">ROI Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">33%</div>
              <div className="text-sm opacity-90">Faster Opening</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Real-time Coordination</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$500K</div>
              <div className="text-sm opacity-90">Cost Savings</div>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-white text-purple-fintech px-8 py-3 rounded-lg font-semibold hover:shadow-soft-lg transition-all duration-200 flex items-center space-x-2 mx-auto">
              <span>Try This Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
