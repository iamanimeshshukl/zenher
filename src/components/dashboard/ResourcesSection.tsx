
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, ArrowRight } from 'lucide-react';

const ResourcesSection = () => {
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
  
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-display font-medium">Educational Resources</h3>
          <Button variant="ghost" size="sm" className="text-empowerpink hover:text-empowerpink-dark">
            View All
          </Button>
        </div>
        
        <div className="space-y-3">
          {resources.map((resource) => (
            <ResourceItem 
              key={resource.id}
              title={resource.title}
              description={resource.description}
              icon={resource.icon}
            />
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
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted group cursor-pointer">
      <div className="text-2xl">{icon}</div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
      </div>
      
      <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
    </div>
  );
};

export default ResourcesSection;
