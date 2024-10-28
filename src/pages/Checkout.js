import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const Checkout = () => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const { items, total } = useSelector(state => state.cart);
  const navigate = useNavigate();

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process the order here
    alert('Order placed successfully!');
    // Clear the cart and redirect to home page
    // You would typically dispatch an action to clear the cart here
    navigate('/');
  };

  return (
    <animated.div style={fadeIn} className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="address" className="block mb-1">Delivery Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
            rows="3"
          ></textarea>
        </div>
        <div>
          <label htmlFor="paymentMethod" className="block mb-1">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select a payment method</option>
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          {items.map(item => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.title} x {item.quantity}</span>
              <span>PKR {(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
          <div className="text-xl font-semibold mt-4">
            Total: PKR {total.toLocaleString()}
          </div>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors">
          Place Order
        </button>
      </form>
    </animated.div>
  );
};

export default Checkout;