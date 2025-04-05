import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, ChevronRight } from 'lucide-react';

const RecommendedProducts = () => {
  return (
    <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <ShoppingBag size={22} className="text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Recommended for You</h3>
          </div>
          <Button
            variant="link"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm p-0"
          >
            See All <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>

        {/* Scrollable Product Row */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-snap-x px-1">
          {products.map((product) => (
            <div key={product.name} className="snap-start shrink-0">
              <ProductItem {...product} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const products = [
  {
    name: 'Organic Cotton Pads',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80',
    price: 9.99,
    rating: 4.5,
    reviews: 128,
    tag: 'Eco-Friendly'
  },
  {
    name: 'Period Pain Relief Patches',
    image: 'https://images.unsplash.com/photo-1580870069867-74c64675f28b?auto=format&fit=crop&w=300&q=80',
    price: 14.5,
    rating: 4.7,
    reviews: 89,
    tag: 'Top Rated'
  },
  {
    name: 'Monthly Subscription Box',
    image: 'https://images.unsplash.com/photo-1523275339254-cc177407cefc?auto=format&fit=crop&w=300&q=80',
    price: 29.99,
    rating: 4.8,
    reviews: 245,
    tag: 'Best Seller',
    isFeatured: true,
    oldPrice: 34.99
  }
];

type ProductItemProps = {
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  tag?: string;
  isFeatured?: boolean;
  oldPrice?: number;
};

const ProductItem = ({ name, image, price, rating, reviews, tag, isFeatured, oldPrice }: ProductItemProps) => {
  return (
    <div className={`w-72 bg-white rounded-xl border border-gray-200 p-4 transition-all hover:shadow-md`}>
      <div className="relative mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-lg border border-gray-100"
        />
        {isFeatured && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h4 className="text-sm font-semibold text-gray-900 truncate">{name}</h4>
          {tag && (
            <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-md font-medium">
              {tag}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1">
          <Star size={16} className="text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium text-gray-700">{rating}</span>
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">${oldPrice.toFixed(2)}</span>
          )}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="mt-2 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white rounded-md font-medium"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default RecommendedProducts;
