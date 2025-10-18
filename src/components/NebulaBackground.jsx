"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";

// CSS Fallback Stars
const CSSStarsFallback = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 300 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      animationDelay: Math.random() * 3,
      animationDuration: Math.random() * 2 + 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div 
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      style={{ 
        background: '#000000',
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
            backgroundColor: '#ffffff',
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration}s ease-in-out ${star.animationDelay}s infinite`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`,
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

// Main component - try WebGL, fallback to CSS
const StarsCanvas = () => {
  const [renderMode, setRenderMode] = useState('loading'); // 'loading', 'webgl', 'css'
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
        const random = await import("maath/random/dist/maath-random.esm");

        console.log('✅ Three.js components loaded successfully');

        if (mounted) {
          setCanvas(() => CanvasComponent);
          setThreeComponents({ Points, PointMaterial, Preload, random });
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
  const { Points, PointMaterial, Preload, random } = components;

  const StarBackground = (props) => {
    const ref = useRef();
    
    // Generate positions with complete validation
    const [sphere] = useState(() => {
      const positions = new Float32Array(5000);
      
      // Generate sphere positions manually to avoid maath/random issues
      for (let i = 0; i < 5000; i += 3) {
        const radius = Math.random() * 2.0;
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
            color="#ffffff"
            size={typeof window !== "undefined" && window.innerWidth < 768 ? 0.005 : 0.002}
            sizeAttenuation
            depthWrite={false}
          />
        </Points>
      </group>
    );
  };

  return (
    <div
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{ width: "100%", height: "100%", background: "#000000" }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
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