import React from 'react';

const Header = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backdropFilter: 'blur(10px)',
      background: 'rgba(0, 0, 0, 0.1)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      {/* Logo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          background: 'linear-gradient(45deg, #9400d3, #800080)',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '14px',
        }}>
          P
        </div>
        <span style={{
          color: 'white',
          fontSize: '18px',
          fontWeight: '600',
        }}>
          Colorpanis
        </span>
      </div>

      {/* Navigation */}
      <nav style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
      }}>
        <a href="#features" style={{
          color: 'rgba(255, 255, 255, 0.8)',
          textDecoration: 'none',
          fontSize: '15px',
          fontWeight: '400',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => e.target.style.color = 'white'}
        onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
        >
          Features
        </a>
        <a href="#pricing" style={{
          color: 'rgba(255, 255, 255, 0.8)',
          textDecoration: 'none',
          fontSize: '15px',
          fontWeight: '400',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => e.target.style.color = 'white'}
        onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
        >
          Pricing
        </a>
        <a href="#docs" style={{
          color: 'rgba(255, 255, 255, 0.8)',
          textDecoration: 'none',
          fontSize: '15px',
          fontWeight: '400',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => e.target.style.color = 'white'}
        onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
        >
          Docs
        </a>
        <button style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.15)';
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.1)';
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }}
        >
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
