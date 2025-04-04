
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const RecommendedProducts = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-display font-medium">Recommended for You</h3>
          <Button variant="ghost" size="sm" className="text-empowerpink hover:text-empowerpink-dark">
            View All
          </Button>
        </div>
        
        <div className="space-y-3">
          <ProductItem 
            name="Organic Cotton Pads"
            image="/placeholder.svg"
            price={9.99}
          />
          <ProductItem 
            name="Period Pain Relief Patches"
            image="/placeholder.svg"
            price={14.50}
          />
          <ProductItem 
            name="Monthly Subscription Box"
            image="/placeholder.svg"
            price={29.99}
            badge="Best Value"
          />
        </div>
      </CardContent>
    </Card>
  );
};

type ProductItemProps = {
  name: string;
  image: string;
  price: number;
  badge?: string;
};

const ProductItem = ({ name, image, price, badge }: ProductItemProps) => {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted group cursor-pointer">
      <img src={image} alt={name} className="w-12 h-12 object-cover rounded-md" />
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start">
          <h4 className="font-medium text-sm truncate">{name}</h4>
          {badge && (
            <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-empowerpink/20 text-empowerpink-dark">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm font-medium">${price.toFixed(2)}</p>
      </div>
      
      <ChevronRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
    </div>
  );
};

export default RecommendedProducts;
