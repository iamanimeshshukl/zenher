import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const resources = [
  {
    id: 1,
    title: 'Understanding Your Cycle Phases',
    description: 'Learn about the four main phases of your menstrual cycle and how they affect your body.',
    icon: '🌙'
  },
  {
    id: 2,
    title: 'Managing PMS Symptoms Naturally',
    description: 'Discover natural remedies and lifestyle changes to help reduce PMS symptoms.',
    icon: '🌿'
  },
  {
    id: 3,
    title: 'Nutrition Tips for Hormone Balance',
    description: 'Foods that can help support hormone balance throughout your cycle.',
    icon: '🥗'
  }
];

const ResourcesSection = () => {
  return (
    <Card className="shadow-xl border-none bg-gradient-to-br from-white to-pink-50">
      <CardContent className="py-6 px-4 md:px-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-display text-lg font-semibold text-gray-900">Educational Resources</h3>
          <Button
            variant="ghost"
            size="sm"
            className="text-empowerpink hover:text-empowerpink-dark transition-colors"
          >
            View All
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ResourceItem
                title={resource.title}
                description={resource.description}
                icon={resource.icon}
              />
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

type ResourceItemProps = {
  title: string;
  description: string;
  icon: string;
};

const ResourceItem = ({ title, description, icon }: ResourceItemProps) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all group cursor-pointer">
      <div className="text-3xl">{icon}</div>

      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-gray-900">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
      </div>

      <ArrowRight
        size={18}
        className="text-muted-foreground group-hover:text-empowerpink transition-colors mt-1"
      />
    </div>
  );
};

export default ResourcesSection;
