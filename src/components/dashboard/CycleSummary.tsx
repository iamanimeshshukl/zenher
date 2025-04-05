import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, Droplet } from 'lucide-react';

const CycleSummary = () => {
  // Mock data - in a real app this would come from user's data
  const cycleDay = 5;
  const cycleLength = 28;
  const periodLength = 5;
  const nextPeriodIn = 23;
  const progress = (cycleDay / cycleLength) * 100;

  return (
    <Card className="bg-white border border-gray-100 shadow-lg rounded-3xl overflow-hidden">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Your Cycle</h3>
            <p className="text-sm text-gray-500 mt-1">Day {cycleDay} of {cycleLength}</p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full px-3 py-1 flex items-center shadow-md">
            <Droplet size={16} className="mr-1 fill-white" />
            <span className="text-sm font-medium">Day {Math.min(cycleDay, periodLength)}</span>
          </div>
        </div>

        {/* Cycle Visualization */}
        <div className="relative flex justify-center mb-8">
          <svg width="200" height="200" viewBox="0 0 200 200" className="relative">
            {/* Background Circle */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="#F3F4F6"
              strokeWidth="12"
            />
            {/* Progress Arc */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="url(#cycleGradient)"
              strokeWidth="12"
              strokeDasharray={`${progress * 5.34}, 534`}
              strokeLinecap="round"
              transform="rotate(-90 100 100)"
            />
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="cycleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#F472B6' }} />
                <stop offset="100%" style={{ stopColor: '#A855F7' }} />
              </linearGradient>
            </defs>
            {/* Decorative Dots */}
            <circle cx="100" cy="15" r="4" fill="#F472B6" />
            <circle cx="185" cy="100" r="4" fill="#A855F7" />
            <circle cx="100" cy="185" r="4" fill="#D8B4FE" />
          </svg>
          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-gray-900">{cycleDay}</span>
            <span className="text-sm text-gray-600">Current Day</span>
          </div>
        </div>

        {/* Next Period */}
        <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 shadow-sm">
          <div className="flex items-center">
            <CalendarDays size={20} className="text-purple-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Next Period</span>
          </div>
          <span className="text-lg font-semibold text-purple-600">{nextPeriodIn} days</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CycleSummary;