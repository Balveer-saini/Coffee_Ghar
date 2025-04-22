import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Coffee, Star, User, MessageSquare, Settings } from 'lucide-react';

const Help = () => {
  const faqs = [
    {
      question: "How does the zodiac-based recommendation work?",
      answer: "Our system analyzes your zodiac sign's characteristics and matches them with coffee profiles that best suit your personality traits and preferences. We consider factors like flavor intensity, brewing methods, and complementary ingredients."
    },
    {
      question: "Is the facial mood detection feature safe?",
      answer: "Yes, our facial mood detection is completely safe and private. We don't store any images - they're only used temporarily to analyze your current mood and provide personalized coffee recommendations."
    },
    {
      question: "Can I modify my coffee preferences?",
      answer: "Absolutely! Visit our Custom Coffee page to personalize every aspect of your coffee, from milk type to roast level. You can also save your preferences for future orders."
    },
    {
      question: "How do I save my favorite coffees?",
      answer: "Click the heart icon on any coffee card to add it to your favorites. You can view all your saved coffees in the My Favorites section of your account."
    }
  ];

  const categories = [
    {
      icon: <Coffee size={24} />,
      title: "Coffee Basics",
      description: "Learn about different coffee types, brewing methods, and terminology."
    },
    {
      icon: <Star size={24} />,
      title: "Zodiac Matching",
      description: "Understand how we match coffee profiles to zodiac signs."
    },
    {
      icon: <User size={24} />, title: "Account Help",
      description: "Get help with account settings, preferences, and profile management."
    },
    {
      icon: <Settings size={24} />,
      title: "Customization Guide",
      description: "Tips for personalizing your coffee to perfection."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <HelpCircle size={48} className="text-amber-700" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Help Center</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions and learn how to make the most of your Zodiac Brew experience.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 pl-12"
              />
              <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-700 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-amber-900">{category.title}</h3>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-amber-900 mb-3 flex items-center">
                      <HelpCircle size={20} className="text-amber-700 mr-2" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Still need help? We're here for you!</p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors"
            >
              <MessageSquare size={20} className="mr-2" />
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;