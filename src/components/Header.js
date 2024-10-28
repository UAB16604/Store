import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSpring, animated } from '@react-spring/web';
import { Search, ShoppingCart, Heart, User } from 'lucide-react';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const logoProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchTerm}`);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <animated.h1 style={logoProps} className="text-3xl font-bold mb-4 md:mb-0">
          <Link to="/" className="hover:text-gray-200 transition-colors">Store</Link>
        </animated.h1>
        <nav className="flex items-center space-x-6">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="py-2 px-4 pr-10 rounded-full bg-white bg-opacity-20 focus:bg-opacity-100 focus:text-gray-900 transition-all"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="w-5 h-5" />
            </button>
          </form>
          <Link to="/cart" className="hover:text-gray-200 transition-colors flex items-center">
            <ShoppingCart className="w-6 h-6 mr-1" />
            <span className="bg-red-500 rounded-full px-2 py-1 text-xs">{cartItems.length}</span>
          </Link>
          <Link to="/wishlist" className="hover:text-gray-200 transition-colors">
            <Heart className="w-6 h-6" />
          </Link>
          {isAuthenticated ? (
            <Link to="/profile" className="hover:text-gray-200 transition-colors">
              <User className="w-6 h-6" />
            </Link>
          ) : (
            <Link to="/login" className="hover:text-gray-200 transition-colors">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;