'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, User, Shield, FileText, AlertCircle, CheckCircle } from 'lucide-react';

const auditEvents = [
  {
    id: '1',
    timestamp: '2024-01-15 14:30:22',
    user: 'Sarah Chen',
    action: 'Updated task status',
    details: 'Changed "Acme Corp Integration" from In Progress to Completed',
    type: 'task_update',
    severity: 'info'
  },
  {
    id: '2',
    timestamp: '2024-01-15 14:25:15',
    user: 'John Smith',
    action: 'Added team member',
    details: 'Added Maria Johnson to Acme Corp account team',
    type: 'team_update',
    severity: 'info'
  },
  {
    id: '3',
    timestamp: '2024-01-15 14:20:08',
    user: 'System',
    action: 'Auto-snapshot created',
    details: 'Scheduled snapshot #247 generated successfully',
    type: 'system',
    severity: 'success'
  },
  {
    id: '4',
    timestamp: '2024-01-15 14:15:33',
    user: 'David Chen',
    action: 'Privacy settings changed',
    details: 'Updated visibility level to Team-only for Q4 Planning documents',
    type: 'privacy_change',
    severity: 'warning'
  },
  {
    id: '5',
    timestamp: '2024-01-15 14:10:45',
    user: 'Lisa Thompson',
    action: 'Data export requested',
    details: 'Exported org chart as PDF for leadership review',
    type: 'export',
    severity: 'info'
  },
  {
    id: '6',
    timestamp: '2024-01-15 14:05:12',
    user: 'System',
    action: 'Security scan completed',
    details: 'No vulnerabilities detected in latest security scan',
    type: 'security',
    severity: 'success'
  }
];

const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case 'success':
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    case 'warning':
      return <AlertCircle className="w-4 h-4 text-yellow-500" />;
    case 'error':
      return <AlertCircle className="w-4 h-4 text-red-500" />;
    default:
      return <Clock className="w-4 h-4 text-blue-500" />;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'success':
      return 'border-l-green-500 bg-green-50';
    case 'warning':
      return 'border-l-yellow-500 bg-yellow-50';
    case 'error':
      return 'border-l-red-500 bg-red-50';
    default:
      return 'border-l-blue-500 bg-blue-50';
  }
};

export function AuditTrail() {
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
            Complete Audit Trail
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every action is logged with timestamps, user attribution, and detailed context. 
            Maintain complete transparency and compliance with comprehensive audit trails.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">All systems secure</span>
                </div>
                <button className="text-purple-fintech hover:text-purple-700 text-sm font-medium">
                  Export Logs
                </button>
              </div>
            </div>
          </div>

          {/* Audit Events */}
          <div className="max-h-96 overflow-y-auto">
            {auditEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.05) }}
                className={`border-l-4 ${getSeverityColor(event.severity)} p-6 hover:bg-gray-50 transition-colors`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getSeverityIcon(event.severity)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <h4 className="text-sm font-semibold text-gray-900">{event.action}</h4>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {event.type.replace('_', ' ')}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{event.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{event.details}</p>
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">by {event.user}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">247 total events today</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">No security issues</span>
                </div>
              </div>
              <button className="text-purple-fintech hover:text-purple-700 text-sm font-medium">
                View All Events
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-fintech mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-fintech mb-2">247</div>
            <div className="text-sm text-gray-600">Events Today</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-fintech mb-2">0</div>
            <div className="text-sm text-gray-600">Security Issues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-fintech mb-2">24/7</div>
            <div className="text-sm text-gray-600">Monitoring</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
