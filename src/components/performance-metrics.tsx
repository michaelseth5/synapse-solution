'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function PerformanceMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Performance Metrics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed performance analytics and KPI tracking.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-soft border border-gray-200 p-8">
          <p className="text-center text-gray-600">
            Performance metrics will be displayed here.
          </p>
        </div>
      </div>
    </section>
  );
}
