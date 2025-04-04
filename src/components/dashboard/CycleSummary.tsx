
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CalendarDays, Droplet } from 'lucide-react';

const CycleSummary = () => {
  // Mock data - in a real app this would come from user's data
  const cycleDay = 5;
  const cycleLength = 28;
  const periodLength = 5;
  const nextPeriodIn = 23;
  const progress = (cycleDay / cycleLength) * 100;
  
  return (
    <Card className="bg-gradient-to-br from-empowerpink/20 to-empowerpurple/20 border-none shadow-sm">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-display font-medium text-lg">Your Cycle</h3>
            <p className="text-sm text-muted-foreground">Day {cycleDay} of {cycleLength}</p>
          </div>
          <div className="flex items-center bg-white/80 rounded-full px-3 py-1 text-sm font-medium text-empowerpink-dark">
            <Droplet size={14} className="mr-1 fill-empowerpink text-empowerpink" />
            Period Day {Math.min(cycleDay, periodLength)}
          </div>
        </div>
        
        <Progress value={progress} className="h-2 bg-white/50" indicatorClassName="bg-empowerpink" />
        
        <div className="mt-5 flex items-center justify-between text-sm">
          <div className="flex items-center">
            <CalendarDays size={16} className="mr-1" />
            <span>Next period in</span>
          </div>
          <span className="font-medium">{nextPeriodIn} days</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CycleSummary;
