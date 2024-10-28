import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/slices/cartSlice';
import { useSpring, animated } from '@react-spring/web';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const cardProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
  });

  return (
    <animated.div style={cardProps} className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        </Link>
        <p className="text-gray-600 mb-2">PKR {product.price.toLocaleString()}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </animated.div>
  );
};

export default ProductCard;