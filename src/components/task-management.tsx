'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Users, 
  Plus,
  Filter,
  Search,
  MoreVertical
} from 'lucide-react';

const mockTasks = [
  {
    id: 1,
    title: 'Acme Corp Integration',
    assignee: 'John Smith',
    department: 'Sales',
    status: 'completed',
    priority: 'high',
    dueDate: '2024-01-15',
    dependencies: ['Legal Review', 'Technical Setup'],
    description: 'Complete integration of Acme Corp into our CRM system with all necessary data migration.',
    progress: 100
  },
  {
    id: 2,
    title: 'Q4 Planning Review',
    assignee: 'Sarah Chen',
    department: 'Operations',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2024-01-20',
    dependencies: ['Finance Team Input', 'Sales Forecast'],
    description: 'Review and finalize Q4 planning documents with all department heads.',
    progress: 75
  },
  {
    id: 3,
    title: 'Team Expansion Plan',
    assignee: 'David Chen',
    department: 'Operations',
    status: 'blocked',
    priority: 'medium',
    dueDate: '2024-01-25',
    dependencies: ['Budget Approval', 'HR Requirements'],
    description: 'Develop comprehensive plan for team expansion including hiring timeline and budget.',
    progress: 30
  },
  {
    id: 4,
    title: 'Client Presentation',
    assignee: 'Lisa Thompson',
    department: 'Sales',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2024-01-18',
    dependencies: ['Product Demo', 'Pricing Sheet'],
    description: 'Prepare and deliver presentation to key client for new product launch.',
    progress: 60
  },
  {
    id: 5,
    title: 'Campaign Analysis',
    assignee: 'Maria Johnson',
    department: 'Marketing',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2024-01-22',
    dependencies: ['Analytics Data', 'Performance Metrics'],
    description: 'Analyze Q4 marketing campaign performance and provide recommendations.',
    progress: 45
  },
  {
    id: 6,
    title: 'Process Documentation',
    assignee: 'James Wilson',
    department: 'Operations',
    status: 'completed',
    priority: 'low',
    dueDate: '2024-01-12',
    dependencies: [],
    description: 'Document current operational processes for new team member onboarding.',
    progress: 100
  }
];

const statusColors = {
  completed: 'bg-green-100 text-green-800 border-green-200',
  'in-progress': 'bg-blue-100 text-blue-800 border-blue-200',
  blocked: 'bg-red-100 text-red-800 border-red-200',
  pending: 'bg-gray-100 text-gray-800 border-gray-200'
};

const priorityColors = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800'
};

export function TaskManagement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = mockTasks.filter(task => {
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
    const matchesDepartment = filterDepartment === 'all' || task.department === filterDepartment;
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.assignee.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesDepartment && matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'in-progress':
        return <Clock className="w-4 h-4" />;
      case 'blocked':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Task Management & Dependencies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track all tasks across your organization with real-time status updates, 
            dependency mapping, and intelligent prioritization.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-50 rounded-xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search tasks or assignees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-fintech focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-fintech focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
                <option value="blocked">Blocked</option>
                <option value="pending">Pending</option>
              </select>

              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-fintech focus:border-transparent"
              >
                <option value="all">All Departments</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Operations">Operations</option>
                <option value="Legal">Legal</option>
              </select>

              <button className="flex items-center space-x-2 px-4 py-2 bg-purple-fintech text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add Task</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tasks Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {filteredTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-soft border border-gray-200 p-6 hover:shadow-soft-lg transition-all duration-300"
            >
              {/* Task Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{task.title}</h3>
                  <p className="text-sm text-gray-600">{task.description}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              {/* Assignee and Department */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-fintech to-purple-light rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {task.assignee.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{task.assignee}</div>
                    <div className="text-xs text-gray-500">{task.department}</div>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                  {task.priority}
                </span>
              </div>

              {/* Status and Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${statusColors[task.status as keyof typeof statusColors]}`}>
                    {getStatusIcon(task.status)}
                    <span className="capitalize">{task.status.replace('-', ' ')}</span>
                  </span>
                  <span className="text-xs text-gray-500">{task.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-fintech to-purple-light h-2 rounded-full transition-all duration-300"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Due Date */}
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Due: {new Date(task.dueDate).toLocaleDateString()}</span>
              </div>

              {/* Dependencies */}
              {task.dependencies && task.dependencies.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">Dependencies:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {task.dependencies.map((dep, depIndex) => (
                      <span key={depIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {dep}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-2">
                <button className="flex-1 text-sm font-medium text-purple-fintech hover:text-purple-700 py-2 px-3 rounded-lg border border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-colors">
                  View Details
                </button>
                <button className="text-sm font-medium text-gray-600 hover:text-gray-800 py-2 px-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                  Edit
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-purple-fintech to-purple-light rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{mockTasks.length}</div>
              <div className="text-sm opacity-90">Total Tasks</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {mockTasks.filter(t => t.status === 'completed').length}
              </div>
              <div className="text-sm opacity-90">Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {mockTasks.filter(t => t.status === 'in-progress').length}
              </div>
              <div className="text-sm opacity-90">In Progress</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {mockTasks.filter(t => t.status === 'blocked').length}
              </div>
              <div className="text-sm opacity-90">Blocked</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
