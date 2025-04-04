
import React from 'react';
import Layout from '@/components/Layout';
import CycleSummary from '@/components/dashboard/CycleSummary';
import RecommendedProducts from '@/components/dashboard/RecommendedProducts';
import UpcomingConsultations from '@/components/dashboard/UpcomingConsultations';
import ResourcesSection from '@/components/dashboard/ResourcesSection';

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-2xl font-display font-bold mb-6 text-empowerpink-dark">Welcome to EmpowerCycle</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CycleSummary />
          
          <div className="space-y-6">
            <UpcomingConsultations />
            <RecommendedProducts />
          </div>
          
          <div className="md:col-span-2">
            <ResourcesSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
