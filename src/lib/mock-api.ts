// Mock API for demo data
export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
  preview?: {
    type: 'budget' | 'task' | 'assignment' | 'query';
    data: any;
  };
}

export interface UploadedFile {
  id: string;
  name: string;
  type: 'image' | 'pdf' | 'document';
  size: number;
  visibility: 'all' | 'leadership' | 'private';
  status: 'uploading' | 'processing' | 'completed' | 'error';
  preview?: string;
}

export interface SyncUpdate {
  id: string;
  type: 'budget' | 'task' | 'assignment' | 'revenue';
  department: string;
  action: string;
  timestamp: Date;
  status: 'syncing' | 'completed' | 'error';
  details: string;
}

export interface DemoData {
  id: string;
  name: string;
  status: 'completed' | 'in-progress' | 'pending' | 'blocked';
  progress: number;
  assignee: string;
  department: string;
  lastUpdate: string;
  dependencies: string[];
  workload: number;
}

export interface WorkflowStep {
  id: number;
  title: string;
  department: string;
  person: string;
  action: string;
  status: 'completed' | 'in-progress' | 'pending' | 'blocked';
  duration: string;
  details: string;
  icon: string;
  color: string;
}

// Nike Hiring Demo Data
export const nikeHiringData: DemoData[] = [
  {
    id: '1',
    name: 'Create Job Posting',
    status: 'completed',
    progress: 100,
    assignee: 'Sarah Chen',
    department: 'HR',
    lastUpdate: '2 hours ago',
    dependencies: [],
    workload: 85
  },
  {
    id: '2',
    name: 'Budget Approval',
    status: 'completed',
    progress: 100,
    assignee: 'Michael Rodriguez',
    department: 'Finance',
    lastUpdate: '1 hour ago',
    dependencies: ['1'],
    workload: 70
  },
  {
    id: '3',
    name: 'Team Structure Review',
    status: 'in-progress',
    progress: 60,
    assignee: 'Jennifer Kim',
    department: 'Operations',
    lastUpdate: '30 minutes ago',
    dependencies: ['1', '2'],
    workload: 95
  },
  {
    id: '4',
    name: 'Interview Preparation',
    status: 'pending',
    progress: 0,
    assignee: 'David Thompson',
    department: 'Marketing',
    lastUpdate: 'Not started',
    dependencies: ['3'],
    workload: 45
  },
  {
    id: '5',
    name: 'Final Decision',
    status: 'pending',
    progress: 0,
    assignee: 'Lisa Park',
    department: 'Leadership',
    lastUpdate: 'Waiting for input',
    dependencies: ['4'],
    workload: 60
  }
];

// Fogo Restaurant Demo Data
export const fogoRestaurantData: DemoData[] = [
  {
    id: '1',
    name: 'Location Negotiation',
    status: 'completed',
    progress: 100,
    assignee: 'Real Estate Manager',
    department: 'Real Estate',
    lastUpdate: '1 week ago',
    dependencies: [],
    workload: 80
  },
  {
    id: '2',
    name: 'Budget Allocation',
    status: 'completed',
    progress: 100,
    assignee: 'Finance Director',
    department: 'Finance',
    lastUpdate: '5 days ago',
    dependencies: ['1'],
    workload: 75
  },
  {
    id: '3',
    name: 'Staff Training Program',
    status: 'in-progress',
    progress: 70,
    assignee: 'Operations VP',
    department: 'Operations',
    lastUpdate: '2 days ago',
    dependencies: ['1', '2'],
    workload: 90
  },
  {
    id: '4',
    name: 'Hiring & Relocations',
    status: 'in-progress',
    progress: 45,
    assignee: 'HR Manager',
    department: 'HR',
    lastUpdate: '1 day ago',
    dependencies: ['2', '3'],
    workload: 85
  },
  {
    id: '5',
    name: 'Permit & Compliance',
    status: 'pending',
    progress: 20,
    assignee: 'Legal Counsel',
    department: 'Legal',
    lastUpdate: '3 days ago',
    dependencies: ['1'],
    workload: 60
  },
  {
    id: '6',
    name: 'Vendor Contracts',
    status: 'pending',
    progress: 0,
    assignee: 'Procurement Manager',
    department: 'Finance',
    lastUpdate: 'Not started',
    dependencies: ['2', '5'],
    workload: 50
  }
];

