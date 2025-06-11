import React from 'react';
import { Search, Filter, MessageSquare } from 'lucide-react';
import { suggestedQueries } from '../data/mockData';
interface WelcomeScreenProps {
  onSuggestedQuery: (query: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSuggestedQuery }) => {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          
          

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Find Your Perfect College
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Ask me anything about colleges, courses, fees, placements, and more!
            I'll help you discover the best educational opportunities. ✨
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-purple-500/20">
              <Search className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Smart Search</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-purple-500/20">
              <Filter className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Advanced Filters</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-purple-500/20">
              <MessageSquare className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">Natural Language</span>
            </div>
          </div>
        </div>

        {/* Suggested Queries */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Try asking me:</h3>
          <div className="grid gap-3 max-w-md mx-auto">
            {suggestedQueries.map((query, index) => (
              <button
                key={index}
                onClick={() => onSuggestedQuery(query)}
                className="text-left p-4 bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 hover:border-purple-500/40 rounded-xl transition-all duration-200 text-gray-200 hover:text-white group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm">{query}</span>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 rounded-lg flex items-center justify-center transition-colors">
                    <Search className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
