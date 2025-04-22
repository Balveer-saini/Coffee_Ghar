import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Coffee, ThumbsUp, ThumbsDown } from 'lucide-react';

const Feedback = () => {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    experience: '',
    recommendation: '',
    improvements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', { ...formData, rating });
    alert('Thank you for your valuable feedback!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      feedback: '',
      experience: '',
      recommendation: '',
      improvements: ''
    });
    setRating(0);
  };

  return (
    <div className="min-h-screen pt-16 bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <MessageSquare size={48} className="text-amber-700" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Share Your Experience</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your feedback helps us improve our coffee recommendations and service. Let us know how we're doing!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating Section */}
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-4">How would you rate your overall experience?</label>
                <div className="flex items-center justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none"
                    >
                      <Star
                        size={32}
                        className={`${
                          star <= (hoveredRating || rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
              </div>

              {/* Experience Details */}
              <div>
                <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">
                  How was your experience with our zodiac-based recommendations?
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                >
                  <option value="">Select your experience</option>
                  <option value="excellent">Excellent - Perfect recommendations</option>
                  <option value="good">Good - Mostly accurate</option>
                  <option value="fair">Fair - Somewhat accurate</option>
                  <option value="poor">Poor - Needs improvement</option>
                </select>
              </div>

              {/* Recommendation Accuracy */}
              <div>
                <label htmlFor="recommendation" className="block text-gray-700 font-medium mb-2">
                  Did our mood detection feature enhance your coffee recommendations?
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="recommendation"
                      value="yes"
                      checked={formData.recommendation === 'yes'}
                      onChange={handleChange}
                      className="form-radio text-amber-700"
                    />
                    <span className="text-gray-700 flex items-center">
                      <ThumbsUp size={18} className="mr-1" /> Yes
                    </span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="recommendation"
                      value="no"
                      checked={formData.recommendation === 'no'}
                      onChange={handleChange}
                      className="form-radio text-amber-700"
                    />
                    <span className="text-gray-700 flex items-center">
                      <ThumbsDown size={18} className="mr-1" /> No
                    </span>
                  </label>
                </div>
              </div>

              {/* Detailed Feedback */}
              <div>
                <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
                  Share your detailed feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Tell us what you loved and what we can improve..."
                  required
                ></textarea>
              </div>

              {/* Improvements */}
              <div>
                <label htmlFor="improvements" className="block text-gray-700 font-medium mb-2">
                  What features would you like to see added or improved?
                </label>
                <textarea
                  id="improvements"
                  name="improvements"
                  value={formData.improvements}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your suggestions for improvement..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors flex items-center space-x-2"
                >
                  <Coffee size={20} />
                  <span>Submit Feedback</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feedback;