import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';

const LoadingScreen = ({ isLoading }) => {
  const fadeOut = useSpring({
    opacity: isLoading ? 1 : 0,
    config: config.molasses,
  });

  const logoAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: config.gentle,
  });

  return (
    <animated.div
      style={{
        ...fadeOut,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        zIndex: 9999,
        pointerEvents: isLoading ? 'auto' : 'none',
      }}
    >
      <animated.div style={logoAnimation}>
        <h1 className="text-6xl font-bold text-blue-600">
          <span className="inline-block animate-bounce">S</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>t</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>o</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>r</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>e</span>
        </h1>
      </animated.div>
    </animated.div>
  );
};

export default LoadingScreen;