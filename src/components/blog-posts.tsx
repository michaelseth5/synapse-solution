'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'The Future of Agentic AI in Enterprise Operations',
    excerpt: 'Exploring how autonomous AI agents are revolutionizing business processes and decision-making across industries.',
    author: 'Dr. Sarah Chen',
    authorRole: 'Chief AI Officer',
    publishDate: '2024-01-15',
    readTime: '12 min read',
    category: 'AI & Technology',
    tags: ['AI', 'Enterprise', 'Automation'],
    featured: true,
    image: '/api/placeholder/400/200'
  },
  {
    id: '2',
    title: 'Breaking Down Data Silos: A Practical Guide',
    excerpt: 'Learn how to identify and eliminate data silos in your organization with proven strategies and real-world examples.',
    author: 'Michael Rodriguez',
    authorRole: 'Data Strategy Lead',
    publishDate: '2024-01-12',
    readTime: '8 min read',
    category: 'Data Management',
    tags: ['Data', 'Integration', 'Strategy'],
    featured: false,
    image: '/api/placeholder/400/200'
  },
  {
    id: '3',
    title: 'ROI of AI Implementation: Measuring Success',
    excerpt: 'How to calculate and measure the return on investment for AI initiatives in your organization.',
    author: 'Lisa Thompson',
    authorRole: 'Business Analyst',
    publishDate: '2024-01-10',
    readTime: '10 min read',
    category: 'Business Strategy',
    tags: ['ROI', 'Metrics', 'Business Value'],
    featured: false,
    image: '/api/placeholder/400/200'
  },
  {
    id: '4',
    title: 'Security Best Practices for AI Systems',
    excerpt: 'Essential security considerations when implementing AI solutions in enterprise environments.',
    author: 'David Chen',
    authorRole: 'Security Architect',
    publishDate: '2024-01-08',
    readTime: '15 min read',
    category: 'Security',
    tags: ['Security', 'AI', 'Compliance'],
    featured: false,
    image: '/api/placeholder/400/200'
  },
  {
    id: '5',
    title: 'Change Management for AI Adoption',
    excerpt: 'Strategies for successfully managing organizational change when introducing AI technologies.',
    author: 'Emily Watson',
    authorRole: 'Change Management Specialist',
    publishDate: '2024-01-05',
    readTime: '9 min read',
    category: 'Change Management',
    tags: ['Change Management', 'Adoption', 'Culture'],
    featured: false,
    image: '/api/placeholder/400/200'
  },
  {
    id: '6',
    title: 'The Evolution of Revenue Operations',
    excerpt: 'How modern RevOps teams are leveraging AI to drive growth and improve efficiency.',
    author: 'James Wilson',
    authorRole: 'RevOps Director',
    publishDate: '2024-01-03',
    readTime: '11 min read',
    category: 'Revenue Operations',
    tags: ['RevOps', 'Sales', 'Growth'],
    featured: false,
    image: '/api/placeholder/400/200'
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'AI & Technology':
      return 'from-purple-500 to-purple-600';
    case 'Data Management':
      return 'from-blue-500 to-blue-600';
    case 'Business Strategy':
      return 'from-green-500 to-green-600';
    case 'Security':
      return 'from-red-500 to-red-600';
    case 'Change Management':
      return 'from-orange-500 to-orange-600';
    case 'Revenue Operations':
      return 'from-indigo-500 to-indigo-600';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

export function BlogPosts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from our team of experts.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl p-8 text-white mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="w-4 h-4" />
                <span className="text-sm font-medium opacity-90">Featured Article</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
              <p className="text-lg opacity-90 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center space-x-6 text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              className="bg-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden hover:shadow-soft-lg transition-all duration-300 group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Article Image</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-medium rounded-full`}>
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-fintech transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author & Date */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-fintech to-purple-light rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{post.author}</div>
                      <div className="text-xs text-gray-500">{post.authorRole}</div>
                    </div>
                  </div>
                  <button className="flex items-center space-x-1 text-purple-fintech hover:text-purple-700 text-sm font-medium group">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="gradient-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-soft-lg transition-all duration-300">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
