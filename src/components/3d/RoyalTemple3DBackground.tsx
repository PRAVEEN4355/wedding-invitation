import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Floating Gold Sparkles & Jasmine Petals for Light Theme
function SacredFloatingPetals({ count = 65 }: { count?: number }) {
  const petalsRef = useRef<THREE.InstancedMesh>(null);
  const sparklesRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Marigold & Jasmine Petals
  const petalParticles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        Math.random() * 14 - 7,
        (Math.random() - 0.5) * 8
      ),
      rot: new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, 0),
      speed: 0.012 + Math.random() * 0.018,
      rotSpeed: { x: 0.015, y: 0.012 },
      sway: Math.random() * Math.PI * 2,
      isJasmine: i % 2 === 0,
    }));
  }, [count]);

  // Gold Sparkles
  const sparkleParticles = useMemo(() => {
    return Array.from({ length: 35 }).map(() => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        Math.random() * 14 - 7,
        (Math.random() - 0.5) * 6
      ),
      speed: 0.008 + Math.random() * 0.01,
      sway: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (petalsRef.current) {
      petalParticles.forEach((p, i) => {
        p.pos.y -= p.speed * (delta * 60);
        p.pos.x += Math.sin(time * 0.8 + p.sway) * 0.008;
        if (p.pos.y < -7) {
          p.pos.y = 7;
          p.pos.x = (Math.random() - 0.5) * 16;
        }
        p.rot.x += p.rotSpeed.x;
        p.rot.y += p.rotSpeed.y;

        dummy.position.copy(p.pos);
        dummy.rotation.copy(p.rot);
        dummy.scale.set(0.14, 0.20, 0.04);
        dummy.updateMatrix();
        petalsRef.current!.setMatrixAt(i, dummy.matrix);
      });
      petalsRef.current.instanceMatrix.needsUpdate = true;
    }

    if (sparklesRef.current) {
      sparkleParticles.forEach((s, i) => {
        s.pos.y -= s.speed * (delta * 60);
        s.pos.x += Math.cos(time * 0.5 + s.sway) * 0.005;
        if (s.pos.y < -7) {
          s.pos.y = 7;
          s.pos.x = (Math.random() - 0.5) * 16;
        }
        dummy.position.copy(s.pos);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.set(0.06, 0.06, 0.06);
        dummy.updateMatrix();
        sparklesRef.current!.setMatrixAt(i, dummy.matrix);
      });
      sparklesRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* Flower Petals */}
      <instancedMesh ref={petalsRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshStandardMaterial color="#FFA500" roughness={0.4} />
      </instancedMesh>

      {/* Golden Shimmer Dust */}
      <instancedMesh ref={sparklesRef} args={[undefined, undefined, 35]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </instancedMesh>
    </group>
  );
}

function SceneGroup({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePos.current.x * 0.1 + Math.sin(t * 0.15) * 0.02,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <SacredFloatingPetals />
    </group>
  );
}

export const RoyalTemple3DBackground: React.FC = () => {
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Warm Luminous Golden Silk Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-100/30 via-transparent to-amber-200/20 z-10" />

      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.2} color="#FFF8E7" />
        <directionalLight position={[5, 8, 4]} intensity={1.8} color="#FFEAA7" />
        <SceneGroup mousePos={mousePos} />
      </Canvas>
    </div>
  );
};
