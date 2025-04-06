import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const resources = [
  {
    id: 1,
    title: 'Master Your Cycle Phases',
    description: 'Explore the four key stages of your menstrual cycle and their impact on your wellbeing.',
    icon: '🌙',
    gradient: 'from-indigo-50 to-blue-100',
  },
  {
    id: 2,
    title: 'Ease PMS Naturally',
    description: 'Uncover holistic remedies and lifestyle tips to soothe PMS discomfort.',
    icon: '🌿',
    gradient: 'from-green-50 to-teal-100',
  },
  {
    id: 3,
    title: 'Nourish for Hormone Harmony',
    description: 'Learn which foods support balanced hormones throughout your cycle.',
    icon: '🥗',
    gradient: 'from-amber-50 to-orange-100',
  },
];

const ResourcesSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl md:text-3xl font-sans font-semibold text-gray-900 tracking-tight">
            Wellness Insights
          </h3>
          <Button
            variant="outline"
            size="sm"
            className="text-indigo-600 border-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 rounded-full px-4"
          >
            Explore All
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
            >
              <ResourceItem
                title={resource.title}
                description={resource.description}
                icon={resource.icon}
                gradient={resource.gradient}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

type ResourceItemProps = {
  title: string;
  description: string;
  icon: string;
  gradient: string;
};

const ResourceItem = ({ title, description, icon, gradient }: ResourceItemProps) => {
  return (
    <Card
      className={`bg-gradient-to-br ${gradient} border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden group cursor-pointer`}
    >
      <CardContent className="p-6 flex flex-col gap-4 h-full">
        <div className="text-4xl w-12 h-12 flex items-center justify-center bg-white/50 rounded-full">
          {icon}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">{title}</h4>
          <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">{description}</p>
        </div>
        <div className="mt-auto flex justify-end">
          <ArrowRight
            size={20}
            className="text-gray-500 group-hover:text-indigo-600 transition-colors duration-300"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;