// Mock API functions
export const mockAPI = {
  // Get all tasks for a demo
  getTasks: (demoType: 'nike' | 'fogo'): Promise<DemoData[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(demoType === 'nike' ? nikeHiringData : fogoRestaurantData);
      }, 500);
    });
  },

  // Update task status
  updateTask: (taskId: string, updates: Partial<DemoData>): Promise<DemoData> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const allTasks = [...nikeHiringData, ...fogoRestaurantData];
        const task = allTasks.find(t => t.id === taskId);
        if (task) {
          Object.assign(task, updates);
          resolve(task);
        }
        resolve(task!);
      }, 300);
    });
  },

  // Get workflow steps
  getWorkflowSteps: (demoType: 'nike' | 'fogo'): Promise<WorkflowStep[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const steps = demoType === 'nike' ? nikeHiringSteps : fogoRestaurantSteps;
        resolve(steps);
      }, 300);
    });
  },

  // Simulate real-time updates
  subscribeToUpdates: (callback: (data: DemoData[]) => void) => {
    const interval = setInterval(() => {
      // Simulate random updates
      const randomTask = Math.random() > 0.7;
      if (randomTask) {
        const allTasks = [...nikeHiringData, ...fogoRestaurantData];
        const randomIndex = Math.floor(Math.random() * allTasks.length);
        const task = allTasks[randomIndex];
        
        if (task.status === 'in-progress') {
          task.progress = Math.min(100, task.progress + Math.floor(Math.random() * 10));
          if (task.progress === 100) {
            task.status = 'completed';
          }
        }
        
        callback(allTasks);
      }
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  },

  // Chatbot API functions
  sendMessage: (message: string): Promise<ChatMessage> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const botMessage: ChatMessage = {
          id: Date.now().toString(),
          type: 'bot',
          content: `I've processed your request: "${message}". This has been synced to the relevant dashboards.`,
          timestamp: new Date(),
          preview: {
            type: 'budget',
            data: { department: 'Marketing', amount: '$50,000', action: 'Updated' }
          }
        };
        resolve(botMessage);
      }, 1500);
    });
  },

  uploadFile: (file: File): Promise<UploadedFile> => {
    return new Promise((resolve) => {
      const fileType = file.type.startsWith('image/') ? 'image' : 
                     file.type === 'application/pdf' ? 'pdf' : 'document';
      
      const uploadedFile: UploadedFile = {
        id: Date.now().toString(),
        name: file.name,
        type: fileType,
        size: file.size,
        visibility: 'all',
        status: 'uploading'
      };

      // Simulate upload process
      setTimeout(() => {
        uploadedFile.status = 'processing';
        resolve(uploadedFile);
      }, 1000);

      setTimeout(() => {
        uploadedFile.status = 'completed';
      }, 3000);
    });
  },

  getSyncUpdates: (): Promise<SyncUpdate[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updates: SyncUpdate[] = [
          {
            id: '1',
            type: 'budget',
            department: 'Marketing',
            action: 'Budget Updated',
            status: 'completed',
            details: 'Campaign budget set to $50,000',
            timestamp: new Date(Date.now() - 30000)
          },
          {
            id: '2',
            type: 'assignment',
            department: 'Operations',
            action: 'Task Assigned',
            status: 'completed',
            details: 'John Smith assigned to Dallas Restaurant Launch',
            timestamp: new Date(Date.now() - 60000)
          },
          {
            id: '3',
            type: 'revenue',
            department: 'Sales',
            action: 'Deal Closed',
            status: 'syncing',
            details: 'Acme Corp deal worth $200,000',
            timestamp: new Date()
          }
        ];
        resolve(updates);
      }, 500);
    });
  },

  subscribeToSyncUpdates: (callback: (updates: SyncUpdate[]) => void) => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const newUpdate: SyncUpdate = {
          id: Date.now().toString(),
          type: ['budget', 'task', 'assignment', 'revenue'][Math.floor(Math.random() * 4)] as any,
          department: ['Marketing', 'Sales', 'Operations', 'Finance'][Math.floor(Math.random() * 4)],
          action: 'Data Sync',
          status: 'syncing',
          details: 'Real-time update from chatbot',
          timestamp: new Date()
        };

        callback([newUpdate]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }
};

