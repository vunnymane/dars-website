import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const Book3D = ({ isOpen, onOpen, currentPage, onPageChange }) => {
  const bookRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Animation for floating effect
  useFrame((state) => {
    if (!isOpen) {
      bookRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      bookRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      <mesh
        ref={bookRef}
        onClick={() => !isOpen && onOpen()}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <boxGeometry args={[2, 3, 0.2]} />
        <meshStandardMaterial
          color={isOpen ? "#F4E4BC" : "#2C1810"}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const BookScene = ({ isOpen, onOpen, currentPage, onPageChange }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: '100%', height: '100vh' }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Book3D
        isOpen={isOpen}
        onOpen={onOpen}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default BookScene; 