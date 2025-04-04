import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { addDays, format, isSameDay, startOfToday } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Droplets, Brain, Heart, Move, Moon, Sun, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

type CyclePhase = 'period' | 'follicular' | 'ovulation' | 'luteal';

const CycleTracker = () => {
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(today);

  // Example cycle data (replace with real user data in production)
  const periodStartDate = addDays(today, -3);
  const periodEndDate = addDays(today, 2);
  const ovulationDate = addDays(today, 14);

  const getCyclePhase = (date: Date): CyclePhase | null => {
    if (date >= periodStartDate && date <= periodEndDate) return 'period';
    if (date > periodEndDate && date < addDays(periodEndDate, 7)) return 'follicular';
    if (
      isSameDay(date, ovulationDate) ||
      (date >= addDays(ovulationDate, -1) && date <= addDays(ovulationDate, 1))
    ) return 'ovulation';
    if (date > addDays(ovulationDate, 1) && date < addDays(periodStartDate, 28)) return 'luteal';
    return null;
  };

  const renderDayContent = (day: Date) => {
    const phase = getCyclePhase(day);
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {phase === 'period' && (
          <div className="absolute inset-0 bg-empowerpink opacity-20 rounded-full" />
        )}
        {phase === 'ovulation' && (
          <div className="absolute inset-0 bg-empowerteal opacity-20 rounded-full" />
        )}
        <div className="z-10">{day.getDate()}</div>
      </div>
    );
  };

  const cyclePhase = selectedDate ? getCyclePhase(selectedDate) : null;
  const phaseInfo = {
    period: {
      title: "Menstrual Phase",
      icon: <Droplets className="text-empowerpink" size={20} />,
      description: "Your period is active. Prioritize rest and hydration.",
      color: "bg-empowerpink/10 text-empowerpink-dark",
      tip: "Try gentle stretching or a warm bath to ease discomfort.",
    },
    follicular: {
      title: "Follicular Phase",
      icon: <Move className="text-empowerpurple" size={20} />,
      description: "Energy is rising. Perfect for new challenges.",
      color: "bg-empowerpurple/10 text-empowerpurple-dark",
      tip: "Boost your mood with a brisk walk or creative project.",
    },
    ovulation: {
      title: "Ovulation Phase",
      icon: <Heart className="text-empowerteal" size={20} />,
      description: "Peak fertility time. You’re likely feeling your best.",
      color: "bg-empowerteal/10 text-empowerteal-dark",
      tip: "Stay active and connect with loved ones.",
    },
    luteal: {
      title: "Luteal Phase",
      icon: <Brain className="text-empowerpurple" size={20} />,
      description: "Pre-menstrual phase. Focus on self-care.",
      color: "bg-empowerpurple/10 text-empowerpurple-dark",
      tip: "Wind down with meditation or a good book.",
    },
  };

  return (
    <motion.div className="space-y-8" initial="hidden" animate="visible" variants={staggerChildren}>
      {/* Calendar Section */}
      <motion.div variants={fadeInUp}>
        <Card className="bg-white rounded-xl shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-display font-semibold text-empowerpurple-dark">
              Your Cycle Calendar
            </CardTitle>
            <Badge className="bg-empowerpink hover:bg-empowerpink-dark">
              <CalendarIcon size={14} className="mr-1" /> 28-Day Cycle
            </Badge>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-lg border-none"
              components={{ DayContent: ({ date }) => renderDayContent(date) }}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Phase Info & Logging */}
      {selectedDate && cyclePhase && (
        <motion.div variants={fadeInUp}>
          <Card className="bg-white rounded-xl shadow-sm">
            <CardContent className="pt-6">
              <div className={`flex items-center gap-4 rounded-lg p-4 mb-4 ${phaseInfo[cyclePhase].color}`}>
                {phaseInfo[cyclePhase].icon}
                <div>
                  <h3 className="text-lg font-medium text-empowerpurple-dark">
                    {phaseInfo[cyclePhase].title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{phaseInfo[cyclePhase].description}</p>
                </div>
              </div>

              {/* Daily Tip */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-medium text-empowerpurple-dark flex items-center">
                  <Sun size={16} className="mr-2" /> Daily Tip
                </h4>
                <p className="text-sm text-muted-foreground">{phaseInfo[cyclePhase].tip}</p>
              </div>

              {/* Logging Options */}
              <div>
                <h3 className="font-medium text-empowerpurple-dark mb-3">
                  Log for {format(selectedDate, 'MMMM d, yyyy')}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <LogButton label="Flow" active={cyclePhase === 'period'} icon={<Droplets size={16} />} />
                  <LogButton label="Symptoms" icon={<Brain size={16} />} />
                  <LogButton label="Mood" icon={<Heart size={16} />} />
                  <LogButton label="Notes" icon={<Move size={16} />} />
                  <LogButton label="Sleep" icon={<Moon size={16} />} />
                  <LogButton label="Activity" icon={<TrendingUp size={16} />} />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Cycle Overview Section */}
      <motion.div variants={fadeInUp}>
        <Card className="bg-white rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-display font-semibold text-empowerpurple-dark">
              Cycle Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Last Period</span>
                <span className="text-sm text-empowerpink-dark">
                  {format(periodStartDate, 'MMM d')} - {format(periodEndDate, 'MMM d')}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Next Ovulation</span>
                <span className="text-sm text-empowerteal-dark">{format(ovulationDate, 'MMM d')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Next Period</span>
                <span className="text-sm text-empowerpink-dark">
                  {format(addDays(periodStartDate, 28), 'MMM d')}
                </span>
              </div>
            </div>
            <Button className="mt-4 w-full bg-empowerpurple-dark hover:bg-empowerpurple text-white">
              View Full Cycle History
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

const LogButton = ({ label, active = false, icon }: { label: string; active?: boolean; icon?: React.ReactNode }) => (
  <Button
    variant="outline"
    className={`flex items-center justify-center gap-2 p-3 rounded-lg text-sm ${
      active
        ? 'bg-empowerpink/10 border-empowerpink text-empowerpink-dark'
        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
    }`}
  >
    {icon}
    {label}
  </Button>
);

export default CycleTracker;