import React from 'react';
import Layout from '@/components/Layout';
import CycleSummary from '@/components/dashboard/CycleSummary';
import RecommendedProducts from '@/components/dashboard/RecommendedProducts';
import UpcomingConsultations from '@/components/dashboard/UpcomingConsultations';
import ResourcesSection from '@/components/dashboard/ResourcesSection';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
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

// Articles with Free Stock Images
const articles = [
  {
    id: 1,
    title: "Understanding Your Menstrual Cycle",
    excerpt: "Learn the phases of your cycle and how they affect your body and mind.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    // Source: Unsplash, Photo by Thought Catalog
    link: "/articles/understanding-your-cycle",
  },
  {
    id: 2,
    title: "Nutrition Tips for Hormonal Balance",
    excerpt: "Discover foods that support your hormonal health throughout your cycle.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // Source: Pexels, Photo by Ella Olsson
    link: "/articles/nutrition-tips",
  },
  {
    id: 3,
    title: "Managing PMS Naturally",
    excerpt: "Effective strategies to ease premenstrual symptoms without medication.",
    image: "data:image/jpeg;base64,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",
    // Source: Pixabay, Photo by StockSnap
    link: "/articles/managing-pms",
  },
];

const Index = () => {
  return (
    <Layout>
      <div className="relative overflow-hidden bg-white min-h-screen">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 4, ease: 'easeInOut' }}
            className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-empowerpink blur-3xl rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 4, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-empowerpurple-dark blur-3xl rounded-full"
          />
          <svg
            className="absolute bottom-0 left-0 w-full text-empowerpink-light opacity-10"
            viewBox="0 0 1440 320"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,224L60,202.7C120,181,240,139,360,128C480,117,600,139,720,149.3C840,160,960,160,1080,149.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 container mx-auto py-16 px-4 md:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeInUp} className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold font-display text-empowerpurple-dark tracking-tight mb-4">
              Welcome to <span className="text-empowerpink-dark">ZenHer</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Track your cycle, connect with experts, and discover personalized wellness solutions—all in one place.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button className="bg-empowerpink-dark hover:bg-empowerpink text-white" size="lg">
                Start Tracking
              </Button>
              <Button variant="outline" className="border-empowerpurple-dark text-empowerpurple-dark" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div variants={fadeInUp} custom={1} initial="hidden" animate="visible">
              <CycleSummary />
            </motion.div>
            <motion.div
              className="space-y-8 lg:col-span-2"
              variants={fadeInUp}
              custom={2}
              initial="hidden"
              animate="visible"
            >
              <UpcomingConsultations />
              <RecommendedProducts />
            </motion.div>
          </div>

          {/* Articles Section */}
          <motion.section
            className="mb-16"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-empowerpurple-dark">Explore Our Articles</h2>
              <Button variant="link" className="text-empowerpink-dark">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <motion.div key={article.id} variants={fadeInUp} custom={index}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover rounded-t-md"
                      />
                    </CardHeader>
                    <CardContent className="pt-4">
                      <CardTitle className="text-xl font-semibold text-empowerpurple-dark">
                        {article.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2 line-clamp-2">{article.excerpt}</p>
                      <Button variant="link" className="mt-4 p-0 text-empowerpink-dark">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Resources Section */}
          <motion.div variants={fadeInUp} custom={3} initial="hidden" animate="visible">
            <ResourcesSection />
          </motion.div>

          {/* Call to Action */}
       
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;