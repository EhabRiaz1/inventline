import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Simple truck made with basic shapes instead of loading external models
function SimpleTruck({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
  const truckRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (truckRef.current) {
      truckRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 5;
    }
  });

  return (
    <group ref={truckRef} position={position} rotation={rotation}>
      {/* Truck cab */}
      <Box args={[1, 1, 1.5]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#3b82f6" />
      </Box>
      
      {/* Truck trailer */}
      <Box args={[1, 1.2, 3]} position={[0, 0.6, -2.25]}>
        <meshStandardMaterial color="#1e40af" />
      </Box>
      
      {/* Wheels */}
      <Box args={[0.3, 0.3, 0.3]} position={[0.6, 0, 0.5]}>
        <meshStandardMaterial color="#000000" />
      </Box>
      <Box args={[0.3, 0.3, 0.3]} position={[-0.6, 0, 0.5]}>
        <meshStandardMaterial color="#000000" />
      </Box>
      <Box args={[0.3, 0.3, 0.3]} position={[0.6, 0, -0.5]}>
        <meshStandardMaterial color="#000000" />
      </Box>
      <Box args={[0.3, 0.3, 0.3]} position={[-0.6, 0, -0.5]}>
        <meshStandardMaterial color="#000000" />
      </Box>
      
      {/* Trailer wheels */}
      <Box args={[0.3, 0.3, 0.3]} position={[0.6, 0, -3]}>
        <meshStandardMaterial color="#000000" />
      </Box>
      <Box args={[0.3, 0.3, 0.3]} position={[-0.6, 0, -3]}>
        <meshStandardMaterial color="#000000" />
      </Box>
      <Box args={[0.3, 0.3, 0.3]} position={[0.6, 0, -2]}>
        <meshStandardMaterial color="#000000" />
      </Box>
      <Box args={[0.3, 0.3, 0.3]} position={[-0.6, 0, -2]}>
        <meshStandardMaterial color="#000000" />
      </Box>
    </group>
  );
}

function Map() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[20, 10]} />
      <meshStandardMaterial
        color="#1e293b"
        metalness={0.5}
        roughness={0.5}
      />
    </mesh>
  );
}

function Path() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.48, 0]}>
      <planeGeometry args={[18, 0.5]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#3b82f6"
        emissiveIntensity={0.5}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

export default function LogisticsScene() {
  return (
    <div className="h-[600px] w-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 5, 10]} />
        <Environment preset="city" />
        
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
        />

        <Map />
        <Path />
        
        <SimpleTruck position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        <SimpleTruck position={[5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />

        <fog attach="fog" args={['#1e293b', 5, 20]} />
      </Canvas>
    </div>
  );
}