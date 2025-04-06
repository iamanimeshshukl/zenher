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
      <div className="container mx-auto py-12 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 tracking-tight">
            Expert Consultations
          </h1>
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 rounded-full px-6"
          >
            <CalendarCheck size={18} /> My Appointments
          </Button>
        </div>

        {/* Search Section */}
        <div className="relative mb-10 max-w-3xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Find doctors by name, specialty, or condition"
            className="pl-12 pr-14 h-12 bg-white border border-gray-200 rounded-full shadow-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-all duration-300"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-full"
          >
            <SlidersHorizontal size={18} />
          </Button>
        </div>

        {/* Tabs for Specialties */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent">
            <TabsTrigger
              value="all"
              className="py-3 px-4 text-sm font-medium text-gray-700 bg-white rounded-xl shadow-sm border border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-all duration-300"
            >
              All Specialists
            </TabsTrigger>
            <TabsTrigger
              value="gynecologist"
              className="py-3 px-4 text-sm font-medium text-gray-700 bg-white rounded-xl shadow-sm border border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-all duration-300"
            >
              Gynecologists
            </TabsTrigger>
            <TabsTrigger
              value="fertility"
              className="py-3 px-4 text-sm font-medium text-gray-700 bg-white rounded-xl shadow-sm border border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-all duration-300"
            >
              Fertility Experts
            </TabsTrigger>
            <TabsTrigger
              value="menstrual"
              className="py-3 px-4 text-sm font-medium text-gray-700 bg-white rounded-xl shadow-sm border border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-all duration-300"
            >
              Menstrual Health
            </TabsTrigger>
          </TabsList>

          {/* Doctor List Content */}
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