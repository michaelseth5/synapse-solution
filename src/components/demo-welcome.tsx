'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Sparkles, ArrowRight } from 'lucide-react';

export function DemoWelcome() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenDemo, setHasSeenDemo] = useState(false);

  useEffect(() => {
    // Check if user has seen the demo before
    const seenDemo = localStorage.getItem('synapse-demo-seen');
    if (!seenDemo) {
      // Show welcome modal after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setHasSeenDemo(true);
    }
  }, []);

  const handleStartDemo = () => {
    localStorage.setItem('synapse-demo-seen', 'true');
    setIsOpen(false);
    setHasSeenDemo(true);
  };

  const handleSkip = () => {
    localStorage.setItem('synapse-demo-seen', 'true');
    setIsOpen(false);
    setHasSeenDemo(true);
  };

  if (hasSeenDemo) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl shadow-soft-lg max-w-md w-full p-8 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50 opacity-50" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-fintech/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
            
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={handleSkip}
                className="absolute top-0 right-0 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Welcome to Synapse Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  Experience our agentic AI platform that un-silos revenue teams. 
                  This interactive demo will show you all the key features.
                </p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-fintech rounded-full"></div>
                    <span className="text-sm text-gray-700">Interactive org chart with real-time updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-fintech rounded-full"></div>
                    <span className="text-sm text-gray-700">AI assistant for natural language commands</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-fintech rounded-full"></div>
                    <span className="text-sm text-gray-700">Privacy controls and governance features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-fintech rounded-full"></div>
                    <span className="text-sm text-gray-700">Live data updates and demo highlights</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleStartDemo}
                  className="flex-1 gradient-purple text-white px-6 py-3 rounded-lg font-semibold hover:shadow-soft-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Start Interactive Demo</span>
                </button>
                
                <button
                  onClick={handleSkip}
                  className="flex-1 text-gray-700 hover:text-purple-fintech px-6 py-3 rounded-lg font-semibold border-2 border-gray-200 hover:border-purple-fintech transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Skip Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Demo Mode Indicator */}
              <div className="mt-6 p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-purple-700">
                  <div className="w-2 h-2 bg-purple-fintech rounded-full animate-pulse"></div>
                  <span>Demo mode will highlight interactive features as you explore</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
