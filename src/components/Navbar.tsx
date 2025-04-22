import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Coffee, Menu, X, ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const updateCartCount = () => {
    try {
      const cartData = localStorage.getItem('cart');
      if (cartData) {
        const cart = JSON.parse(cartData);
        setCartCount(cart.length);
      } else {
        setCartCount(0);
      }
    } catch (error) {
      console.error('Error updating cart count:', error);
      setCartCount(0);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Update cart count on mount
    updateCartCount();

    // Listen for cart updates
    const handleCartUpdate = () => {
      updateCartCount();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('cartUpdated', handleCartUpdate);
    window.addEventListener('storage', handleCartUpdate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('storage', handleCartUpdate);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowProfileMenu(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee size={28} className="text-amber-700" />
            <span className="text-xl font-bold text-amber-900">Zodiac Brew</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`font-medium transition-colors ${isActive('/') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-600'}`}>
              Home
            </Link>
            <Link to="/services" className={`font-medium transition-colors ${isActive('/services') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-600'}`}>
              Services
            </Link>
            <Link to="/favorites" className={`font-medium transition-colors ${isActive('/favorites') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-600'}`}>
              My Favorites
            </Link>
            <Link to="/about" className={`font-medium transition-colors ${isActive('/about') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-600'}`}>
              About Us
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} className="text-gray-700 hover:text-amber-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center text-white">
                    {user?.fullName?.charAt(0).toUpperCase() || <User size={20} />}
                  </div>
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <div className="px-4 py-2 border-b">
                      <p className="text-sm font-medium text-gray-900">{user?.fullName}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      Your Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors">
                Login | Sign Up
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="focus:outline-none"
              >
                <div className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center text-white">
                  {user?.fullName?.charAt(0).toUpperCase() || <User size={20} />}
                </div>
              </button>
            ) : (
              <Link to="/profile">
                <User size={24} className="text-gray-700" />
              </Link>
            )}
            <button className="text-gray-700" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={`font-medium transition-colors ${isActive('/') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-600'}`} onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/services" className={`font-medium transition-colors ${isActive('/services') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-600'}`} onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/favorites" className={`font-medium transition-colors ${isActive('/favorites') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-600'}`} onClick={toggleMenu}>
                My Favorites
              </Link>
              <Link to="/about" className={`font-medium transition-colors ${isActive('/about') ? 'text-amber-700' : 'text-gray-700 hover:text-amber-600'}`} onClick={toggleMenu}>
                About Us
              </Link>
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="font-medium text-gray-700 hover:text-amber-600" onClick={toggleMenu}>
                    Your Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="text-left font-medium text-red-600 hover:text-red-700"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link to="/login" className="px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors inline-block" onClick={toggleMenu}>
                  Login | Sign Up
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Mobile Profile Menu */}
        {showProfileMenu && isAuthenticated && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg mt-2">
            <div className="p-4 border-b">
              <p className="font-medium text-gray-900">{user?.fullName}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
            <Link
              to="/profile"
              className="block p-4 text-gray-700 hover:bg-amber-50"
              onClick={() => {
                setShowProfileMenu(false);
                toggleMenu();
              }}
            >
              Your Profile
            </Link>
            <button
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
              className="block w-full text-left p-4 text-red-600 hover:bg-red-50"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;