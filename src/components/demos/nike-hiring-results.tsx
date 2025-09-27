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
  Calendar
} from 'lucide-react';

const results = {
  timeSaved: {
    before: '3-4 weeks',
    after: '1-2 weeks',
    improvement: '50% faster'
  },
  toolsUsed: {
    before: 6,
    after: 1,
    improvement: '83% reduction'
  },
  stakeholders: {
    before: 8,
    after: 8,
    improvement: 'Same team, better coordination'
  },
  duplicateUpdates: {
    before: '15+ per role',
    after: '0',
    improvement: '100% elimination'
  }
};

const metrics = [
  {
    title: 'Time to Hire',
    before: '3-4 weeks',
    after: '1-2 weeks',
    improvement: '+50%',
    icon: Clock,
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Tools Required',
    before: '6 systems',
    after: '1 platform',
    improvement: '-83%',
    icon: Target,
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Duplicate Updates',
    before: '15+ per role',
    after: '0',
    improvement: '-100%',
    icon: CheckCircle,
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Stakeholder Satisfaction',
    before: '65%',
    after: '95%',
    improvement: '+30%',
    icon: Users,
    color: 'from-orange-500 to-orange-600'
  }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'HR Manager',
    department: 'Human Resources',
    quote: 'Finally, one place to manage the entire hiring process. No more switching between 6 different tools!',
    avatar: 'SC'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Finance Director',
    department: 'Finance',
    quote: 'Real-time budget visibility and instant approvals. This is how finance should work.',
    avatar: 'MR'
  },
  {
    name: 'Jennifer Kim',
    role: 'Operations VP',
    department: 'Operations',
    quote: 'I can see exactly what everyone is working on and how it impacts my team. Game changer.',
    avatar: 'JK'
  }
];

export function NikeHiringResults() {
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
            Results: Nike Hiring Process Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the measurable impact of unifying HR, Finance, Operations, 
            and Marketing into one seamless workflow.
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
                <span className="text-gray-700">3-4 weeks to complete hiring process</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">6 different tools and systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">15+ duplicate updates per role</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">Endless back-and-forth between departments</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">No real-time visibility or coordination</span>
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
                <span className="text-gray-700">1-2 weeks to complete hiring process</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">1 unified platform</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">0 duplicate updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Automated workflows and approvals</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Real-time visibility and AI coordination</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">ROI Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">50%</div>
              <div className="text-sm opacity-90">Faster Time to Hire</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">83%</div>
              <div className="text-sm opacity-90">Reduction in Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Elimination of Duplicates</div>
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
