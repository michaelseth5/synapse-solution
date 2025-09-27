'use client';

import { useState, useEffect } from 'react';

interface DemoData {
  revenue: {
    current: number;
    previous: number;
    growth: number;
  };
  activeDeals: number;
  closedThisMonth: number;
  teamActivity: Array<{
    name: string;
    initials: string;
    action: string;
    time: string;
  }>;
  tasks: Array<{
    id: string;
    title: string;
    assignee: string;
    status: 'completed' | 'in-progress' | 'blocked' | 'pending';
    progress: number;
  }>;
}

const generateRandomData = (): DemoData => {
  const baseRevenue = 2400000;
  const growth = Math.random() * 0.3 - 0.1; // -10% to +20%
  const currentRevenue = Math.round(baseRevenue * (1 + growth));
  const previousRevenue = Math.round(currentRevenue / (1 + growth));
  
  return {
    revenue: {
      current: currentRevenue,
      previous: previousRevenue,
      growth: Math.round(growth * 100),
    },
    activeDeals: Math.floor(Math.random() * 20) + 40, // 40-60
    closedThisMonth: Math.floor(Math.random() * 8) + 10, // 10-18
    teamActivity: [
      {
        name: 'John Smith',
        initials: 'JS',
        action: 'Updated Acme proposal',
        time: '2 min ago'
      },
      {
        name: 'Maria Johnson',
        initials: 'MJ',
        action: 'Completed Q4 review',
        time: '15 min ago'
      },
      {
        name: 'David Chen',
        initials: 'DC',
        action: 'Added new team member',
        time: '1 hour ago'
      },
      {
        name: 'Sarah Wilson',
        initials: 'SW',
        action: 'Scheduled client call',
        time: '2 hours ago'
      }
    ].sort(() => Math.random() - 0.5), // Randomize order
    tasks: [
      {
        id: '1',
        title: 'Acme Corp Integration',
        assignee: 'John Smith',
        status: 'completed',
        progress: 100
      },
      {
        id: '2',
        title: 'Q4 Planning Review',
        assignee: 'Maria Johnson',
        status: 'in-progress',
        progress: 75
      },
      {
        id: '3',
        title: 'Team Expansion Plan',
        assignee: 'David Chen',
        status: 'pending',
        progress: 25
      },
      {
        id: '4',
        title: 'Client Presentation',
        assignee: 'Sarah Wilson',
        status: 'blocked',
        progress: 60
      }
    ]
  };
};

export function useDemoData() {
  const [data, setData] = useState<DemoData>(generateRandomData());
  const [isUpdating, setIsUpdating] = useState(false);

  const updateData = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setData(generateRandomData());
      setIsUpdating(false);
    }, 500);
  };

  useEffect(() => {
    // Update data every 30 seconds
    const interval = setInterval(updateData, 30000);
    return () => clearInterval(interval);
  }, []);

  return { data, updateData, isUpdating };
}

export function DemoDataIndicator() {
  const { isUpdating } = useDemoData();

  if (!isUpdating) return null;

  return (
    <div className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-soft border border-gray-200 p-3 flex items-center space-x-2">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      <span className="text-sm text-gray-600">Updating data...</span>
    </div>
  );
}
