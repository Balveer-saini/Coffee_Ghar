import React from 'react';
import { motion } from 'framer-motion';
import { Users, Linkedin, Twitter, Mail } from 'lucide-react';
import founderData from '../data/founderData';

const Founders = () => {
  return (
    <div className="min-h-screen pt-16 bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-4">
              <Users size={36} className="text-amber-700" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Founders</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionary team behind Zodiac Brew who combined their passion for coffee and astrology.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {founderData.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">{founder.name}</h3>
                    <p className="text-amber-300">{founder.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{founder.bio}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-amber-700 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-amber-700 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-amber-700 transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founders;