import { useState, useCallback } from 'react';
import { ChatMessage, College } from '../types';
import { mockColleges } from '../data/mockData';

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateResponse = (userMessage: string): { content: string; colleges?: College[] } => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple keyword matching for demo purposes
    let relevantColleges: College[] = [];
    
    if (lowerMessage.includes('mumbai') || lowerMessage.includes('bombay')) {
      relevantColleges = mockColleges.filter(college => college.city.toLowerCase() === 'mumbai');
    } else if (lowerMessage.includes('cse') || lowerMessage.includes('computer') || lowerMessage.includes('software')) {
      relevantColleges = mockColleges.filter(college => college.course.toLowerCase().includes('cse'));
    } else if (lowerMessage.includes('best') || lowerMessage.includes('top')) {
      relevantColleges = mockColleges.sort((a, b) => b.rating - a.rating);
    } else if (lowerMessage.includes('cheap') || lowerMessage.includes('affordable') || lowerMessage.includes('low fee')) {
      relevantColleges = mockColleges.sort((a, b) => 
        parseFloat(a.fees.replace(/[₹L,]/g, '')) - parseFloat(b.fees.replace(/[₹L,]/g, ''))
      );
    } else {
      relevantColleges = mockColleges;
    }

    let responseContent = '';
    
    if (relevantColleges.length > 0) {
      if (lowerMessage.includes('mumbai')) {
        responseContent = `Great choice! 🌟 I found ${relevantColleges.length} excellent colleges in Mumbai for your requirements. Mumbai is a fantastic city for engineering education with top-tier institutions and amazing placement opportunities!`;
      } else if (lowerMessage.includes('best') || lowerMessage.includes('top')) {
        responseContent = `Here are the top-rated colleges based on your criteria! 🏆 These institutions have excellent academic records, outstanding faculty, and impressive placement statistics.`;
      } else if (lowerMessage.includes('affordable') || lowerMessage.includes('cheap')) {
        responseContent = `I've found some budget-friendly options for you! 💰 These colleges offer quality education at reasonable fees without compromising on academic excellence.`;
      } else {
        responseContent = `I found ${relevantColleges.length} colleges that match your requirements! 🎓 Here are some great options to consider based on your criteria.`;
      }
    } else {
      responseContent = `I'd love to help you find the perfect college! 😊 Could you please provide more specific details about what you're looking for? For example:
      
• Which course or field interests you?
• Any preferred location or city?
• What's your budget range for fees?
• Government or private preference?

This will help me give you more personalized recommendations! 🎯`;
    }

    return {
      content: responseContent,
      colleges: relevantColleges.length > 0 ? relevantColleges : undefined
    };
  };

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      type: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    const response = generateResponse(content);
    
    const aiMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      content: response.content,
      type: 'ai',
      timestamp: new Date(),
      colleges: response.colleges
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages
  };
};