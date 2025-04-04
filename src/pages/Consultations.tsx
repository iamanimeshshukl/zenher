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
      <div className="container mx-auto py-8 px-4 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-gray-800 font-display">
           Doctor Consultations
          </h1>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <CalendarCheck size={16} /> My Appointments
          </Button>
        </div>

        {/* Search Section */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search doctors by name, specialty, or condition..." 
            className="pl-10 pr-12 h-11 shadow-sm bg-white border border-muted rounded-md"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:bg-muted"
          >
            <SlidersHorizontal size={16} />
          </Button>
        </div>

        {/* Tabs for Specialties */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full mb-6 overflow-x-auto flex flex-wrap gap-2 rounded-lg border bg-muted px-2 py-1">
            <TabsTrigger value="all" className="flex-1 min-w-[150px] text-sm font-medium whitespace-nowrap">
              All Specialists
            </TabsTrigger>
            <TabsTrigger value="gynecologist" className="flex-1 min-w-[150px] text-sm font-medium whitespace-nowrap">
              Gynecologists
            </TabsTrigger>
            <TabsTrigger value="fertility" className="flex-1 min-w-[150px] text-sm font-medium whitespace-nowrap">
              Fertility Experts
            </TabsTrigger>
            <TabsTrigger value="menstrual" className="flex-1 min-w-[150px] text-sm font-medium whitespace-nowrap">
              Menstrual Health
            </TabsTrigger>
          </TabsList>

          {/* Doctor List Content */}
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
