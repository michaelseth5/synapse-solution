'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface Message {
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

const exampleCommands = [
  "Update marketing campaign budget to $50,000",
  "Assign John to the Dallas restaurant launch",
  "What tasks are due this week?",
  "Close Acme deal, $200k Q4 revenue",
  "Mark Sarah's project as completed"
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm your Agentic AI assistant. I can help you update budgets, assign tasks, and sync data across your team. Try typing a command or use one of the examples below!",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const parseCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.includes('budget') || lowerCommand.includes('$')) {
      return {
        type: 'budget' as const,
        data: {
          department: 'Marketing',
          amount: '$50,000',
          action: 'Updated'
        }
      };
    } else if (lowerCommand.includes('assign') || lowerCommand.includes('john')) {
      return {
        type: 'assignment' as const,
        data: {
          person: 'John Smith',
          project: 'Dallas Restaurant Launch',
          role: 'Project Manager'
        }
      };
    } else if (lowerCommand.includes('task') || lowerCommand.includes('due')) {
      return {
        type: 'query' as const,
        data: {
          timeframe: 'This week',
          count: 5,
          tasks: ['Budget Review', 'Client Meeting', 'Report Submission']
        }
      };
    } else if (lowerCommand.includes('close') || lowerCommand.includes('deal')) {
      return {
        type: 'budget' as const,
        data: {
          department: 'Sales',
          amount: '$200,000',
          action: 'Revenue Added'
        }
      };
    }
    
    return null;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
      status: 'sending'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      const preview = parseCommand(inputValue);
      
      let botResponse = "I've processed your request and updated the relevant systems.";
      
      if (preview?.type === 'budget') {
        botResponse = `✅ Budget updated! ${preview.data.department} budget changed to ${preview.data.amount}. This has been synced to Finance and Operations dashboards.`;
      } else if (preview?.type === 'assignment') {
        botResponse = `✅ Assignment complete! ${preview.data.person} has been assigned to ${preview.data.project} as ${preview.data.role}. The org chart has been updated.`;
      } else if (preview?.type === 'query') {
        botResponse = `📋 You have ${preview.data.count} tasks due ${preview.data.timeframe}: ${preview.data.tasks.join(', ')}. Would you like me to help prioritize these?`;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
        preview
      };

      setMessages(prev => [
        ...prev.slice(0, -1),
        { ...userMessage, status: 'sent' },
        botMessage
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleExampleClick = (command: string) => {
    setInputValue(command);
    inputRef.current?.focus();
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft border border-gray-200 h-[600px] flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-fintech to-purple-light rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Agentic AI Assistant</h3>
            <p className="text-sm text-gray-600">Natural language updates for your team</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' 
                    ? 'bg-purple-fintech' 
                    : 'bg-gray-100'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-gray-600" />
                  )}
                </div>
                
                <div className={`rounded-2xl px-4 py-3 ${
                  message.type === 'user'
                    ? 'bg-purple-fintech text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  
                  {/* Message Status */}
                  {message.type === 'user' && message.status && (
                    <div className="flex items-center mt-2 space-x-1">
                      {message.status === 'sending' && (
                        <>
                          <Clock className="w-3 h-3 text-purple-200" />
                          <span className="text-xs text-purple-200">Sending...</span>
                        </>
                      )}
                      {message.status === 'sent' && (
                        <>
                          <CheckCircle className="w-3 h-3 text-purple-200" />
                          <span className="text-xs text-purple-200">Sent</span>
                        </>
                      )}
                      {message.status === 'error' && (
                        <>
                          <AlertCircle className="w-3 h-3 text-red-200" />
                          <span className="text-xs text-red-200">Error</span>
                        </>
                      )}
                    </div>
                  )}
                  
                  {/* Preview Card */}
                  {message.preview && (
                    <div className="mt-3 p-3 bg-white bg-opacity-20 rounded-lg">
                      <div className="text-xs font-medium mb-1">Preview:</div>
                      <div className="text-xs">
                        {message.preview.type === 'budget' && (
                          <div>
                            {message.preview.data.action}: {message.preview.data.department} → {message.preview.data.amount}
                          </div>
                        )}
                        {message.preview.type === 'assignment' && (
                          <div>
                            {message.preview.data.person} → {message.preview.data.project}
                          </div>
                        )}
                        {message.preview.type === 'query' && (
                          <div>
                            {message.preview.data.count} tasks found for {message.preview.data.timeframe}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-gray-600" />
              </div>
              <div className="bg-gray-100 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Example Commands */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 mb-2">Try these examples:</div>
        <div className="flex flex-wrap gap-2">
          {exampleCommands.slice(0, 3).map((command, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(command)}
              className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
            >
              {command}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-6 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your update in natural language..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-fintech focus:border-transparent outline-none"
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="w-12 h-12 bg-gradient-to-r from-purple-fintech to-purple-light rounded-lg flex items-center justify-center text-white hover:shadow-soft-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
