"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";

const CSSStarsFallback = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 400 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 2, // 2px to 5px for more presence
      opacity: Math.random() * 0.6 + 0.4,
      animationDelay: Math.random() * 4,
      animationDuration: Math.random() * 3 + 2,
      color: getYellowVariation(),
    }));
    setStars(generatedStars);
  }, []);

  const getYellowVariation = () => {
    const whites = [
      '#FFFFFF', // Pure white
      '#F8F8FF', // Ghost white
      '#FFFAFA', // Snow white
      '#F5F5F5', // White smoke
      '#FAFAFA', // Bright white
    ];
    return whites[Math.floor(Math.random() * whites.length)];
  };

  return (
    <div 
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, #000000, #0a0a00)',
        width: '100%',
        height: '100%',
      }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration}s ease-in-out ${star.animationDelay}s infinite`,
            boxShadow: `0 0 ${star.size * 4}px ${star.color}, 0 0 ${star.size * 8}px rgba(255, 255, 255, 0.8)`,
            filter: 'brightness(1.5) saturate(1.3)',
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.5; 
            transform: scale(1);
            filter: brightness(1.3) saturate(1.3);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5);
            filter: brightness(2) saturate(1.5);
          }
        }
      `}</style>
    </div>
  );
};

// Main component - try WebGL, fallback to CSS
const StarsCanvas = () => {
  const [renderMode, setRenderMode] = useState('loading'); 
  const [Canvas, setCanvas] = useState(null);
  const [threeComponents, setThreeComponents] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadThreeComponents = async () => {
      try {
        console.log('🌟 Attempting to load Three.js components...');
        
        // Check WebGL support first
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        
        if (!gl) {
          console.warn('⚠️ WebGL not supported - using CSS fallback');
          if (mounted) setRenderMode('css');
          return;
        }

        console.log('✅ WebGL supported, loading React Three Fiber...');

        // Dynamically import to catch any loading errors
        const { Canvas: CanvasComponent } = await import("@react-three/fiber");
        const { Points, PointMaterial, Preload } = await import("@react-three/drei");

        console.log('✅ Three.js components loaded successfully');

        if (mounted) {
          setCanvas(() => CanvasComponent);
          setThreeComponents({ Points, PointMaterial, Preload });
          setRenderMode('webgl');
        }
      } catch (error) {
        console.error('❌ Failed to load Three.js components:', error);
        if (mounted) setRenderMode('css');
      }
    };

    loadThreeComponents();

    return () => {
      mounted = false;
    };
  }, []);

  // Show nothing during loading
  if (renderMode === 'loading') {
    return (
      <div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: '#000000' }}
      />
    );
  }

  // Use CSS fallback
  if (renderMode === 'css') {
    console.log('🎨 Rendering CSS stars fallback');
    return <CSSStarsFallback />;
  }

  // Use WebGL stars
  if (renderMode === 'webgl' && Canvas && threeComponents) {
    console.log('🚀 Rendering WebGL stars');
    return <WebGLStars Canvas={Canvas} components={threeComponents} onError={() => setRenderMode('css')} />;
  }

  // Fallback
  return <CSSStarsFallback />;
};

// WebGL Stars Component
const WebGLStars = ({ Canvas, components, onError }) => {
  const { Points, PointMaterial, Preload } = components;

  const StarBackground = (props) => {
    const ref = useRef();
    
    const [sphere] = useState(() => {
      const positions = new Float32Array(6000); // More stars
      
      for (let i = 0; i < 6000; i += 3) {
        const radius = Math.random() * 2.5; // Larger spread
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        // Ensure no NaN values
        positions[i] = isFinite(x) ? x : 0;
        positions[i + 1] = isFinite(y) ? y : 0;
        positions[i + 2] = isFinite(z) ? z : 0;
      }
      
      return positions;
    });

    // Safe useFrame import
    const { useFrame } = require("@react-three/fiber");

    useFrame((_, delta) => {
      if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
      }
    });

    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
          <PointMaterial
            transparent
            color="#FFFFF" // Pure bright yellow
            size={typeof window !== "undefined" && window.innerWidth < 768 ? 0.012 : 0.007} 
            sizeAttenuation
            depthWrite={false}
            opacity={1}
            emissive="#FFFF"
            emissiveIntensity={1.2}
            toneMapped={false}
          />
        </Points>
      </group>
    );
  };

  return (
    <div
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{ 
        width: "100%", 
        height: "100%", 
        background: "linear-gradient(to bottom, #000000, #0a0a00)" 
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          console.log('✅ Canvas created successfully');
          gl.setClearColor(0x000000, 0);
        }}
        onError={(error) => {
          console.error('❌ Canvas error:', error);
          onError();
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;