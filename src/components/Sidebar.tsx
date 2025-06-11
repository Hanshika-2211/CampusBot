import React from 'react';
import { MessageSquare, Plus, Filter, MapPin, CreditCard, Building } from 'lucide-react';
import { ChatSession } from '../types';
import { quickFilters } from '../data/mockData';

interface SidebarProps {
  isOpen: boolean;
  chatSessions: ChatSession[];
  selectedFilters: Record<string, string>;
  onFilterChange: (category: string, value: string) => void;
  onNewChat: () => void;
  onSelectChat: (chatId: string) => void;
  currentChatId?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  chatSessions,
  selectedFilters,
  onFilterChange,
  onNewChat,
  onSelectChat,
  currentChatId
}) => {
  const getFilterIcon = (filterId: string) => {
    switch (filterId) {
      case 'city': return <MapPin className="w-4 h-4" />;
      case 'fees': return <CreditCard className="w-4 h-4" />;
      case 'type': return <Building className="w-4 h-4" />;
      default: return <Filter className="w-4 h-4" />;
    }
  };

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-gray-900/95 backdrop-blur-xl border-r border-purple-500/20 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:relative lg:translate-x-0`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-purple-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              CampusBot
            </h1>
          </div>

          <button
            onClick={onNewChat}
            className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg transition-all duration-200 text-white font-medium"
          >
            <Plus className="w-5 h-5" />
            New Chat
          </button>
        </div>

        {/* Quick Filters */}
        <div className="p-4 border-b border-purple-500/20">
          <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Quick Filters
          </h3>
          <div className="space-y-3">
            {quickFilters.map((filter) => (
              <div key={filter.id}>
                <label className="text-xs text-gray-400 mb-1 block flex items-center gap-2">
                  {getFilterIcon(filter.id)}
                  {filter.label}
                </label>
                <select
                  value={selectedFilters[filter.id] || ''}
                  onChange={(e) => onFilterChange(filter.id, e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="">All {filter.label}</option>
                  {filter.options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Recent Chats
          </h3>
          <div className="space-y-2">
            {chatSessions.map((session) => (
              <button
                key={session.id}
                onClick={() => onSelectChat(session.id)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 hover:bg-gray-800/50 ${currentChatId === session.id ? 'bg-purple-600/20 border border-purple-500/30' : ''
                  }`}
              >
                <div className="text-sm text-white font-medium truncate">
                  {session.title}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {session.lastActivity.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
