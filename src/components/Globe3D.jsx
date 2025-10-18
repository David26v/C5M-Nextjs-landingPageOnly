'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Globe3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    const mount = mountRef.current;
    if (!mount) return;

    // Set initial size
    const size = Math.min(700, window.innerWidth * 0.9, window.innerHeight * 0.9);
    renderer.setSize(size, size);
    mount.appendChild(renderer.domElement);

    // Geometry
    const geometry = new THREE.SphereGeometry(1, 64, 64);

    // Load new texture with blues (ocean) and yellow/peach (land)
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
      '/images/earth-version-2.png', 
      () => {
        // Optional: on load callback
      },
      undefined,
      (err) => {
        console.error('Failed to load globe texture:', err);
      }
    );

    // Fix color space (for Three.js r152+)
    if (typeof THREE.ColorManagement !== 'undefined') {
      texture.colorSpace = THREE.SRGBColorSpace;
    }

    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    // Material & Mesh
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 2.5;

    const handleResize = () => {
      const newSize = Math.min(700, window.innerWidth * 0.9, window.innerHeight * 0.9);
      renderer.setSize(newSize, newSize);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Animation loop: continuous smooth rotation
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      // Rotate at constant speed: full 360° takes ~8.7 seconds (2π / 0.002 ≈ 3140 ms per radian → ~8.7s)
      sphere.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}