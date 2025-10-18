"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 2.0 })
  );

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

// CSS Fallback for devices without WebGL
const CSSStarsFallback = () => {
  const stars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.3,
    animationDelay: Math.random() * 3,
  }));

  return (
    <>
      <div className="absolute inset-0 -z-10 pointer-events-none bg-black">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </>
  );
};

const StarsCanvas = () => {
  const [isClient, setIsClient] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const [renderError, setRenderError] = useState(false);

  useEffect(() => {
    setIsClient(true);

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      
      if (!gl) {
        console.warn("WebGL is not supported - using CSS fallback");
        setWebglSupported(false);
      } else {
        // Additional WebGL capability check
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          console.log('WebGL Renderer:', renderer);
        }
      }
    } catch (error) {
      console.error("WebGL check failed - using CSS fallback:", error);
      setWebglSupported(false);
    }
  }, []);

  // Don't render during SSR
  if (!isClient) {
    return <div className="absolute inset-0 -z-10 pointer-events-none bg-black" />;
  }

  // Use CSS fallback if WebGL not supported or error occurred
  if (!webglSupported || renderError) {
    return <CSSStarsFallback />;
  }

  return (
    <div
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{ width: "100%", height: "100%", background: "black" }}
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
          gl.setClearColor(0x000000, 0);
        }}
        onError={(error) => {
          console.error("Canvas render error - switching to fallback:", error);
          setRenderError(true);
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