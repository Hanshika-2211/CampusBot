import React from 'react';
import { User, Bot, ChevronLeft, ChevronRight } from 'lucide-react';
import { ChatMessage as ChatMessageType } from '../types';
import CollegeCard from './CollegeCard';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const colleges = message.colleges || [];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, Math.ceil(colleges.length / 2)));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? Math.max(0, Math.ceil(colleges.length / 2) - 1) : prev - 1);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex gap-4 mb-6 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
      {message.type === 'ai' && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      
      <div className={`max-w-[80%] ${message.type === 'user' ? 'order-1' : ''}`}>
        <div className={`p-4 rounded-2xl ${
          message.type === 'user' 
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white ml-auto max-w-md' 
            : 'bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 text-white'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        </div>
        
        <div className={`text-xs text-gray-400 mt-2 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
          {formatTime(message.timestamp)}
        </div>

        {/* College Cards Carousel */}
        {message.type === 'ai' && colleges.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold text-purple-300">🎓 Found {colleges.length} colleges</span>
            </div>
            
            <div className="relative">
              {colleges.length > 2 && (
                <>
                  <button 
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors border border-purple-500/20"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors border border-purple-500/20"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
              
              <div className="overflow-hidden mx-6">
                <div 
                  className="flex gap-4 transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {colleges.map((college) => (
                    <CollegeCard key={college.id} college={college} />
                  ))}
                </div>
              </div>
            </div>

            {colleges.length > 2 && (
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: Math.ceil(colleges.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-purple-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {message.type === 'user' && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;