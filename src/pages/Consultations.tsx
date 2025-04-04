
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
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-display font-bold text-empowerpink-dark">Doctor Consultations</h1>
          <Button variant="outline" size="sm">
            <CalendarCheck size={16} className="mr-2" /> My Appointments
          </Button>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search doctors by name or specialty..." 
            className="pl-10 pr-10 bg-white"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-1 top-1/2 transform -translate-y-1/2"
          >
            <SlidersHorizontal size={16} />
          </Button>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="all" className="flex-1">All Specialists</TabsTrigger>
            <TabsTrigger value="gynecologist" className="flex-1">Gynecologists</TabsTrigger>
            <TabsTrigger value="fertility" className="flex-1">Fertility</TabsTrigger>
            <TabsTrigger value="menstrual" className="flex-1">Menstrual Health</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <DoctorList />
          </TabsContent>
          
          <TabsContent value="gynecologist" className="mt-0">
            <DoctorList />
          </TabsContent>
          
          <TabsContent value="fertility" className="mt-0">
            <DoctorList />
          </TabsContent>
          
          <TabsContent value="menstrual" className="mt-0">
            <DoctorList />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Consultations;
