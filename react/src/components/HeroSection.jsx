import React from 'react';

const HeroSection = () => {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '2rem',
      paddingTop: '8rem',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10,
    }}>
      {/* Badge */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '20px',
        padding: '0.5rem 1rem',
        marginBottom: '2rem',
        backdropFilter: 'blur(10px)',
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <span style={{
          width: '8px',
          height: '8px',
          background: 'linear-gradient(45deg, #9400d3, #800080)',
          borderRadius: '50%',
        }}></span>
        New Paper Shaders Experience
      </div>

      {/* Main Title */}
      <h1 style={{
        fontSize: 'clamp(3rem, 8vw, 6rem)',
        fontWeight: '300',
        color: 'white',
        margin: '0 0 1.5rem 0',
        lineHeight: '1.1',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '-0.02em',
      }}>
        <span style={{ fontWeight: '300' }}>Beautiful</span>{' '}
        <span style={{ 
          fontWeight: '600',
          background: 'linear-gradient(135deg, #9400d3, #ff6b6b, #4ecdc4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          display: 'inline-block',
        }}>
          Shader
        </span>
        <br />
        <span style={{ fontWeight: '300' }}>Experiences</span>
      </h1>

      {/* Description */}
      <p style={{
        fontSize: '1.25rem',
        color: 'rgba(255, 255, 255, 0.7)',
        maxWidth: '600px',
        lineHeight: '1.6',
        margin: '0 0 3rem 0',
        fontWeight: '400',
      }}>
        Create stunning visual experiences with our advanced shader technology. Interactive lighting,
        smooth animations, and beautiful effects that respond to your every move.
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <button style={{
          background: 'linear-gradient(135deg, #9400d3, #800080)',
          border: 'none',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 20px rgba(148, 0, 211, 0.3)',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 8px 30px rgba(148, 0, 211, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 20px rgba(148, 0, 211, 0.3)';
        }}
        >
          Get Started
        </button>
        
        <button style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.15)';
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.1)';
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          e.target.style.transform = 'translateY(0)';
        }}
        >
          Pricing
        </button>
      </div>
    </main>
  );
};

export default HeroSection;
