import React from 'react';
import { Coffee, Heart, Phone, HelpCircle, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee size={24} />
              <span className="text-xl font-bold">Zodiac Brew</span>
            </div>
            <p className="text-amber-200">Discover your perfect coffee match based on your zodiac sign and mood.</p>
            <p className="text-sm">Copyright &copy; 2025 Zodiac Brew. All rights reserved.</p>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-4">
              <span>Designed with</span>
              <Heart size={18} className="fill-red-500 text-red-500" />
              <span>by Zodiac Brew Team</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link to="/founders" className="text-amber-200 hover:text-white transition-colors">
                Our Founders
              </Link>
              <Link to="/about" className="text-amber-200 hover:text-white transition-colors">
                Our Story
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <HelpCircle size={18} />
                <span>Help & Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <span>contact@zodiacbrew.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} />
                <span>123 Coffee Street, Brew City</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;