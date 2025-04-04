
import React from 'react';
import Layout from '@/components/Layout';
import ProductGrid from '@/components/marketplace/ProductGrid';
import { Search, SlidersHorizontal, PackageCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Marketplace = () => {
  return (
    <Layout>
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-display font-bold text-empowerpink-dark">Marketplace</h1>
          <Button variant="outline" size="sm">
            <PackageCheck size={16} className="mr-2" /> Orders
          </Button>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search products..." 
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
            <TabsTrigger value="all" className="flex-1">All Products</TabsTrigger>
            <TabsTrigger value="pads" className="flex-1">Pads</TabsTrigger>
            <TabsTrigger value="tampons" className="flex-1">Tampons</TabsTrigger>
            <TabsTrigger value="cups" className="flex-1">Menstrual Cups</TabsTrigger>
            <TabsTrigger value="wellness" className="flex-1">Wellness</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <ProductGrid />
          </TabsContent>
          
          <TabsContent value="pads" className="mt-0">
            <ProductGrid />
          </TabsContent>
          
          <TabsContent value="tampons" className="mt-0">
            <ProductGrid />
          </TabsContent>
          
          <TabsContent value="cups" className="mt-0">
            <ProductGrid />
          </TabsContent>
          
          <TabsContent value="wellness" className="mt-0">
            <ProductGrid />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Marketplace;
