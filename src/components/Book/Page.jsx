import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const Page = ({ content, isLeft, isOpen, pageNumber, totalPages }) => {
  const pageRef = useRef();
  const { title, text, image } = content;

  useFrame((state) => {
    if (isOpen) {
      pageRef.current.rotation.y = isLeft ? -Math.PI / 2 : Math.PI / 2;
    } else {
      pageRef.current.rotation.y = 0;
    }
  });

  return (
    <mesh
      ref={pageRef}
      position={[isLeft ? -1 : 1, 0, 0.1]}
      rotation={[0, isLeft ? -Math.PI / 2 : Math.PI / 2, 0]}
    >
      <planeGeometry args={[2, 3]} />
      <meshStandardMaterial
        color="#F4E4BC"
        roughness={0.8}
        metalness={0.2}
      />
      <Text
        position={[0, 1, 0.1]}
        fontSize={0.2}
        color="#1A0F0A"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.1}
        color="#1A0F0A"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {text}
      </Text>
      {image && (
        <mesh position={[0, -0.5, 0.1]}>
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial
            map={new THREE.TextureLoader().load(image)}
            transparent
          />
        </mesh>
      )}
    </mesh>
  );
};

export default Page; 