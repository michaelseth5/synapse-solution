'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Shield, Users, UserCheck, Lock, Eye, EyeOff } from 'lucide-react';

const privacyLevels = [
  {
    name: 'Org-wide',
    description: 'Visible to all organization members',
    icon: Users,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    fields: ['Name', 'Role', 'Department', 'Current Tasks', 'Public Notes']
  },
  {
    name: 'Team-only',
    description: 'Visible to team members and direct reports',
    icon: UserCheck,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    fields: ['Name', 'Role', 'Department', 'Current Tasks', 'Team Notes', 'Performance Metrics']
  },
  {
    name: 'Leadership-only',
    description: 'Visible to leadership and HR',
    icon: Lock,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    fields: ['Name', 'Role', 'Department', 'Current Tasks', 'Team Notes', 'Performance Metrics', 'Salary', 'Personal Details']
  }
];

const redactionOptions = [
  { name: 'Sensitive Data', description: 'Salary, personal information, health data' },
  { name: 'Financial Info', description: 'Budget details, revenue numbers, cost data' },
  { name: 'Legal Documents', description: 'Contracts, legal opinions, compliance data' },
  { name: 'Strategic Plans', description: 'Future roadmaps, competitive intelligence' }
];

export function PrivacyControls() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedLevel, setSelectedLevel] = useState('Team-only');
  const [redactionSettings, setRedactionSettings] = useState({
    'Sensitive Data': true,
    'Financial Info': true,
    'Legal Documents': false,
    'Strategic Plans': false
  });

  const handleRedactionToggle = (option: string) => {
    setRedactionSettings(prev => ({
      ...prev,
      [option]: !prev[option as keyof typeof prev]
    }));
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
            Granular Privacy Controls
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Control who can see what information with our flexible privacy system. 
            Set different visibility levels and redaction rules for maximum security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Privacy Levels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Visibility Levels</h3>
            <div className="space-y-4">
              {privacyLevels.map((level, index) => (
                <motion.div
                  key={level.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedLevel === level.name
                      ? `${level.borderColor} ${level.bgColor} shadow-soft`
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedLevel(level.name)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${level.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <level.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{level.name}</h4>
                      <p className="text-gray-600 mb-3">{level.description}</p>
                      <div className="space-y-1">
                        {level.fields.map((field, fieldIndex) => (
                          <div key={fieldIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-fintech rounded-full"></div>
                            <span className="text-sm text-gray-700">{field}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Redaction Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Redaction Settings</h3>
            <div className="space-y-4">
              {redactionOptions.map((option, index) => (
                <motion.div
                  key={option.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{option.name}</h4>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </div>
                    <button
                      onClick={() => handleRedactionToggle(option.name)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        redactionSettings[option.name as keyof typeof redactionSettings]
                          ? 'bg-purple-fintech'
                          : 'bg-gray-200'
                      }`}
                      data-demo="privacy-toggle"
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          redactionSettings[option.name as keyof typeof redactionSettings]
                            ? 'translate-x-6'
                            : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 bg-white p-6 rounded-xl border border-gray-200"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>Preview: What Others See</span>
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Name:</span>
                  <span className="text-sm text-gray-900">John Smith</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Role:</span>
                  <span className="text-sm text-gray-900">Sales Director</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Current Task:</span>
                  <span className="text-sm text-gray-900">Acme Corp Integration</span>
                </div>
                {redactionSettings['Sensitive Data'] && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Salary:</span>
                    <span className="text-sm text-gray-400 flex items-center space-x-1">
                      <EyeOff className="w-3 h-3" />
                      <span>Redacted</span>
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
