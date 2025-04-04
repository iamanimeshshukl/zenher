
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { addDays, format, isSameDay, startOfToday } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, DropletsIcon, BrainIcon, HeartIcon, MoveIcon } from 'lucide-react';

type CyclePhase = 'period' | 'follicular' | 'ovulation' | 'luteal';

const CycleTracker = () => {
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(today);
  
  // Example cycle data (would come from user's data in a real app)
  const periodStartDate = addDays(today, -3);
  const periodEndDate = addDays(today, 2);
  const ovulationDate = addDays(today, 14);
  
  const getCyclePhase = (date: Date): CyclePhase | null => {
    if (date >= periodStartDate && date <= periodEndDate) {
      return 'period';
    } else if (date > periodEndDate && date < addDays(periodEndDate, 7)) {
      return 'follicular';
    } else if (isSameDay(date, ovulationDate) || 
              (date >= addDays(ovulationDate, -1) && date <= addDays(ovulationDate, 1))) {
      return 'ovulation';
    } else if (date > addDays(ovulationDate, 1) && date < addDays(periodStartDate, 28)) {
      return 'luteal';
    }
    return null;
  };
  
  const renderDayContent = (day: Date) => {
    const phase = getCyclePhase(day);
    if (phase === 'period') {
      return <div className="h-full w-full absolute inset-0 bg-empowerpink opacity-20 rounded-full" />;
    }
    if (phase === 'ovulation') {
      return <div className="h-full w-full absolute inset-0 bg-empowerteal opacity-20 rounded-full" />;
    }
    return null;
  };

  const cyclePhase = selectedDate ? getCyclePhase(selectedDate) : null;
  const phaseInfo = {
    period: {
      title: "Menstrual Phase",
      icon: <DropletsIcon className="text-empowerpink" />,
      description: "Your period is active. Take care and rest if needed.",
      color: "bg-empowerpink/10 text-empowerpink-dark"
    },
    follicular: {
      title: "Follicular Phase",
      icon: <MoveIcon className="text-empowerpurple" />,
      description: "Your energy is building. Great time for starting new projects.",
      color: "bg-empowerpurple/10 text-empowerpurple-dark"
    },
    ovulation: {
      title: "Ovulation Phase",
      icon: <HeartIcon className="text-empowerteal" />,
      description: "Peak fertility window. Energy and mood tend to be higher.",
      color: "bg-empowerteal/10 text-empowerteal-dark"
    },
    luteal: {
      title: "Luteal Phase",
      icon: <BrainIcon className="text-empowerpurple" />,
      description: "Pre-menstrual phase. Focus on self-care and rest.",
      color: "bg-empowerpurple/10 text-empowerpurple-dark"
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-display font-semibold">Your Cycle</h2>
          <Badge className="bg-empowerpink hover:bg-empowerpink-dark">
            <CalendarIcon size={14} className="mr-1" /> 28 Day Cycle
          </Badge>
        </div>
        
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-lg border-none"
          components={{
            DayContent: (props) => (
              <div className="relative w-full h-full flex items-center justify-center">
                {renderDayContent(props.date)}
                <div className="z-10">{props.date.getDate()}</div>
              </div>
            ),
          }}
        />
      </div>
      
      {selectedDate && cyclePhase && (
        <Card>
          <CardContent className="pt-6">
            <div className={`flex items-center gap-3 rounded-lg p-3 mb-3 ${phaseInfo[cyclePhase].color}`}>
              {phaseInfo[cyclePhase].icon}
              <div>
                <h3 className="font-medium">{phaseInfo[cyclePhase].title}</h3>
                <p className="text-sm">{phaseInfo[cyclePhase].description}</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium mb-2">Log for {format(selectedDate, 'MMMM d, yyyy')}</h3>
              <div className="grid grid-cols-3 gap-2">
                <LogButton label="Flow" active={cyclePhase === 'period'} />
                <LogButton label="Symptoms" />
                <LogButton label="Mood" />
                <LogButton label="Notes" />
                <LogButton label="Sleep" />
                <LogButton label="Activity" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

const LogButton = ({ label, active = false }: { label: string; active?: boolean }) => (
  <button 
    className={`p-2 rounded-lg text-sm border ${
      active 
        ? 'bg-empowerpink/10 border-empowerpink text-empowerpink-dark' 
        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
    }`}
  >
    {label}
  </button>
);

export default CycleTracker;
