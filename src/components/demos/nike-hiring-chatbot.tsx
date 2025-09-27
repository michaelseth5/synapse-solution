'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  TrendingUp,
  Users,
  Calendar
} from 'lucide-react';

const sampleCommands = [
  "Update Sarah's task progress to 90%",
  "What is Michael's current workload?",
  "Add new task: Review candidate resumes",
  "Show all pending tasks in Marketing",
  "Update Jennifer's status to completed",
  "What's the budget status for this role?"
];

const mockResponses = {
  "Update Sarah's task progress to 90%": {
    action: "Updated Sarah Chen's task progress",
    details: "Progress updated from 75% to 90% for 'Creating job posting for Senior Marketing Manager'",
    impact: "HR workflow is now 90% complete",
    nextSteps: "Ready for Finance review and approval"
  },
  "What is Michael's current workload?": {
    action: "Retrieved Michael Rodriguez's workload",
    details: "Current workload: 70% (Moderate)",
    impact: "Michael has capacity for additional tasks",
    nextSteps: "Can take on budget review for Q4 hiring"
  },
  "Add new task: Review candidate resumes": {
    action: "Added new task to workflow",
    details: "Task: 'Review candidate resumes' assigned to Sarah Chen",
    impact: "New task added to HR pipeline",
    nextSteps: "Task will appear in Sarah's dashboard"
  },
  "Show all pending tasks in Marketing": {
    action: "Retrieved Marketing department tasks",
    details: "1 pending task: 'Preparing interview questions for marketing role' (David Thompson)",
    impact: "Marketing is ready to start interview process",
    nextSteps: "Waiting for Operations team structure review"
  },
  "Update Jennifer's status to completed": {
    action: "Updated Jennifer Kim's status",
    details: "Status changed from 'busy' to 'completed' for team structure assessment",
    impact: "Operations review is complete",
    nextSteps: "Marketing can now proceed with interview preparation"
  },
  "What's the budget status for this role?": {
    action: "Retrieved budget information",
    details: "Budget approved: $95K-$120K salary range, Q4 allocation confirmed",
    impact: "Finance approval is complete",
    nextSteps: "Ready to proceed with candidate interviews"
  }
};

export function NikeHiringChatbot() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI Assistant for the Nike hiring process. I can help you update tasks, check statuses, and coordinate between departments. Try one of the sample commands below!",
      sender: 'assistant',
      timestamp: new Date(),
      type: 'welcome'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text,
      sender: 'user' as const,
      timestamp: new Date(),
      type: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response = mockResponses[text as keyof typeof mockResponses] || {
        action: "Command processed",
        details: "I understand you want to: " + text,
        impact: "This will help coordinate the hiring process",
        nextSteps: "The system will update accordingly"
      };

      const aiMessage = {
        id: Date.now() + 1,
        text: response.action,
        sender: 'assistant' as const,
        timestamp: new Date(),
        type: 'response',
        data: response
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleCommandClick = (command: string) => {
    setInputValue(command);
    handleSendMessage(command);
  };

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
            AI Assistant for Natural Language Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use plain language to update tasks, check statuses, and coordinate 
            between departments in real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-purple-fintech to-purple-light px-6 py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI Hiring Assistant</h3>
                    <p className="text-sm text-white/80">Natural language workflow management</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-purple-fintech text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      {message.data && (
                        <div className="mt-3 space-y-2">
                          <div className="text-xs">
                            <strong>Details:</strong> {message.data.details}
                          </div>
                          <div className="text-xs">
                            <strong>Impact:</strong> {message.data.impact}
                          </div>
                          <div className="text-xs">
                            <strong>Next Steps:</strong> {message.data.nextSteps}
                          </div>
                        </div>
                      )}
                      <p className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 max-w-xs lg:max-w-md px-4 py-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a command or question..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-fintech focus:border-transparent"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    className="gradient-purple text-white px-4 py-2 rounded-lg hover:shadow-soft-lg transition-all duration-200 flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sample Commands */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Quick Commands */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-purple-fintech" />
                  Try These Commands
                </h3>
                <div className="space-y-2">
                  {sampleCommands.map((command, index) => (
                    <button
                      key={index}
                      onClick={() => handleCommandClick(command)}
                      className="w-full text-left p-3 bg-gray-50 hover:bg-purple-50 rounded-lg text-sm text-gray-700 hover:text-purple-fintech transition-colors"
                    >
                      "{command}"
                    </button>
                  ))}
                </div>
              </div>

              {/* Workflow Status */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-purple-fintech" />
                  Workflow Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">HR Process</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-600">Active</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Finance Review</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-600">Complete</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Operations</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-blue-600">In Progress</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Marketing</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-600">Pending</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Updates */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-purple-fintech" />
                  Recent Updates
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-900">Finance approved budget</p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-900">Operations reviewing structure</p>
                      <p className="text-xs text-gray-500">30 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-4 h-4 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-900">Marketing waiting to start</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
