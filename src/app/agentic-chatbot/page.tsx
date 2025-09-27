import { AgenticChatbotHero } from '@/components/agentic-chatbot-hero';
import { ChatInterface } from '@/components/chat-interface';
import { SnapshotUpload } from '@/components/snapshot-upload';
import { DashboardSync } from '@/components/dashboard-sync';
import { ChatbotFeatures } from '@/components/chatbot-features';

export default function AgenticChatbot() {
  return (
    <div className="min-h-screen">
      <AgenticChatbotHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chat Interface - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <ChatInterface />
          </div>
          
          {/* Right Sidebar - Takes up 1 column */}
          <div className="space-y-6">
            <SnapshotUpload />
            <DashboardSync />
          </div>
        </div>
      </div>
      <ChatbotFeatures />
    </div>
  );
}
