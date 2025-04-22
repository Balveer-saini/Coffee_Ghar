import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our coffee recommendations or want to share your experience? 
              We'd love to hear from you!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-amber-800 p-8 text-amber-50">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8">Fill up the form and our team will get back to you within 24 hours.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-amber-200" />
                    <span>contact@zodiacbrew.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <User className="text-amber-200" />
                    <span>+91 9876543210</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MessageSquare className="text-amber-200" />
                    <span>123 Coffee Street, Brew City</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
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

                  <div className="mb-6">
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

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors flex items-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;