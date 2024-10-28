import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../store/slices/wishlistSlice';
import { addToCart } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
        <Link to="/products" className="text-blue-500 hover:underline">Discover products</Link>
      </div>
    );
  }

  return (
    <animated.div style={fadeIn}>
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    dispatch(addToCart(item));
                    dispatch(removeFromWishlist(item.id));
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Wishlist;