import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

interface CoffeeCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  zodiacSign?: string;
  price: string;
  isFavorite?: boolean;
  onToggleFavorite?: (id: number) => void;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
  id,
  name,
  description,
  image,
  zodiacSign,
  price,
  isFavorite = false,
  onToggleFavorite
}) => {
  const handleAddToCart = () => {
    try {
      const cartData = localStorage.getItem('cart');
      const existingCart = cartData ? JSON.parse(cartData) : [];
      
      const existingItemIndex = existingCart.findIndex((item: any) => item.coffee.id === id);

      if (existingItemIndex !== -1) {
        // If item exists, increment quantity
        existingCart[existingItemIndex].quantity += 1;
      } else {
        // If item doesn't exist, add it with quantity 1
        const newItem = {
          coffee: {
            id,
            name,
            description,
            image,
            price
          },
          quantity: 1
        };
        existingCart.push(newItem);
      }

      localStorage.setItem('cart', JSON.stringify(existingCart));
      
      // Dispatch custom event for cart update
      window.dispatchEvent(new CustomEvent('cartUpdated'));
      
      // Show success message
      alert('Added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {zodiacSign && (
          <div className="absolute top-4 left-4 bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium">
            {zodiacSign}
          </div>
        )}
        {onToggleFavorite && (
          <button 
            onClick={() => onToggleFavorite(id)}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md transition-colors hover:bg-amber-50"
          >
            <Heart 
              size={20} 
              className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"} 
            />
          </button>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-amber-700 font-bold">{price}</span>
          <button 
            onClick={handleAddToCart}
            className="px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors flex items-center space-x-2"
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;