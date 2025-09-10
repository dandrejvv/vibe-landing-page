import React from 'react';
import { DotOrbit } from '@paper-design/shaders-react';

const FloatingElements = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 5,
    }}>
      {/* Top right floating shader orb */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        overflow: 'hidden',
        opacity: 0.7,
        animation: 'float 6s ease-in-out infinite',
      }}>
        <DotOrbit
          colors={['#9400d3', '#ff6b6b', '#4ecdc4', '#37a066']}
          colorBack="#000000"
          size={0.8}
          spreading={0.5}
          speed={0.3}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Bottom left accent */}
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        overflow: 'hidden',
        opacity: 0.5,
        animation: 'float 8s ease-in-out infinite reverse',
      }}>
        <DotOrbit
          colors={['#800080', '#4ecdc4', '#9400d3', '#ff6b6b']}
          colorBack="#000000"
          size={0.6}
          spreading={0.4}
          speed={0.2}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Bottom right corner decoration */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '15%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(148, 0, 211, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'pulse 4s ease-in-out infinite',
      }} />

      {/* Geometric accent shapes */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '8%',
        width: '3px',
        height: '60px',
        background: 'linear-gradient(180deg, transparent, rgba(148, 0, 211, 0.6), transparent)',
        transform: 'rotate(25deg)',
        opacity: 0.8,
      }} />

      <div style={{
        position: 'absolute',
        top: '60%',
        right: '25%',
        width: '2px',
        height: '40px',
        background: 'linear-gradient(180deg, transparent, rgba(128, 0, 128, 0.5), transparent)',
        transform: 'rotate(-15deg)',
        opacity: 0.6,
      }} />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
            animation: `twinkle ${3 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}


    </div>
  );
};

export default FloatingElements;
