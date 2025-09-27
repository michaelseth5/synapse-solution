'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Platform',
      href: '#',
      dropdown: [
        { name: 'Data Sources', href: '/data-sources' },
        { name: 'Org Chart & Tasks', href: '/org-chart' },
        { name: 'Agentic Chatbot', href: '/agentic-chatbot' },
        { name: 'Governance & Transparency', href: '/governance' },
        { name: 'Employee Profiles', href: '/employee-profile' },
        { name: 'Task Management', href: '/task-management' },
        { name: 'Team Collaboration', href: '/team-collaboration' },
        { name: 'Workload Analytics', href: '/workload-analytics' },
        { name: 'AI Insights', href: '/ai-insights' },
      ]
    },
    {
      name: 'Demos',
      href: '#',
      dropdown: [
        { name: 'Nike Hiring Process', href: '/demos/nike-hiring' },
        { name: 'Fogo Restaurant Opening', href: '/demos/fogo-restaurant' },
      ]
    },
    { name: 'Security', href: '/security' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Synapse Solutions</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="text-gray-700 hover:text-purple-fintech px-3 py-2 text-sm font-medium flex items-center space-x-1 transition-colors">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-soft-lg border border-gray-200 py-1 z-50"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-fintech transition-colors"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-purple-fintech px-3 py-2 text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                href="#demo"
                className="text-gray-700 hover:text-purple-fintech px-3 py-2 text-sm font-medium transition-colors"
              >
                Watch Overview
              </Link>
              <Link
                href="#demo"
                className="gradient-purple text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-soft-lg transition-all duration-200"
              >
                Request a Demo
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-fintech p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-gray-700 px-3 py-2 text-base font-medium">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-gray-600 hover:text-purple-fintech px-3 py-2 text-sm transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-purple-fintech block px-3 py-2 text-base font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link
                  href="#demo"
                  className="text-gray-700 hover:text-purple-fintech block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Watch Overview
                </Link>
                <Link
                  href="#demo"
                  className="gradient-purple text-white block px-3 py-2 rounded-lg text-base font-medium hover:shadow-soft-lg transition-all duration-200 mx-3"
                  onClick={() => setIsOpen(false)}
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
