import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Store</h3>
            <p className="text-sm mb-4">We offer a wide range of high-quality products including electronics, jewelry, clothing, and cosmetics. Our mission is to provide the best shopping experience for our customers.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/uzi809/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://x.com/UAB16604" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.instagram.com/uxair.69/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/uzair-ahmed-b-57427b25b/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-gray-300 transition-colors">Products</Link></li>
              <li><Link to="/cart" className="hover:text-gray-300 transition-colors">Cart</Link></li>
              <li><Link to="/wishlist" className="hover:text-gray-300 transition-colors">Wishlist</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-gray-300 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-gray-300 transition-colors">Shipping Information</Link></li>
              <li><Link to="/returns" className="hover:text-gray-300 transition-colors">Returns & Exchanges</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@store.com" className="hover:text-gray-300 transition-colors">buzair809@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-gray-300 transition-colors">+92 306-0557584</a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Rawalpindi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-500 text-center">
          <p>&copy; 2024 Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;