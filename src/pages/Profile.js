import React from 'react';
import { useSelector } from 'react-redux';
import { useSpring, animated } from '@react-spring/web';

const Profile = () => {
  const user = useSelector(state => state.auth.user);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  if (!user) {
    return <div className="text-center">Please log in to view your profile.</div>;
  }

  return (
    <animated.div style={fadeIn} className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p>{user.email}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Order History</h3>
          <p>You haven't placed any orders yet.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Saved Addresses</h3>
          <p>You haven't saved any addresses yet.</p>
        </div>
      </div>
    </animated.div>
  );
};

export default Profile;