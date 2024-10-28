import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const categories = [
  { name: 'Electronics', image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg' },
  { name: 'Jewelry', image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg' },
  { name: 'Clothing', image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' },
  { name: 'Cosmetics', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlwc3RpY2t8ZW58MHx8MHx8fDA%3D' },
];

const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Store</h1>
      <p className="text-xl mb-12">Discover amazing products in our categories</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products?category=${category.name.toLowerCase()}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
              <img src={category.image} alt={category.name} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">{category.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </animated.div>
  );
};

export default Home;