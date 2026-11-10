import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Pillar component
function TemplePillar({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Pillar Base Plinth */}
      <mesh position={[0, -2.2, 0]}>
        <boxGeometry args={[1.1, 0.4, 1.1]} />
        <meshStandardMaterial color="#8C6721" roughness={0.4} metalness={0.7} />
      </mesh>
      <mesh position={[0, -1.9, 0]}>
        <cylinderGeometry args={[0.45, 0.55, 0.4, 16]} />
        <meshStandardMaterial color="#C49A47" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Main Fluted Pillar Shaft */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.4, 3.6, 24]} />
        <meshStandardMaterial color="#C49A47" roughness={0.35} metalness={0.75} />
      </mesh>

      {/* Decorative Capital and Lotus Crest */}
      <mesh position={[0, 1.9, 0]}>
        <cylinderGeometry args={[0.55, 0.38, 0.4, 16]} />
        <meshStandardMaterial color="#F3DB98" roughness={0.25} metalness={0.85} />
      </mesh>
      <mesh position={[0, 2.2, 0]}>
        <boxGeometry args={[1.2, 0.3, 1.2]} />
        <meshStandardMaterial color="#8C6721" roughness={0.4} metalness={0.7} />
      </mesh>
    </group>
  );
}

// Falling 3D Flower Petals
function FlowerPetalParticles({ count = 120 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Initialize random particle positions & velocities
  const particles = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        Math.random() * 8 - 2,
        (Math.random() - 0.5) * 10
      ),
      rot: new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
      rotSpeed: {
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.03,
      },
      speed: 0.012 + Math.random() * 0.018,
      sway: Math.random() * Math.PI * 2,
    }));
  }, [count]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    particles.forEach((p, i) => {
      p.pos.y -= p.speed * (delta * 60);
      p.pos.x += Math.sin(time + p.sway) * 0.008;

      // Wrap around
      if (p.pos.y < -3) {
        p.pos.y = 5 + Math.random() * 2;
        p.pos.x = (Math.random() - 0.5) * 12;
      }

      p.rot.x += p.rotSpeed.x;
      p.rot.y += p.rotSpeed.y;
      p.rot.z += p.rotSpeed.z;

      dummy.position.copy(p.pos);
      dummy.rotation.copy(p.rot);
      dummy.scale.set(0.18, 0.18, 0.06);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 7, 7]} />
      <meshStandardMaterial color="#FFB800" roughness={0.4} />
    </instancedMesh>
  );
}

// Traditional Hanging Brass Diya Lamp inside Mandapam
function HangingLamp({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Chain */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 2.4, 8]} />
        <meshStandardMaterial color="#C49A47" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Bowl */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.1, 0.2, 16]} />
        <meshStandardMaterial color="#C49A47" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Flame point light */}
      <pointLight position={[0, 0.2, 0]} intensity={2.5} distance={5} color="#F5CE36" />
      <mesh position={[0, 0.16, 0]}>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshBasicMaterial color="#FFF5B0" />
      </mesh>
    </group>
  );
}

function MandapamScene({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating sway
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.05 + (scrollProgress * 0.3);
      groupRef.current.position.z = -1 + Math.sin(t * 0.3) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 4 Pillars of the Mandapam */}
      <TemplePillar position={[-2.8, 0, -2]} />
      <TemplePillar position={[2.8, 0, -2]} />
      <TemplePillar position={[-2.8, 0, 2]} />
      <TemplePillar position={[2.8, 0, 2]} />

      {/* Mandapam Upper Roof Arch Beams */}
      <mesh position={[0, 2.4, -2]}>
        <boxGeometry args={[6.2, 0.3, 0.4]} />
        <meshStandardMaterial color="#681C32" roughness={0.4} metalness={0.5} />
      </mesh>
      <mesh position={[0, 2.4, 2]}>
        <boxGeometry args={[6.2, 0.3, 0.4]} />
        <meshStandardMaterial color="#681C32" roughness={0.4} metalness={0.5} />
      </mesh>
      <mesh position={[-2.8, 2.4, 0]}>
        <boxGeometry args={[0.4, 0.3, 4.4]} />
        <meshStandardMaterial color="#681C32" roughness={0.4} metalness={0.5} />
      </mesh>
      <mesh position={[2.8, 2.4, 0]}>
        <boxGeometry args={[0.4, 0.3, 4.4]} />
        <meshStandardMaterial color="#681C32" roughness={0.4} metalness={0.5} />
      </mesh>

      {/* Decorative Gopuram-style Tiered Canopy */}
      <mesh position={[0, 2.8, 0]}>
        <boxGeometry args={[5.6, 0.4, 4.2]} />
        <meshStandardMaterial color="#C49A47" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0, 3.2, 0]}>
        <boxGeometry args={[4.2, 0.4, 3.2]} />
        <meshStandardMaterial color="#681C32" roughness={0.4} metalness={0.6} />
      </mesh>
      {/* Golden Kalash on top */}
      <mesh position={[0, 3.7, 0]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#F3DB98" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Hanging Brass Diyas */}
      <HangingLamp position={[-1.8, 1.2, 0]} />
      <HangingLamp position={[1.8, 1.2, 0]} />

      {/* Mandapam Base Stage */}
      <mesh position={[0, -2.5, 0]}>
        <boxGeometry args={[7.2, 0.4, 6.2]} />
        <meshStandardMaterial color="#2E0814" roughness={0.7} />
      </mesh>

      {/* Falling Flower Petals */}
      <FlowerPetalParticles count={90} />
    </group>
  );
}

export const MandapamCanvas: React.FC<{ scrollProgress?: number; className?: string }> = ({
  scrollProgress = 0,
  className = "w-full h-full",
}) => {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0.2, 6.5], fov: 48 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.8} color="#FFF8E7" />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFEAA7" castShadow />
        <directionalLight position={[-5, 4, -3]} intensity={0.6} color="#C49A47" />
        <pointLight position={[0, 1.5, 0]} intensity={1.8} color="#F5CE36" distance={8} />

        <MandapamScene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

