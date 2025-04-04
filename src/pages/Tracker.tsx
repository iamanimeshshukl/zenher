
import React from 'react';
import Layout from '@/components/Layout';
import CycleTracker from '@/components/cycle/CycleTracker';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarClock, Sparkles, LineChart, MoodHappy } from 'lucide-react';

const Tracker = () => {
  return (
    <Layout>
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-display font-bold text-empowerpink-dark">Cycle Tracker</h1>
        </div>
        
        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="calendar" className="flex-1">
              <CalendarClock size={16} className="mr-2" /> Calendar
            </TabsTrigger>
            <TabsTrigger value="predictions" className="flex-1">
              <Sparkles size={16} className="mr-2" /> Predictions
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex-1">
              <LineChart size={16} className="mr-2" /> Insights
            </TabsTrigger>
            <TabsTrigger value="symptoms" className="flex-1">
              <MoodHappy size={16} className="mr-2" /> Symptoms
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="calendar" className="mt-0">
            <CycleTracker />
          </TabsContent>
          
          <TabsContent value="predictions" className="mt-0">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-display font-medium mb-4">Cycle Predictions</h3>
              <p className="text-muted-foreground">This feature will be available after you log your cycle for at least two months.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="insights" className="mt-0">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-display font-medium mb-4">Cycle Insights</h3>
              <p className="text-muted-foreground">This feature will be available after you log your cycle for at least two months.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="symptoms" className="mt-0">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-display font-medium mb-4">Symptom Tracker</h3>
              <p className="text-muted-foreground">This feature will be available after you log your symptoms during your cycle.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Tracker;
