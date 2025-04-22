import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Star, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-4">
              <Coffee size={48} className="text-amber-700" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-amber-900 mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Zodiac Brew combines the ancient wisdom of astrology with the art of coffee making.
            </p>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
              alt="Coffee beans" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Zodiac Brew, we believe that coffee is more than just a beverage—it's an experience that should be tailored to your unique personality and mood. Our mission is to create personalized coffee recommendations that align with your zodiac sign and emotional state.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2023 by a team of coffee enthusiasts and astrology experts, we've spent years researching the connection between taste preferences and astrological signs. Our innovative approach combines traditional coffee craftsmanship with modern technology to deliver a truly unique coffee experience.
            </p>
            <div className="flex items-center text-amber-700">
              <Star className="mr-2" />
              <span className="font-medium">Personalized recommendations based on your zodiac sign</span>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Zodiac Brew.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Coffee size={28} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We source only the finest coffee beans from sustainable farms around the world, ensuring exceptional quality in every cup.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star size={28} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Personalization</h3>
              <p className="text-gray-600">
                We believe that everyone deserves a coffee experience tailored to their unique personality and preferences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award size={28} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new technologies and methods to enhance the coffee recommendation experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Users size={36} className="text-amber-700" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind Zodiac Brew who make our vision a reality.
            </p>
          </div>
          
          <div className="text-center">
            <Link 
              to="/founders" 
              className="px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors inline-block"
            >
              View Our Founders
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;