import React from 'react';
import Layout from '@/components/Layout';
import DiscussionBoard from '@/components/community/DiscussionBoard';
import { Search, Filter, Plus, TrendingUp, Clock, Users, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Community = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-6 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-semibold text-gray-900">Community Hub</h1>
            <Badge variant="secondary" className="bg-empowerpink/10 text-empowerpink">
              12k Members
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-empowerpurple text-empowerpurple hover:bg-empowerpurple/10"
            >
              <Filter size={16} className="mr-2" /> Filters
            </Button>
            <Button className="bg-empowerpurple hover:bg-empowerpurple-dark text-white">
              <Plus size={16} className="mr-2" /> Create Post
            </Button>
          </div>
        </div>

        {/* Search and User Info */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <Input
                placeholder="Search posts, topics, or people..."
                className="pl-12 py-3 text-sm rounded-lg border-gray-200 focus:ring-empowerpurple focus:border-empowerpurple shadow-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/user-avatar.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">Member since 2023</p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="trending" className="w-full">
          <TabsList className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-transparent border-b border-gray-200 mb-6">
            <TabsTrigger
              value="trending"
              className="py-3 text-sm font-medium text-gray-600 hover:text-empowerpurple data-[state=active]:text-empowerpurple data-[state=active]:border-b-2 data-[state=active]:border-empowerpurple"
            >
              <TrendingUp size={16} className="mr-2" /> Trending
            </TabsTrigger>
            <TabsTrigger
              value="recent"
              className="py-3 text-sm font-medium text-gray-600 hover:text-empowerpurple data-[state=active]:text-empowerpurple data-[state=active]:border-b-2 data-[state=active]:border-empowerpurple"
            >
              <Clock size={16} className="mr-2" /> Recent
            </TabsTrigger>
            <TabsTrigger
              value="following"
              className="py-3 text-sm font-medium text-gray-600 hover:text-empowerpurple data-[state=active]:text-empowerpurple data-[state=active]:border-b-2 data-[state=active]:border-empowerpurple"
            >
              <Users size={16} className="mr-2" /> Following
            </TabsTrigger>
            <TabsTrigger
              value="health"
              className="py-3 text-sm font-medium text-gray-600 hover:text-empowerpurple data-[state=active]:text-empowerpurple data-[state=active]:border-b-2 data-[state=active]:border-empowerpurple"
            >
              <Tag size={16} className="mr-2" /> Health
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="py-3 text-sm font-medium text-gray-600 hover:text-empowerpurple data-[state=active]:text-empowerpurple data-[state=active]:border-b-2 data-[state=active]:border-empowerpurple"
            >
              <Tag size={16} className="mr-2" /> Products
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <TabsContent value="trending" className="mt-0">
                <DiscussionBoard filter="trending" />
              </TabsContent>
              <TabsContent value="recent" className="mt-0">
                <DiscussionBoard filter="recent" />
              </TabsContent>
              <TabsContent value="following" className="mt-0">
                <DiscussionBoard filter="following" />
              </TabsContent>
              <TabsContent value="health" className="mt-0">
                <DiscussionBoard filter="health" />
              </TabsContent>
              <TabsContent value="products" className="mt-0">
                <DiscussionBoard filter="products" />
              </TabsContent>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Communities</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Health Talk</span>
                    <Badge variant="outline">1.2k</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Product Reviews</span>
                    <Badge variant="outline">980</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Tech Updates</span>
                    <Badge variant="outline">750</Badge>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Community;