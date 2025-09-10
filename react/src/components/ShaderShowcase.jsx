import React from 'react';
import { MeshGradient, DotOrbit, Waves } from '@paper-design/shaders-react';

const ShaderShowcase = () => {
  return (
    <section style={{
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          color: 'white',
          margin: '0 0 1rem 0',
          background: 'linear-gradient(135deg, #9400d3, #ff6b6b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Shader Variants
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.7)',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Explore different shader configurations and effects available in the library
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '3rem',
      }}>
        {/* MeshGradient Variant 1 */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '1.5rem',
          backdropFilter: 'blur(10px)',
        }}>
          <h3 style={{
            color: 'white',
            fontSize: '1.2rem',
            margin: '0 0 1rem 0',
            fontWeight: '500',
          }}>
            Warm Gradient
          </h3>
          <div style={{
            width: '100%',
            height: '200px',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '1rem',
          }}>
            <MeshGradient
              colors={['#ff6b6b', '#feca57', '#ff9ff3', '#54a0ff']}
              distortion={0.8}
              swirl={0.6}
              speed={0.15}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.9rem',
            margin: 0,
          }}>
            Low distortion with warm color palette
          </p>
        </div>

        {/* DotOrbit Variant */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '1.5rem',
          backdropFilter: 'blur(10px)',
        }}>
          <h3 style={{
            color: 'white',
            fontSize: '1.2rem',
            margin: '0 0 1rem 0',
            fontWeight: '500',
          }}>
            Orbital Dots
          </h3>
          <div style={{
            width: '100%',
            height: '200px',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '1rem',
          }}>
            <DotOrbit
              colors={['#e056fd', '#686de0', '#4834d4', '#30336b']}
              colorBack="#000000"
              size={0.7}
              spreading={0.6}
              speed={0.3}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.9rem',
            margin: 0,
          }}>
            Animated particle system with orbit patterns
          </p>
        </div>

        {/* Waves Variant */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '1.5rem',
          backdropFilter: 'blur(10px)',
        }}>
          <h3 style={{
            color: 'white',
            fontSize: '1.2rem',
            margin: '0 0 1rem 0',
            fontWeight: '500',
          }}>
            Ocean Waves
          </h3>
          <div style={{
            width: '100%',
            height: '200px',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '1rem',
          }}>
            <Waves
              colors={['#00ff80', '#4ecdc4', '#0099cc']}
              speed={0.4}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.9rem',
            margin: 0,
          }}>
            Flowing wave patterns with oceanic colors
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShaderShowcase;
