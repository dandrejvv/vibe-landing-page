import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FloatingElements from './components/FloatingElements';
import ShaderShowcase from './components/ShaderShowcase';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'auto',
    }}>
      <Background />
      <FloatingElements />
      <Header />
      <HeroSection />
      <ShaderShowcase />
      
      {/* Global styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.2; 
            transform: scale(1.1); 
          }
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.5); 
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(148, 0, 211, 0.5);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 0, 211, 0.7);
        }
      `}</style>
    </div>
  );
}

export default App;
