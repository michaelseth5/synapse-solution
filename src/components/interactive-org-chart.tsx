'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
  MiniMap,
  NodeTypes,
  EdgeTypes,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { 
  Users, 
  Calendar, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Eye,
  Download,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';

// Custom Node Component
const PersonNode = ({ data }: { data: any }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'blocked':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-3 h-3" />;
      case 'in-progress':
        return <Clock className="w-3 h-3" />;
      case 'blocked':
        return <AlertCircle className="w-3 h-3" />;
      default:
        return <Clock className="w-3 h-3" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-soft border border-gray-200 p-4 min-w-[200px] hover:shadow-soft-lg transition-all duration-300">
      {/* Person Info */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-fintech to-purple-light rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {data.initials}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900 truncate">{data.name}</h4>
          <p className="text-xs text-gray-600 truncate">{data.role}</p>
        </div>
      </div>

      {/* Current Task */}
      <div className="mb-3">
        <p className="text-xs text-gray-500 mb-1">Current Task:</p>
        <p className="text-sm text-gray-900 font-medium">{data.currentTask}</p>
      </div>

      {/* Status */}
      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(data.status)}`}>
        {getStatusIcon(data.status)}
        <span className="capitalize">{data.status.replace('-', ' ')}</span>
      </div>

      {/* Dependencies */}
      {data.dependencies && data.dependencies.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-1">Dependencies:</p>
          <div className="flex flex-wrap gap-1">
            {data.dependencies.slice(0, 2).map((dep: string, index: number) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-1 py-0.5 rounded">
                {dep}
              </span>
            ))}
            {data.dependencies.length > 2 && (
              <span className="text-xs text-gray-500">+{data.dependencies.length - 2} more</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const nodeTypes: NodeTypes = {
  person: PersonNode,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'person',
    position: { x: 400, y: 50 },
    data: {
      name: 'Sarah Chen',
      initials: 'SC',
      role: 'VP of Revenue Operations',
      currentTask: 'Q4 Planning Review',
      status: 'in-progress',
      dependencies: ['Finance Team', 'Sales Team']
    },
  },
  {
    id: '2',
    type: 'person',
    position: { x: 100, y: 200 },
    data: {
      name: 'John Smith',
      initials: 'JS',
      role: 'Sales Director',
      currentTask: 'Acme Corp Integration',
      status: 'completed',
      dependencies: ['Legal Team']
    },
  },
  {
    id: '3',
    type: 'person',
    position: { x: 400, y: 200 },
    data: {
      name: 'Maria Johnson',
      initials: 'MJ',
      role: 'Marketing Director',
      currentTask: 'Campaign Analysis',
      status: 'in-progress',
      dependencies: ['Design Team', 'Content Team']
    },
  },
  {
    id: '4',
    type: 'person',
    position: { x: 700, y: 200 },
    data: {
      name: 'David Chen',
      initials: 'DC',
      role: 'Operations Manager',
      currentTask: 'Team Expansion Plan',
      status: 'blocked',
      dependencies: ['HR Team', 'Finance Team']
    },
  },
  {
    id: '5',
    type: 'person',
    position: { x: 50, y: 350 },
    data: {
      name: 'Lisa Thompson',
      initials: 'LT',
      role: 'Senior Sales Rep',
      currentTask: 'Client Presentation',
      status: 'in-progress',
      dependencies: ['Product Team']
    },
  },
  {
    id: '6',
    type: 'person',
    position: { x: 250, y: 350 },
    data: {
      name: 'Michael Rodriguez',
      initials: 'MR',
      role: 'Senior Sales Rep',
      currentTask: 'Pipeline Review',
      status: 'completed',
      dependencies: []
    },
  },
  {
    id: '7',
    type: 'person',
    position: { x: 550, y: 350 },
    data: {
      name: 'Emily Watson',
      initials: 'EW',
      role: 'Marketing Specialist',
      currentTask: 'Content Calendar',
      status: 'in-progress',
      dependencies: ['Design Team']
    },
  },
  {
    id: '8',
    type: 'person',
    position: { x: 750, y: 350 },
    data: {
      name: 'James Wilson',
      initials: 'JW',
      role: 'Operations Specialist',
      currentTask: 'Process Documentation',
      status: 'completed',
      dependencies: []
    },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', animated: true },
  { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', animated: true },
  { id: 'e2-5', source: '2', target: '5', type: 'smoothstep', animated: true },
  { id: 'e2-6', source: '2', target: '6', type: 'smoothstep', animated: true },
  { id: 'e3-7', source: '3', target: '7', type: 'smoothstep', animated: true },
  { id: 'e4-8', source: '4', target: '8', type: 'smoothstep', animated: true },
];

export function InteractiveOrgChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [showDependencies, setShowDependencies] = useState(true);
  const [showCapacity, setShowCapacity] = useState(false);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleExport = () => {
    // In a real implementation, this would export the org chart as PDF/PNG
    console.log('Exporting org chart...');
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Interactive Organization Chart
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on any person to see their full profile, task timeline, and dependencies. 
            Toggle views to see capacity heatmaps and dependency lines.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setShowDependencies(!showDependencies)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
              showDependencies
                ? 'bg-purple-fintech text-white border-purple-fintech'
                : 'bg-white text-gray-700 border-gray-300 hover:border-purple-fintech'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Show Dependencies</span>
          </button>
          
          <button
            onClick={() => setShowCapacity(!showCapacity)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
              showCapacity
                ? 'bg-purple-fintech text-white border-purple-fintech'
                : 'bg-white text-gray-700 border-gray-300 hover:border-purple-fintech'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Capacity Heatmap</span>
          </button>
          
          <button
            onClick={handleExport}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-purple-fintech hover:text-purple-fintech transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export PDF/PNG</span>
          </button>
        </motion.div>

        {/* React Flow Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden"
          data-demo="org-chart"
        >
          <div className="h-[600px] w-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              fitView
              attributionPosition="bottom-left"
            >
              <Controls />
              <MiniMap 
                nodeColor={(node) => {
                  switch (node.data?.status) {
                    case 'completed': return '#10B981';
                    case 'in-progress': return '#3B82F6';
                    case 'blocked': return '#EF4444';
                    default: return '#6B7280';
                  }
                }}
                nodeStrokeWidth={3}
                zoomable
                pannable
              />
              <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
            </ReactFlow>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Completed</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">In Progress</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Blocked</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span className="text-sm text-gray-600">Pending</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
