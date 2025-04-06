import React from 'react';
import Layout from '@/components/Layout';
import ProductGrid from '@/components/marketplace/ProductGrid';
import { Search, Filter, PackageCheck, ChevronDown, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const Marketplace: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Marketplace</h1>
            <Badge className="bg-empowerpink/10 text-empowerpink text-xs font-medium">
              1,500+ Products
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
            >
              <PackageCheck size={16} className="mr-2" />
              My Orders
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                >
                  Sort By <ChevronDown size={16} className="ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="text-sm">Best Sellers</DropdownMenuItem>
                <DropdownMenuItem className="text-sm">Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem className="text-sm">Price: High to Low</DropdownMenuItem>
                <DropdownMenuItem className="text-sm">Customer Reviews</DropdownMenuItem>
                <DropdownMenuItem className="text-sm">New Arrivals</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="relative lg:col-span-4">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              placeholder="Search for pads, tampons, cups, and more..."
              className="h-11 rounded-md border-gray-200 pl-10 text-sm shadow-sm focus:border-empowerpurple focus:ring-empowerpurple/20"
            />
          </div>
          <Button
            variant="outline"
            className="h-11 border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
          >
            <Filter size={16} className="mr-2" />
            Filters
          </Button>
        </div>

        {/* Tabs for Categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex flex-wrap gap-2 border-b border-gray-200 bg-transparent p-0">
            {[
              { value: 'all', label: 'All Products' },
              { value: 'pads', label: 'Pads' },
              { value: 'tampons', label: 'Tampons' },
            
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-empowerpurple data-[state=active]:border-b-2 data-[state=active]:border-empowerpurple data-[state=active]:text-empowerpurple"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Product Grid with Sidebar */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Sidebar (Filters) */}
            <aside className="hidden lg:block">
              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="mb-5 text-lg font-semibold text-gray-900">
                  Refine Your Search
                </h3>
                <div className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-gray-700">Price Range</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      {['$0 - $10', '$10 - $25'].map((range) => (
                        <label key={range} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-empowerpurple focus:ring-empowerpurple"
                          />
                          {range}
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Customer Rating */}
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-gray-700">
                      Customer Rating
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      {[
                        { label: '4 & Up', stars: 4 },
                        { label: '3 & Up', stars: 3 },
                      ].map((rating) => (
                        <label key={rating.label} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-empowerpurple focus:ring-empowerpurple"
                          />
                          <Star size={16} className="text-yellow-400" />
                          {rating.label}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              {['all', 'pads', 'tampons', 'cups', 'wellness'].map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <ProductGrid filter={category} />
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Marketplace;