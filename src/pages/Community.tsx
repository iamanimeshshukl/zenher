
import React from 'react';
import Layout from '@/components/Layout';
import DiscussionBoard from '@/components/community/DiscussionBoard';
import { Search, SlidersHorizontal, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Community = () => {
  return (
    <Layout>
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-display font-bold text-empowerpink-dark">Community</h1>
          <Button className="bg-empowerpurple hover:bg-empowerpurple-dark">
            <MessageSquare size={16} className="mr-2" /> New Post
          </Button>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search discussions..." 
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
        
        <Tabs defaultValue="trending" className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="trending" className="flex-1">Trending</TabsTrigger>
            <TabsTrigger value="recent" className="flex-1">Recent</TabsTrigger>
            <TabsTrigger value="following" className="flex-1">Following</TabsTrigger>
            <TabsTrigger value="health" className="flex-1">Health</TabsTrigger>
            <TabsTrigger value="products" className="flex-1">Products</TabsTrigger>
          </TabsList>
          
          <TabsContent value="trending" className="mt-0">
            <DiscussionBoard />
          </TabsContent>
          
          <TabsContent value="recent" className="mt-0">
            <DiscussionBoard />
          </TabsContent>
          
          <TabsContent value="following" className="mt-0">
            <DiscussionBoard />
          </TabsContent>
          
          <TabsContent value="health" className="mt-0">
            <DiscussionBoard />
          </TabsContent>
          
          <TabsContent value="products" className="mt-0">
            <DiscussionBoard />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Community;
