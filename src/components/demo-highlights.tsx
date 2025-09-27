'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Users, Shield, BarChart3 } from 'lucide-react';

const highlights = [
  {
    id: 'revenue-metrics',
    title: 'Real-time Revenue Tracking',
    description: 'Live revenue metrics updating every 30 seconds',
    icon: BarChart3,
    color: 'from-green-500 to-green-600',
    position: { top: '20%', left: '10%' },
    demoAction: () => {
      // Simulate revenue update
      const elements = document.querySelectorAll('[data-demo="revenue-metric"]');
      elements.forEach(el => {
        el.classList.add('animate-pulse');
        setTimeout(() => el.classList.remove('animate-pulse'), 1000);
      });
    }
  },
  {
    id: 'org-chart-interaction',
    title: 'Interactive Org Chart',
    description: 'Click and drag nodes to explore team relationships',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    position: { top: '40%', right: '15%' },
    demoAction: () => {
      // Highlight org chart
      const orgChart = document.querySelector('[data-demo="org-chart"]');
      if (orgChart) {
        orgChart.classList.add('ring-4', 'ring-blue-500', 'ring-opacity-50');
        setTimeout(() => {
          orgChart.classList.remove('ring-4', 'ring-blue-500', 'ring-opacity-50');
        }, 2000);
      }
    }
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant',
    description: 'Try natural language commands in the chat bubble',
    icon: Zap,
    color: 'from-purple-500 to-purple-600',
    position: { bottom: '20%', right: '10%' },
    demoAction: () => {
      // Pulse the AI assistant button
      const aiButton = document.querySelector('[data-demo="ai-assistant"]');
      if (aiButton) {
        aiButton.classList.add('animate-bounce');
        setTimeout(() => aiButton.classList.remove('animate-bounce'), 2000);
      }
    }
  },
  {
    id: 'privacy-controls',
    title: 'Privacy Controls',
    description: 'Granular visibility settings and redaction options',
    icon: Shield,
    color: 'from-orange-500 to-orange-600',
    position: { top: '60%', left: '20%' },
    demoAction: () => {
      // Highlight privacy toggles
      const toggles = document.querySelectorAll('[data-demo="privacy-toggle"]');
      toggles.forEach((toggle, index) => {
        setTimeout(() => {
          toggle.classList.add('ring-2', 'ring-orange-500');
          setTimeout(() => {
            toggle.classList.remove('ring-2', 'ring-orange-500');
          }, 1000);
        }, index * 200);
      });
    }
  }
];

export function DemoHighlights() {
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);
  const [showHighlights, setShowHighlights] = useState(false);

  useEffect(() => {
    // Show highlights after a short delay
    const timer = setTimeout(() => {
      setShowHighlights(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleHighlightClick = (highlight: typeof highlights[0]) => {
    setActiveHighlight(highlight.id);
    highlight.demoAction();
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
      setActiveHighlight(null);
    }, 3000);
  };

  if (!showHighlights) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {highlights.map((highlight) => (
        <motion.div
          key={highlight.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: highlights.indexOf(highlight) * 0.2 }}
          className="absolute pointer-events-auto"
          style={highlight.position}
        >
          <motion.button
            onClick={() => handleHighlightClick(highlight)}
            className={`group relative bg-white rounded-lg shadow-soft-lg border border-gray-200 p-4 hover:shadow-soft-lg transition-all duration-300 ${
              activeHighlight === highlight.id ? 'ring-2 ring-purple-500' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Pulse animation */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${highlight.color} rounded-lg opacity-20`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <div className="relative flex items-start space-x-3">
              <div className={`w-10 h-10 bg-gradient-to-r ${highlight.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <highlight.icon className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-purple-fintech transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  {highlight.description}
                </p>
              </div>
            </div>

            {/* Arrow pointing to element */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-purple-fintech rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowRight className="w-2 h-2 text-white" />
            </motion.div>
          </motion.button>
        </motion.div>
      ))}

      {/* Demo overlay */}
      <AnimatePresence>
        {activeHighlight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
