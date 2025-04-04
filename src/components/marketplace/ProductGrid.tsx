
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';

// Mock data - in a real app this would come from an API
const products = [
  {
    id: 1,
    name: 'Organic Cotton Pads',
    price: 9.99,
    image: '/placeholder.svg',
    badge: 'Organic',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Menstrual Cup',
    price: 24.99,
    image: '/placeholder.svg',
    badge: 'Eco-Friendly',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Period Panties',
    price: 32.99,
    image: '/placeholder.svg',
    badge: 'Bestseller',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Menstrual Pain Relief',
    price: 15.50,
    image: '/placeholder.svg',
    badge: 'Natural',
    rating: 4.3,
  },
  {
    id: 5,
    name: 'Tampons (Pack of 24)',
    price: 8.99,
    image: '/placeholder.svg',
    badge: 'Regular',
    rating: 4.4,
  },
  {
    id: 6,
    name: 'Reusable Cloth Pads',
    price: 18.99,
    image: '/placeholder.svg',
    badge: 'Eco-Friendly',
    rating: 4.6,
  }
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    badge?: string;
    rating: number;
  };
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-40 object-cover"
        />
        {product.badge && (
          <Badge className="absolute top-2 left-2 bg-empowerpink hover:bg-empowerpink-dark">
            {product.badge}
          </Badge>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-empowerpink hover:text-empowerpink-dark"
        >
          <Heart size={18} />
        </Button>
      </div>
      
      <CardContent className="p-3">
        <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <div className="flex items-center text-xs text-yellow-500">
            {'★'.repeat(Math.floor(product.rating))}
            <span className="text-gray-500 ml-1">{product.rating}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-3 pt-0">
        <Button className="w-full bg-empowerpurple hover:bg-empowerpurple-dark text-xs h-8">
          <ShoppingCart size={15} className="mr-1" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductGrid;
