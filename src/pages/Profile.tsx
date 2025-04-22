import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Package, Coffee, Settings, LogOut, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Order {
  id: number;
  items: Array<{
    id: number;
    name: string;
    price: string;
    image: string;
    quantity: number;
  }>;
  total: number;
  date: string;
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [previousOrders, setPreviousOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('previousOrders') || '[]');
    setPreviousOrders(orders);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleReorder = (order: Order) => {
    // Convert order items to cart format
    const cartItems = order.items.map(item => ({
      coffee: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        description: '' // Since we don't store description in orders
      },
      quantity: item.quantity
    }));

    // Save to cart
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    // Trigger cart update
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    
    // Navigate to cart
    navigate('/cart');
  };

  return (
    <div className="min-h-screen pt-16 bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Profile Header */}
            <div className="bg-amber-700 p-6 sm:p-10">
              <div className="flex items-center space-x-6">
                <div className="bg-amber-600 p-4 rounded-full">
                  <User size={48} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">John Doe</h1>
                  <p className="text-amber-200">john.doe@example.com</p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`px-6 py-4 text-sm font-medium flex items-center space-x-2 ${
                    activeTab === 'orders'
                      ? 'border-b-2 border-amber-700 text-amber-700'
                      : 'text-gray-500 hover:text-amber-700'
                  }`}
                >
                  <Package size={20} />
                  <span>Previous Orders</span>
                </button>
                <button
                  onClick={() => setActiveTab('preferences')}
                  className={`px-6 py-4 text-sm font-medium flex items-center space-x-2 ${
                    activeTab === 'preferences'
                      ? 'border-b-2 border-amber-700 text-amber-700'
                      : 'text-gray-500 hover:text-amber-700'
                  }`}
                >
                  <Coffee size={20} />
                  <span>Coffee Preferences</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`px-6 py-4 text-sm font-medium flex items-center space-x-2 ${
                    activeTab === 'settings'
                      ? 'border-b-2 border-amber-700 text-amber-700'
                      : 'text-gray-500 hover:text-amber-700'
                  }`}
                >
                  <Settings size={20} />
                  <span>Account Settings</span>
                </button>
              </nav>
            </div>

            {/* Content Sections */}
            <div className="p-6">
              {activeTab === 'orders' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl font-bold text-amber-900 mb-6">Previous Orders</h2>
                  {previousOrders.length > 0 ? (
                    <div className="space-y-6">
                      {previousOrders.map((order) => (
                        <div key={order.id} className="bg-amber-50 rounded-lg p-6">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-sm text-gray-600">
                              Order Date: {formatDate(order.date)}
                            </span>
                            <span className="text-amber-700 font-bold">
                              Total: ₹{order.total.toFixed(2)}
                            </span>
                          </div>
                          <div className="space-y-4">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex items-center space-x-4">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-16 h-16 object-cover rounded-lg"
                                />
                                <div>
                                  <h3 className="font-medium text-amber-900">{item.name}</h3>
                                  <p className="text-sm text-gray-600">
                                    Quantity: {item.quantity} × {item.price}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 flex justify-end">
                            <button
                              onClick={() => handleReorder(order)}
                              className="flex items-center space-x-2 px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors"
                            >
                              <RefreshCw size={18} />
                              <span>Place Order Again</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Package size={48} className="mx-auto text-gray-300 mb-4" />
                      <p className="text-gray-600">No previous orders found.</p>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'preferences' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <Coffee size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-600">Coffee preferences coming soon!</p>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-amber-900 mb-6">Account Settings</h2>
                  <div className="space-y-4">
                    <button className="w-full px-4 py-3 text-left bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors flex items-center space-x-3">
                      <User size={20} className="text-amber-700" />
                      <span>Edit Profile</span>
                    </button>
                    <button className="w-full px-4 py-3 text-left bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors flex items-center space-x-3">
                      <Settings size={20} className="text-amber-700" />
                      <span>Preferences</span>
                    </button>
                    <button className="w-full px-4 py-3 text-left bg-red-50 rounded-lg hover:bg-red-100 transition-colors flex items-center space-x-3 text-red-600">
                      <LogOut size={20} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;