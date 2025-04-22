import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Star } from 'lucide-react';
import CoffeeCard from '../components/CoffeeCard';
import ContactForm from '../components/ContactForm';
import coffeeData from '../data/coffeeData';

const Home = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [recentPurchases, setRecentPurchases] = useState<typeof coffeeData>([]);

  useEffect(() => {
    // Simulate loading recent purchases from a database
    // In a real app, this would come from an API call
    const randomCoffees = [...coffeeData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    
    setRecentPurchases(randomCoffees);
    
    // Simulate loading favorites from localStorage
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (id: number) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-amber-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" 
            alt="Coffee background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <Coffee size={48} className="text-amber-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover Your Perfect Coffee Match
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Let the stars guide your coffee journey. Find your perfect brew based on your zodiac sign and current mood.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#recent-purchases" 
                className="px-6 py-3 bg-amber-500 text-amber-900 font-bold rounded-md hover:bg-amber-400 transition-colors"
              >
                Explore Coffees
              </a>
              <a 
                href="/services" 
                className="px-6 py-3 bg-transparent border-2 border-amber-500 text-amber-100 font-bold rounded-md hover:bg-amber-800 transition-colors"
              >
                Get Recommendations
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Purchases Section */}
      <section id="recent-purchases" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Your Recent Favorites</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Based on your previous orders and preferences, we think you'll love these coffee selections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentPurchases.map(coffee => (
              <motion.div
                key={coffee.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CoffeeCard
                  id={coffee.id}
                  name={coffee.name}
                  description={coffee.description}
                  image={coffee.image}
                  price={coffee.price}
                  zodiacSign={coffee.zodiacSigns[0]}
                  isFavorite={favorites.includes(coffee.id)}
                  onToggleFavorite={toggleFavorite}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Why Zodiac Brew?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine astrology, mood analysis, and coffee expertise to create a truly personalized experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-amber-50 p-8 rounded-lg shadow-md"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star size={28} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Zodiac-Based Recommendations</h3>
              <p className="text-gray-600">
                Our coffee blends are specially crafted to match the personality traits and preferences of each zodiac sign.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-amber-50 p-8 rounded-lg shadow-md"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Coffee size={28} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Premium Coffee Selection</h3>
              <p className="text-gray-600">
                We source our beans from the finest coffee farms around the world, ensuring exceptional quality in every cup.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-amber-50 p-8 rounded-lg shadow-md"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-700">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Mood Detection Technology</h3>
              <p className="text-gray-600">
                Our advanced facial recognition system analyzes your current mood to recommend the perfect coffee for your emotional state.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Home;