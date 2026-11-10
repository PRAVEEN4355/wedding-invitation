import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Brass Turmeric Urli (Bowl) with handles and flower petals
function BrassUrli({ mousePos }: { mousePos: { x: number; y: number } }) {
  const urliRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (urliRef.current) {
      const t = state.clock.getElapsedTime();
      // Gentle floating and subtle tilt towards mouse
      urliRef.current.position.y = Math.sin(t * 1.5) * 0.1;
      urliRef.current.rotation.y = t * 0.25 + mousePos.x * 0.3;
      urliRef.current.rotation.x = 0.25 + mousePos.y * 0.15;
    }
  });

  return (
    <group ref={urliRef} position={[0, -0.3, 0]} scale={[1.3, 1.3, 1.3]}>
      {/* Brass Urli Body - wide shallow bowl */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.8, 0.9, 0.7, 32]} />
        <meshStandardMaterial
          color="#D4AF37"
          roughness={0.25}
          metalness={0.88}
        />
      </mesh>

      {/* Rim Lip */}
      <mesh position={[0, 0.35, 0]}>
        <torusGeometry args={[1.85, 0.08, 16, 48]} />
        <meshStandardMaterial
          color="#F3DB98"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Decorative Brass Handles on 2 sides */}
      <mesh position={[2.0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.25, 0.05, 12, 24]} />
        <meshStandardMaterial color="#C49A47" roughness={0.3} metalness={0.85} />
      </mesh>
      <mesh position={[-2.0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.25, 0.05, 12, 24]} />
        <meshStandardMaterial color="#C49A47" roughness={0.3} metalness={0.85} />
      </mesh>

      {/* Liquid Turmeric / Haldi Paste inside Urli */}
      <mesh position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.7, 32]} />
        <meshStandardMaterial
          color="#F5CE36"
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>

      {/* Marigold flowers floating on water */}
      {[
        { pos: [0, 0.25, 0], col: '#FF8C00' },
        { pos: [0.6, 0.24, 0.4], col: '#FFD700' },
        { pos: [-0.6, 0.24, 0.5], col: '#FF8C00' },
        { pos: [0.7, 0.24, -0.4], col: '#FFA500' },
        { pos: [-0.7, 0.24, -0.3], col: '#FFD700' },
        { pos: [0, 0.24, 0.8], col: '#FFA500' },
        { pos: [0, 0.24, -0.8], col: '#FF8C00' },
      ].map((flower, i) => (
        <group key={i} position={flower.pos as [number, number, number]}>
          <mesh>
            <sphereGeometry args={[0.18, 12, 12]} />
            <meshStandardMaterial color={flower.col} roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.05, 0]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial color="#FF4500" roughness={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Turmeric Sparkle & Marigold Petals swirling around
function HaldiSwirlParticles({ count = 80 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      radius: 1.2 + Math.random() * 2.8,
      angle: Math.random() * Math.PI * 2,
      speed: 0.01 + Math.random() * 0.02,
      y: (Math.random() - 0.5) * 3,
      ySpeed: (Math.random() - 0.5) * 0.01,
      scale: 0.08 + Math.random() * 0.1,
    }));
  }, [count]);

  useFrame(() => {
    if (!meshRef.current) return;

    particles.forEach((p, i) => {
      p.angle += p.speed;
      p.y += p.ySpeed;
      if (p.y > 2) p.y = -2;
      if (p.y < -2) p.y = 2;

      const x = Math.cos(p.angle) * p.radius;
      const z = Math.sin(p.angle) * p.radius;

      dummy.position.set(x, p.y, z);
      dummy.rotation.set(p.angle, p.angle * 2, 0);
      dummy.scale.set(p.scale, p.scale, p.scale);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#FFD700" roughness={0.3} metalness={0.6} />
    </instancedMesh>
  );
}

export const HaldiUrliCanvas: React.FC<{ className?: string }> = ({ className = "w-full h-80 sm:h-96" }) => {
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mousePos.current = { x, y };
  };

  return (
    <div className={`relative ${className}`} onMouseMove={handleMouseMove}>
      <Canvas
        camera={{ position: [0, 1.2, 4.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} color="#FFF8E7" />
        <directionalLight position={[4, 6, 4]} intensity={2.2} color="#FFE682" />
        <directionalLight position={[-4, 3, -2]} intensity={0.8} color="#FF9900" />
        <pointLight position={[0, 0.8, 0]} intensity={2.0} color="#FFD700" distance={4} />

        <BrassUrli mousePos={mousePos.current} />
        <HaldiSwirlParticles count={70} />
      </Canvas>
    </div>
  );
};

