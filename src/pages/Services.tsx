import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ZodiacSelector from '../components/ZodiacSelector';
import FacialRecognition from '../components/FacialRecognition';
import CoffeeCard from '../components/CoffeeCard';
import coffeeData, { Coffee } from '../data/coffeeData';

const Services = () => {
  const [selectedZodiacSign, setSelectedZodiacSign] = useState<string | null>(null);
  const [detectedMood, setDetectedMood] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<Coffee[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    if (selectedZodiacSign || detectedMood) {
      let filtered = [...coffeeData];
      
      if (selectedZodiacSign) {
        filtered = filtered.filter(coffee => 
          coffee.zodiacSigns.includes(selectedZodiacSign)
        );
      }
      
      if (detectedMood) {
        filtered = filtered.filter(coffee => 
          coffee.moods.includes(detectedMood.toLowerCase())
        );
      }
      
      // If no matches found, provide some default recommendations
      if (filtered.length === 0) {
        filtered = coffeeData.slice(0, 3);
      }
      
      setRecommendations(filtered);
    } else {
      setRecommendations([]);
    }
  }, [selectedZodiacSign, detectedMood]);

  const handleSelectZodiacSign = (sign: string) => {
    setSelectedZodiacSign(sign);
  };

  const handleMoodDetected = (mood: string) => {
    setDetectedMood(mood);
  };

  const toggleFavorite = (id: number) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <div className="min-h-screen pt-16 bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Coffee Recommendation Service</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let us find your perfect coffee match based on your zodiac sign and current mood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ZodiacSelector 
              selectedSign={selectedZodiacSign} 
              onSelectSign={handleSelectZodiacSign} 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FacialRecognition onMoodDetected={handleMoodDetected} />
          </motion.div>
        </div>

        {recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Your Personalized Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map(coffee => (
                <CoffeeCard
                  key={coffee.id}
                  id={coffee.id}
                  name={coffee.name}
                  description={coffee.description}
                  image={coffee.image}
                  price={coffee.price}
                  zodiacSign={coffee.zodiacSigns[0]}
                  isFavorite={favorites.includes(coffee.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </motion.div>
        )}

        {selectedZodiacSign && detectedMood && recommendations.length === 0 && (
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">
              We're brewing up some recommendations based on your selections. Please wait a moment...
            </p>
          </div>
        )}

        {!selectedZodiacSign && !detectedMood && (
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">
              Please select your zodiac sign or use our mood detection feature to get personalized coffee recommendations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;