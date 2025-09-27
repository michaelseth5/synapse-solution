'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  Zap, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  Activity,
  TrendingUp,
  Database
} from 'lucide-react';

interface SyncUpdate {
  id: string;
  type: 'budget' | 'task' | 'assignment' | 'revenue';
  department: string;
  action: string;
  timestamp: Date;
  status: 'syncing' | 'completed' | 'error';
  details: string;
}

const mockUpdates: Omit<SyncUpdate, 'id' | 'timestamp'>[] = [
  {
    type: 'budget',
    department: 'Marketing',
    action: 'Budget Updated',
    status: 'completed',
    details: 'Campaign budget set to $50,000'
  },
  {
    type: 'assignment',
    department: 'Operations',
    action: 'Task Assigned',
    status: 'completed',
    details: 'John Smith assigned to Dallas Restaurant Launch'
  },
  {
    type: 'revenue',
    department: 'Sales',
    action: 'Deal Closed',
    status: 'syncing',
    details: 'Acme Corp deal worth $200,000'
  },
  {
    type: 'task',
    department: 'Finance',
    action: 'Report Generated',
    status: 'completed',
    details: 'Q4 financial report updated'
  }
];

export function DashboardSync() {
  const [updates, setUpdates] = useState<SyncUpdate[]>([]);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    // Initialize with some mock updates
    const initialUpdates = mockUpdates.map((update, index) => ({
      ...update,
      id: `update-${index}`,
      timestamp: new Date(Date.now() - (index * 30000)) // 30 seconds apart
    }));
    setUpdates(initialUpdates);

    // Simulate real-time updates
    const interval = setInterval(() => {
      if (isLive && Math.random() > 0.7) {
        const newUpdate: SyncUpdate = {
          id: `update-${Date.now()}`,
          type: ['budget', 'task', 'assignment', 'revenue'][Math.floor(Math.random() * 4)] as any,
          department: ['Marketing', 'Sales', 'Operations', 'Finance'][Math.floor(Math.random() * 4)],
          action: 'Data Sync',
          status: 'syncing',
          details: 'Real-time update from chatbot',
          timestamp: new Date()
        };

        setUpdates(prev => [newUpdate, ...prev.slice(0, 4)]);

        // Mark as completed after 2 seconds
        setTimeout(() => {
          setUpdates(prev => 
            prev.map(u => 
              u.id === newUpdate.id 
                ? { ...u, status: 'completed' as const }
                : u
            )
          );
        }, 2000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isLive]);

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'budget':
        return <DollarSign className="w-4 h-4" />;
      case 'task':
        return <CheckCircle className="w-4 h-4" />;
      case 'assignment':
        return <Users className="w-4 h-4" />;
      case 'revenue':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  const getUpdateColor = (type: string) => {
    switch (type) {
      case 'budget':
        return 'text-green-600 bg-green-100';
      case 'task':
        return 'text-blue-600 bg-blue-100';
      case 'assignment':
        return 'text-purple-600 bg-purple-100';
      case 'revenue':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'syncing':
        return <div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />;
      case 'completed':
        return <CheckCircle className="w-3 h-3 text-green-500" />;
      case 'error':
        return <div className="w-3 h-3 bg-red-500 rounded-full" />;
      default:
        return <Clock className="w-3 h-3 text-gray-400" />;
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
            <Database className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Real-Time Sync</h3>
            <p className="text-sm text-gray-600">Dashboard updates</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
          <span className="text-xs text-gray-600">{isLive ? 'Live' : 'Paused'}</span>
        </div>
      </div>

      {/* Sync Status Overview */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <BarChart3 className="w-4 h-4 text-purple-fintech" />
            <span className="text-sm font-medium text-gray-900">Data Hub</span>
          </div>
          <div className="text-xs text-gray-600">Unified dashboard</div>
          <div className="flex items-center space-x-1 mt-1">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span className="text-xs text-green-600">Synced</span>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-4 h-4 text-purple-fintech" />
            <span className="text-sm font-medium text-gray-900">Org Chart</span>
          </div>
          <div className="text-xs text-gray-600">Team structure</div>
          <div className="flex items-center space-x-1 mt-1">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span className="text-xs text-green-600">Updated</span>
          </div>
        </div>
      </div>

      {/* Recent Updates */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-gray-900">Recent Updates</h4>
          <button
            onClick={() => setIsLive(!isLive)}
            className="text-xs text-purple-fintech hover:text-purple-700 transition-colors"
          >
            {isLive ? 'Pause' : 'Resume'}
          </button>
        </div>
        
        <div className="space-y-3 max-h-64 overflow-y-auto">
          <AnimatePresence>
            {updates.map((update) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${getUpdateColor(update.type)}`}>
                      {getUpdateIcon(update.type)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {update.department}
                      </div>
                      <div className="text-xs text-gray-600">
                        {update.action}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(update.status)}
                    <span className="text-xs text-gray-500">
                      {formatTime(update.timestamp)}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-600 mb-2">
                  {update.details}
                </div>
                
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-gray-500">Synced to:</span>
                  <div className="flex items-center space-x-1">
                    <BarChart3 className="w-3 h-3 text-purple-fintech" />
                    <span className="text-purple-fintech">Dashboard</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-gray-400" />
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3 text-purple-fintech" />
                    <span className="text-purple-fintech">Org Chart</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Sync Performance */}
      <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
        <div className="flex items-center space-x-2 mb-2">
          <Zap className="w-4 h-4 text-purple-fintech" />
          <span className="text-sm font-medium text-gray-900">Sync Performance</span>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-purple-fintech">2.3s</div>
            <div className="text-xs text-gray-600">Avg Response</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-600">99.8%</div>
            <div className="text-xs text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-600">24/7</div>
            <div className="text-xs text-gray-600">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
}
