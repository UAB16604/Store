import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Conversion rate (example: 1 USD = 280 PKR)
const USD_TO_PKR = 280;

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data.map(product => ({
      ...product,
      price: Math.round(product.price * USD_TO_PKR),
      category: product.category === "men's clothing" || product.category === "women's clothing" 
        ? "clothing" 
        : product.category
    }));
  }
);

const cosmeticProducts = [
  {
    id: 21,
    title: "Luxury Lipstick",
    price: 2800,
    description: "Long-lasting, moisturizing lipstick with a vibrant color payoff.",
    category: "cosmetics",
    image: "https://images.unsplash.com/photo-1617422275558-e5f616302690?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxpcHN0aWNrfGVufDB8fDB8fHww",
    rating: { rate: 4.7, count: 130 }
  },
  {
    id: 22,
    title: "Hydrating Face Serum",
    price: 5600,
    description: "Intensive hydrating serum that plumps and rejuvenates skin.",
    category: "cosmetics",
    image: "https://images.unsplash.com/photo-1636918201023-cfedef251470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEZhY2UlMjBTZXJ1bXxlbnwwfHwwfHx8MA%3D%3D",
    rating: { rate: 4.9, count: 88 }
  },
  {
    id: 23,
    title: "Volumizing Mascara",
    price: 1960,
    description: "Dramatic volume and length for your lashes without clumping.",
    category: "cosmetics",
    image: "https://images.unsplash.com/photo-1650664370914-f026578ec2a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFzY2FyYXxlbnwwfHwwfHx8MA%3D%3D",
    rating: { rate: 4.5, count: 146 }
  },
  {
    id: 24,
    title: "Nourishing Shampoo",
    price: 1400,
    description: "Gentle, nourishing shampoo for all hair types.",
    category: "cosmetics",
    image: "https://images.pexels.com/photos/14656326/pexels-photo-14656326.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: { rate: 4.6, count: 112 }
  },
  {
    id: 25,
    title: "Nail Polish Set",
    price: 3500,
    description: "Set of 5 long-lasting, chip-resistant nail polishes in trendy colors.",
    category: "cosmetics",
    image: "https://images.pexels.com/photos/12571010/pexels-photo-12571010.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: { rate: 4.8, count: 95 }
  }
];

const jewelryProducts = [
  {
    id: 26,
    title: "Diamond Engagement Ring",
    price: 280000,
    description: "1 carat diamond solitaire set in 18k white gold.",
    category: "jewelry",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.9, count: 70 }
  },
  {
    id: 27,
    title: "Pearl Necklace",
    price: 84000,
    description: "Elegant freshwater pearl necklace with sterling silver clasp.",
    category: "jewelry",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.7, count: 95 }
  },
  {
    id: 28,
    title: "Gold Hoop Earrings",
    price: 42000,
    description: "14k gold hoop earrings, perfect for everyday wear.",
    category: "jewelry",
    image: "https://images.pexels.com/photos/12194348/pexels-photo-12194348.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: { rate: 4.6, count: 82 }
  },
  {
    id: 29,
    title: "Silver Charm Bracelet",
    price: 28000,
    description: "Sterling silver charm bracelet with 5 interchangeable charms.",
    category: "jewelry",
    image: "https://images.pexels.com/photos/5370647/pexels-photo-5370647.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: { rate: 4.8, count: 78 }
  }
];

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = [...action.payload, ...cosmeticProducts, ...jewelryProducts];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;