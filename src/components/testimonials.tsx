'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Revenue Operations',
    company: 'TechCorp',
    content: 'Synapse Solutions transformed how we manage our revenue teams. We\'ve seen a 40% improvement in decision speed and eliminated countless duplicate efforts.',
    rating: 5,
    avatar: 'SC'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Revenue Officer',
    company: 'Growth Inc',
    content: 'The AI assistant is incredible. I can manage my entire team\'s workload through natural language commands. It\'s like having a personal operations manager.',
    rating: 5,
    avatar: 'MR'
  },
  {
    name: 'Emily Watson',
    role: 'Head of Sales',
    company: 'ScaleUp Solutions',
    content: 'Finally, all our systems talk to each other. The unified dashboard gives us visibility we never had before, and our win rates have improved by 25%.',
    rating: 5,
    avatar: 'EW'
  },
  {
    name: 'David Kim',
    role: 'Operations Director',
    company: 'Enterprise Corp',
    content: 'The governance features are exactly what we needed for compliance. Auto-snapshots and audit trails give us complete transparency and peace of mind.',
    rating: 5,
    avatar: 'DK'
  },
  {
    name: 'Lisa Thompson',
    role: 'Revenue Manager',
    company: 'StartupXYZ',
    content: 'The org chart visualization is game-changing. We can see dependencies, capacity, and bottlenecks in real-time. It\'s revolutionized our planning process.',
    rating: 5,
    avatar: 'LT'
  },
  {
    name: 'James Wilson',
    role: 'VP of Sales',
    company: 'GlobalTech',
    content: 'Implementation was seamless. Within two weeks, we had all our systems connected and our team was more productive than ever. ROI was immediate.',
    rating: 5,
    avatar: 'JW'
  }
];

export function Testimonials() {
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
            Trusted by revenue leaders worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Synapse Solutions is transforming revenue operations 
            for companies of all sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-100 h-full relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-8 h-8 text-purple-fintech" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-fintech to-purple-light rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-purple-fintech font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to transform your revenue operations?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies already using Synapse Solutions to un-silo their teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-fintech px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request a Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Watch Overview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