// Nike Hiring Workflow Steps
const nikeHiringSteps: WorkflowStep[] = [
  {
    id: 1,
    title: 'HR Opens New Role',
    department: 'Human Resources',
    person: 'Sarah Chen - HR Manager',
    action: 'Creates "Senior Marketing Manager" position',
    status: 'completed',
    duration: '2 hours',
    details: 'Posted job description, set requirements, initiated approval workflow',
    icon: 'UserPlus',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Finance Aligns Budget',
    department: 'Finance',
    person: 'Michael Rodriguez - Finance Director',
    action: 'Reviews salary range and budget allocation',
    status: 'completed',
    duration: '4 hours',
    details: 'Approved $95K-$120K salary range, allocated Q4 budget, updated cost center',
    icon: 'DollarSign',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'Operations Team Fit',
    department: 'Operations',
    person: 'Jennifer Kim - Operations VP',
    action: 'Assesses team structure and reporting needs',
    status: 'in-progress',
    duration: '6 hours',
    details: 'Reviewing current team capacity, defining reporting structure, checking for conflicts',
    icon: 'Settings',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 4,
    title: 'Marketing Joins Panel',
    department: 'Marketing',
    person: 'David Thompson - Marketing Director',
    action: 'Prepares interview questions and evaluation criteria',
    status: 'pending',
    duration: '3 hours',
    details: 'Will create role-specific questions, define evaluation criteria, schedule interviews',
    icon: 'Megaphone',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 5,
    title: 'HR Runs Process',
    department: 'Human Resources',
    person: 'Sarah Chen - HR Manager',
    action: 'Coordinates interviews and candidate evaluation',
    status: 'pending',
    duration: '2 weeks',
    details: 'Will schedule interviews, coordinate with panel, manage candidate pipeline',
    icon: 'Users',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 6,
    title: 'Final Decision',
    department: 'Leadership',
    person: 'Lisa Park - VP of Sales',
    action: 'Makes final hiring decision with team input',
    status: 'pending',
    duration: '1 day',
    details: 'Will review all feedback, make final decision, approve offer',
    icon: 'CheckCircle',
    color: 'from-red-500 to-red-600'
  }
];

// Fogo Restaurant Workflow Steps
const fogoRestaurantSteps: WorkflowStep[] = [
  {
    id: 1,
    title: 'Location Negotiation',
    department: 'Real Estate',
    person: 'Real Estate Manager + VP Real Estate',
    action: 'Negotiate location and lease terms',
    status: 'completed',
    duration: '2 weeks',
    details: 'Secured prime location in North Carolina, negotiated favorable lease terms',
    icon: 'MapPin',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Budget & Vendor Contracts',
    department: 'Finance & Accounting',
    person: 'Finance Director + Accounting Manager',
    action: 'Handle budgets and vendor contracts',
    status: 'completed',
    duration: '1 week',
    details: 'Allocated $2.5M budget, initiated vendor contract negotiations',
    icon: 'DollarSign',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'Staff Training & Coordination',
    department: 'Operations',
    person: 'Operations VP',
    action: 'Coordinate training and staffing',
    status: 'in-progress',
    duration: '6 weeks',
    details: 'Setting up training programs, coordinating with existing staff for knowledge transfer',
    icon: 'Users',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 4,
    title: 'Hiring & Relocations',
    department: 'Human Resources',
    person: 'HR Manager',
    action: 'Manage hiring and relocations',
    status: 'in-progress',
    duration: '8 weeks',
    details: 'Recruiting local talent, managing relocations for key staff, onboarding process',
    icon: 'UserPlus',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 5,
    title: 'Permits & Compliance',
    department: 'Legal',
    person: 'Legal Counsel',
    action: 'Review permits and compliance',
    status: 'pending',
    duration: '4 weeks',
    details: 'Obtaining necessary permits, ensuring compliance with local regulations',
    icon: 'Shield',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 6,
    title: 'Final Launch Coordination',
    department: 'All Departments',
    person: 'General Manager',
    action: 'Final launch coordination',
    status: 'pending',
    duration: '2 weeks',
    details: 'Final coordination across all departments for successful restaurant opening',
    icon: 'CheckCircle',
    color: 'from-green-500 to-green-600'
  }
];
