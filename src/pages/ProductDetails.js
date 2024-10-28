import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { addToWishlist } from '../store/slices/wishlistSlice';
import { useSpring, animated } from '@react-spring/web';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => 
    state.products.items.find(item => item.id === parseInt(id))
  );

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  if (!product) {
    return <div className="text-center">Product not found</div>;
  }

  const randomOffer = Math.random() > 0.5 ? 'Free shipping on orders over PKR 10,000!' : '10% off on your first purchase!';

  const reviews = [
    { id: 1, author: 'Ahmed K.', rating: 5, comment: 'Excellent product, highly recommended!' },
    { id: 2, author: 'Fatima S.', rating: 4, comment: 'Good quality, but a bit pricey.' },
    { id: 3, author: 'Muhammad R.', rating: 5, comment: 'Exactly what I was looking for.' },
  ];

  return (
    <animated.div style={fadeIn} className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">PKR {product.price.toLocaleString()}</p>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className={`${i < Math.round(product.rating.rate) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
            <span className="ml-2 text-gray-600">({product.rating.count} reviews)</span>
          </div>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="flex items-center bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <ShoppingCart size={20} className="mr-2" />
              Add to Cart
            </button>
            <button
              onClick={() => dispatch(addToWishlist(product))}
              className="flex items-center bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              <Heart size={20} className="mr-2" />
              Add to Wishlist
            </button>
          </div>
          <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
            <p className="font-semibold">{randomOffer}</p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          {reviews.map(review => (
            <div key={review.id} className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2">{review.author}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default ProductDetails;