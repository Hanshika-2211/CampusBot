import React from 'react';
import {
  Star,
  MapPin,
  CreditCard,
  TrendingUp,
  ExternalLink,
  Send,
} from 'lucide-react';
import { College } from '../types';

interface CollegeCardProps {
  college: College;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college }) => {
  return (
    <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-300 hover:scale-[1.03] min-w-[320px] max-w-[320px] shadow-md">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
            {college.name}
          </h3>
          <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
            <MapPin className="w-4 h-4 text-blue-300" />
            {college.location}
          </div>
        </div>
        {college.nirf_ranking && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow-sm">
            NIRF #{college.nirf_ranking}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white/5 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-white font-semibold">{college.rating}</span>
          </div>
          <div className="text-xs text-gray-400">Rating</div>
        </div>

        <div className="bg-white/5 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <CreditCard className="w-4 h-4 text-green-300" />
            <span className="text-white font-semibold">{college.fees}</span>
          </div>
          <div className="text-xs text-gray-400">Annual Fees</div>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-3 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp className="w-4 h-4 text-purple-300" />
          <span className="text-white font-semibold">{college.placements}</span>
        </div>
        <div className="text-xs text-gray-400">Average Package</div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
          {college.course}
        </span>
        <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs font-medium">
          {college.type}
        </span>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium shadow-md">
          <ExternalLink className="w-4 h-4" />
          Counsel Now
        </button>
        <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium shadow-md">
          <Send className="w-4 h-4" />
          Apply
        </button>
      </div>
    </div>
  );
};

export default CollegeCard;
