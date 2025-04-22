import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import CoffeeCard from '../components/CoffeeCard';
import coffeeData, { Coffee } from '../data/coffeeData';

const Favorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [favoriteCoffees, setFavoriteCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      const parsedFavorites = JSON.parse(savedFavorites);
      setFavorites(parsedFavorites);
      
      // Filter coffee data to get only favorites
      const filteredCoffees = coffeeData.filter(coffee => 
        parsedFavorites.includes(coffee.id)
      );
      setFavoriteCoffees(filteredCoffees);
    }
  }, []);

  const toggleFavorite = (id: number) => {
    const newFavorites = favorites.filter(favId => favId !== id);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    
    // Update the displayed favorites
    setFavoriteCoffees(prevFavorites => 
      prevFavorites.filter(coffee => coffee.id !== id)
    );
  };

  return (
    <div className="min-h-screen pt-16 bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Heart size={36} className="text-red-500 fill-red-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">My Favorite Coffees</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your personalized collection of favorite coffee recommendations.
          </p>
        </div>

        {favoriteCoffees.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteCoffees.map((coffee, index) => (
              <motion.div
                key={coffee.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CoffeeCard
                  id={coffee.id}
                  name={coffee.name}
                  description={coffee.description}
                  image={coffee.image}
                  price={coffee.price}
                  zodiacSign={coffee.zodiacSigns[0]}
                  isFavorite={true}
                  onToggleFavorite={toggleFavorite}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <Heart size={48} className="mx-auto text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">No Favorites Yet</h3>
            <p className="text-gray-600 mb-6">
              You haven't added any coffees to your favorites list yet.
            </p>
            <a 
              href="/services" 
              className="px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors inline-block"
            >
              Discover Coffees
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;