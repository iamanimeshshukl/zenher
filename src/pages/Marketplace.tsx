import React from 'react';
import Layout from '@/components/Layout';
import ProductGrid from '@/components/marketplace/ProductGrid';
import { Search, Filter, PackageCheck, ChevronDown, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const Marketplace = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-10 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-semibold text-gray-900">Marketplace</h1>
            <Badge variant="secondary" className="bg-empowerpink/10 text-empowerpink">
              1,500+ Products
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            >
              <PackageCheck size={16} /> My Orders
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  Sort By <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Best Sellers</DropdownMenuItem>
                <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                <DropdownMenuItem>Customer Reviews</DropdownMenuItem>
                <DropdownMenuItem>New Arrivals</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
          {/* Search Bar */}
          <div className="lg:col-span-4 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <Input
              placeholder="Search for pads, tampons, cups, and more..."
              className="pl-12 py-3 text-sm rounded-lg border-gray-300 focus:ring-empowerpurple focus:border-empowerpurple shadow-sm"
            />
          </div>

          {/* Filter Button */}
          <Button
            variant="outline"
            className="flex items-center gap-2 text-gray-700 hover:bg-gray-100"
          >
            <Filter size={16} /> Filters
          </Button>
        </div>

        {/* Tabs for Categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap gap-3 bg-transparent border-b border-gray-200 mb-8">
            <TabsTrigger
              value="all"
              className="py-3 px-4 text-sm font-medium text-gray-600 hover:text-empowerpurple data-[state=active]:text-empowerpurple data-[state=active]:border-b-2 data-[state=active]:border-empowerpurple"
            >
              All Products
            </TabsTrigger>
            <TabsTrigger
              value="pads"
              className="py-3 px-4 text-sm font-medium text-gray-600 hover:text-empowerpurple data-[state=active]:text-empowerpurple data-[state=active]:border-b-2 data-[state=active]:border-empowerpurple"
            >
              Pads
            </TabsTrigger>
            <TabsTrigger
              value="tampons"
              className="py-3 px-4 text-sm font-medium text-gray-600 hover:text-empowerpurple data-[state=active]:text-empowerpurple data-[state=active]:border-b-2 data-[state=active]:border-empowerpurple"
            >
              Tampons
            </TabsTrigger>
            <TabsTrigger
              value="cups"
              className="py-3 px-4 text-sm font-medium text-gray-600 hover:text-empowerpurple data-[state=active]:text-empowerpurple data-[state=active]:border-b-2 data-[state=active]:border-empowerpurple"
            >
            
            </TabsTrigger>
            <TabsTrigger
              value="wellness"
              className="py-3 px-4 text-sm font-medium text-gray-600 hover:text-empowerpurple data-[state=active]:text-empowerpurple data-[state=active]:border-b-2 data-[state=active]:border-empowerpurple"
            >
            </TabsTrigger>
          </TabsList>

          {/* Product Grid with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar (Filters) */}
            <div className="hidden lg:block">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Refine Your Search</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Price Range</h4>
                    <div className="mt-2 text-sm text-gray-600">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" /> $0 - $10
                      </label>
                      <label className="flex items-center gap-2 mt-1">
                        <input type="checkbox" className="rounded" /> $10 - $25
                      </label>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Customer Rating</h4>
                    <div className="mt-2 text-sm text-gray-600">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" /> <Star size={16} className="text-yellow-400" /> 4 & Up
                      </label>
                      <label className="flex items-center gap-2 mt-1">
                        <input type="checkbox" className="rounded" /> <Star size={16} className="text-yellow-400" /> 3 & Up
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <TabsContent value="all" className="mt-0">
                <ProductGrid filter="all" />
              </TabsContent>
              <TabsContent value="pads" className="mt-0">
                <ProductGrid filter="pads" />
              </TabsContent>
              <TabsContent value="tampons" className="mt-0">
                <ProductGrid filter="tampons" />
              </TabsContent>
              <TabsContent value="cups" className="mt-0">
                <ProductGrid filter="cups" />
              </TabsContent>
              <TabsContent value="wellness" className="mt-0">
                <ProductGrid filter="wellness" />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Marketplace;