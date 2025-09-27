'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function DemoMode() {
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    { id: 'home', name: 'Homepage Overview', duration: 3000 },
    { id: 'data-sources', name: 'Data Sources Integration', duration: 4000 },
    { id: 'org-chart', name: 'Interactive Org Chart', duration: 5000 },
    { id: 'governance', name: 'Governance & Privacy', duration: 4000 },
    { id: 'ai-assistant', name: 'AI Assistant Demo', duration: 3000 },
    { id: 'security', name: 'Security & Compliance', duration: 3000 },
    { id: 'resources', name: 'Resources & Research', duration: 3000 },
  ];

  useEffect(() => {
    if (isPlaying && isDemoMode) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length);
      }, demoSteps[currentStep].duration);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, isDemoMode, currentStep, demoSteps]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setIsPlaying(false);
  };

  if (!isDemoMode) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed top-4 right-4 z-50 bg-gradient-to-r from-purple-fintech to-purple-light text-white px-4 py-2 rounded-lg shadow-soft-lg hover:shadow-soft-lg transition-all duration-300 flex items-center space-x-2"
        onClick={() => setIsDemoMode(true)}
      >
        <Play className="w-4 h-4" />
        <span className="font-semibold">Start Demo</span>
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-soft-lg border border-gray-200 p-4 min-w-[300px]"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Demo Mode</h3>
        <button
          onClick={() => setIsDemoMode(false)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          ×
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-600 mb-2">
          <span>Step {currentStep + 1} of {demoSteps.length}</span>
          <span>{Math.round((currentStep / demoSteps.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-purple-fintech to-purple-light h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Current Step */}
      <div className="mb-4">
        <div className="text-sm font-medium text-gray-900 mb-1">
          {demoSteps[currentStep].name}
        </div>
        <div className="text-xs text-gray-600">
          Duration: {demoSteps[currentStep].duration / 1000}s
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={handlePlayPause}
          className="flex items-center justify-center w-8 h-8 bg-purple-fintech text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        
        <button
          onClick={handleReset}
          className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <div className="flex-1">
          <div className="text-xs text-gray-600 mb-1">Steps:</div>
          <div className="flex space-x-1">
            {demoSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep
                    ? 'bg-purple-fintech'
                    : index < currentStep
                    ? 'bg-purple-300'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Auto-navigation hint */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-xs text-gray-500 text-center"
        >
          Auto-advancing through demo steps...
        </motion.div>
      )}
    </motion.div>
  );
}
