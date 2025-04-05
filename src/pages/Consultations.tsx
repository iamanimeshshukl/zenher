import React from 'react';
import Layout from '@/components/Layout';
import DoctorList from '@/components/consultations/DoctorList';
import { Search, SlidersHorizontal, CalendarCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Consultations = () => {
  return (
    <Layout>
      <div className="container mx-auto py-10 px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">
           Doctor Consultations
          </h1>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 text-primary hover:bg-primary/10 transition"
          >
            <CalendarCheck size={18} /> My Appointments
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={18}
          />
          <Input
            placeholder="Search by name, specialty, or condition..."
            className="pl-10 pr-12 h-12 border rounded-xl shadow-sm bg-white focus:ring-2 focus:ring-primary"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:bg-muted/20 rounded-full"
          >
            <SlidersHorizontal size={18} />
          </Button>
        </div>

        {/* Specialty Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex w-full overflow-x-auto px-1 py-2 rounded-xl bg-muted border shadow-sm gap-2 mb-6">
            {[
              { value: 'all', label: 'All Specialists' },
              { value: 'gynecologist', label: 'Gynecologists' },
              { value: 'fertility', label: 'Fertility Experts' },
              { value: 'menstrual', label: 'Menstrual Health' },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="min-w-[150px] text-sm font-medium whitespace-nowrap px-4 py-2 rounded-lg transition-all hover:bg-white data-[state=active]:bg-white data-[state=active]:text-primary shadow-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          <TabsContent value="all">
            <DoctorList />
          </TabsContent>
          <TabsContent value="gynecologist">
            <DoctorList />
          </TabsContent>
          <TabsContent value="fertility">
            <DoctorList />
          </TabsContent>
          <TabsContent value="menstrual">
            <DoctorList />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Consultations;
