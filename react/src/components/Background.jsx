import { MeshGradient } from '@paper-design/shaders-react';

const Background = () => {
  return (
    <div style={{ 
      background: 'black', 
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1
    }}>
      {/* Primary layer - purple/violet mesh gradient */}
      <MeshGradient
        colors={['#000000', '#9400d3', '#000000', '#800080']} // Black, violet, black, purple
        distortion={1.2}
        swirl={0.8}
        speed={0.3}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      
      {/* Secondary layer - subtle overlay with different movement */}
      <MeshGradient
        colors={['#ffffff', '#9400d3', '#ffffff', '#800080']} // White, violet, white, purple
        distortion={0.8}
        swirl={0.5}
        speed={0.2}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.6,
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  );
};

export default Background;
