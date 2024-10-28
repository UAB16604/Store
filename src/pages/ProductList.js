import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchProducts } from '../store/slices/productSlice';
import ProductCard from '../components/ProductCard';
import { useSpring, animated } from '@react-spring/web';

const ProductList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { items: products, status, error } = useSelector(state => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  useEffect(() => {
    if (status === 

 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search');
    const category = searchParams.get('category');

    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }

    setFilteredProducts(filtered);
  }, [products, location.search]);

  if (status === 'loading') {
    return <div className="text-center">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <animated.div style={fadeIn}>
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </animated.div>
  );
};

export default ProductList;