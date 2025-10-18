"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
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

const StarsCanvas = () => {
  // ✅ Modern WebGL support check
  if (typeof window !== "undefined") {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      console.warn("WebGL is not supported on this device/browser.");
      return null;
    }
  }

  return (
    <div
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
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
