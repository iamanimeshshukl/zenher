import React from 'react';
import Layout from '@/components/Layout';
import CycleTracker from '@/components/cycle/CycleTracker';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarClock, Sparkles, LineChart, Smile, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Tracker = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          className="flex justify-between items-center mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <center><h1 className="text-3xl md:text-4xl font-display font-bold text-black tracking-tight">
            Your Cycle Tracker
          </h1></center>
        </motion.div>

        {/* Tabs Section */}
        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="w-full mb-8 grid grid-cols-2 md:grid-cols-4 gap-2 bg-gray-100 p-2 rounded-xl">
            <TabsTrigger
              value="calendar"
              className="flex items-center justify-center py-3 text-empowerpurple-dark data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
            >
              <CalendarClock size={18} className="mr-2" /> Calendar
            </TabsTrigger>
            <TabsTrigger
              value="predictions"
              className="flex items-center justify-center py-3 text-empowerpurple-dark data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
            >
              <Sparkles size={18} className="mr-2" /> Predictions
            </TabsTrigger>
            <TabsTrigger
              value="insights"
              className="flex items-center justify-center py-3 text-empowerpurple-dark data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
            >
           
            </TabsTrigger>
            <TabsTrigger
              value="symptoms"
              className="flex items-center justify-center py-3 text-empowerpurple-dark data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
            >
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <motion.div variants={staggerChildren} initial="hidden" animate="visible">
            <TabsContent value="calendar" className="mt-0">
              <motion.div variants={fadeInUp}>
                <CycleTracker />
              </motion.div>
            </TabsContent>

            <TabsContent value="predictions" className="mt-0">
              <motion.div variants={fadeInUp}>
                <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <CardHeader className="bg-empowerpink-light/20">
                    <CardTitle className="text-xl font-display font-medium text-empowerpurple-dark flex items-center">
                      <Sparkles size={20} className="mr-2" /> Cycle Predictions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                      alt="Cycle Predictions Placeholder"
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <p className="text-muted-foreground mb-4">
                      Unlock personalized predictions after logging your cycle for two months.
                    </p>
                    <Button className="bg-empowerpink-dark hover:bg-empowerpink text-white">
                      Start Logging
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="insights" className="mt-0">
              <motion.div variants={fadeInUp}>
                <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <CardHeader className="bg-empowerpurple-dark/10">
                    <CardTitle className="text-xl font-display font-medium text-empowerpurple-dark flex items-center">
                      <LineChart size={20} className="mr-2" /> Cycle Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <img
                      src="https://cdn.pixabay.com/photo/2018/01/15/08/36/analytics-3083628_1280.jpg"
                      alt="Cycle Insights Placeholder"
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <p className="text-muted-foreground mb-4">
                      Gain deeper insights into your cycle patterns after two months of data.
                    </p>
                    <Button className="bg-empowerpink-dark hover:bg-empowerpink text-white">
                      Log Your Cycle
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="symptoms" className="mt-0">
              <motion.div variants={fadeInUp}>
                <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <CardHeader className="bg-empowerpink-light/20">
                    <CardTitle className="text-xl font-display font-medium text-empowerpurple-dark flex items-center">
                      <Smile size={20} className="mr-2" /> Symptom Tracker
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <img
                      src="https://images.pexels.com/photos/3755927/pexels-photo-3755927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Symptom Tracker Placeholder"
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <p className="text-muted-foreground mb-4">
                      Track your symptoms to understand your body better—start today!
                    </p>
                    <Button className="bg-empowerpink-dark hover:bg-empowerpink text-white">
                      Add Symptoms
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Tracker;