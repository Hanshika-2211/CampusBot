import React, { useState } from 'react';

import { Menu, X } from 'lucide-react';

import Sidebar from './components/Sidebar';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import TypingIndicator from './components/TypingIndicator';
import WelcomeScreen from './components/WelcomeScreen';

import { useChat } from './hooks/useChat';
import { mockChatSessions } from './data/mockData';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  const [currentChatId, setCurrentChatId] = useState<string>();
  const { messages, isLoading, sendMessage, clearMessages } = useChat();

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleNewChat = () => {
    clearMessages();
    setCurrentChatId(undefined);
  };

  const handleSelectChat = (chatId: string) => {
    setCurrentChatId(chatId);
    clearMessages();
  };

  const handleSuggestedQuery = (query: string) => {
    sendMessage(query.replace(/[🏗️💰💻📈🎓]/g, '').trim());
  };

  return (
    <div className="min-h-screen text-white flex bg-gradient-to-b from-black to-[#200E3D]">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        chatSessions={mockChatSessions}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
        currentChatId={currentChatId}
      />

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Header */}
        <header className="flex items-center gap-4 p-4 border-b border-purple-500/20 bg-gray-900/50 backdrop-blur-sm lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            CampusBot
          </h1>
        </header>

        {/* Chat Content */}
        <div className="flex-1 flex flex-col">
          {messages.length === 0 ? (
            <WelcomeScreen onSuggestedQuery={handleSuggestedQuery} />
          ) : (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="max-w-4xl mx-auto">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isLoading && <TypingIndicator />}
              </div>
            </div>
          )}

          {/* Chat Input */}
          <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default App;
