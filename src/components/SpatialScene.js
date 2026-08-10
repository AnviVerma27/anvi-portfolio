import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, MeshDistortMaterial, OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function NeuralCore({ compact = false, variant = 0 }) {
  const group = useRef();
  const shell = useRef();
  const colors = ['#76f7d4', '#9f8cff', '#ff8fbd', '#78b9ff'];
  const points = useMemo(() => Array.from({ length: compact ? 14 : 24 }, (_, index) => {
    const phi = Math.acos(-1 + (2 * index) / (compact ? 13 : 23));
    const theta = Math.sqrt((compact ? 14 : 24) * Math.PI) * phi;
    return new THREE.Vector3(Math.cos(theta) * Math.sin(phi) * 2.35, Math.sin(theta) * Math.sin(phi) * 2.35, Math.cos(phi) * 2.35);
  }), [compact]);

  useFrame((state, delta) => {
    group.current.rotation.y += delta * .12;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * .25) * .12;
    shell.current.rotation.z -= delta * .18;
  });

  return (
    <group ref={group} scale={compact ? .72 : 1}>
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.48, 5]} />
        <MeshDistortMaterial color={colors[variant]} roughness={.18} metalness={.35} distort={.38} speed={1.7} transparent opacity={.9} />
      </mesh>
      <mesh scale={1.7}><icosahedronGeometry args={[1.15, 2]} /><meshBasicMaterial color={colors[variant]} wireframe transparent opacity={.18} /></mesh>
      {points.map((point, index) => (
        <group key={index}>
          <mesh position={point}><sphereGeometry args={[index % 4 === 0 ? .075 : .04, 10, 10]} /><meshBasicMaterial color={index % 4 === 0 ? '#ffffff' : colors[variant]} /></mesh>
          {index < points.length - 1 && <Line points={[point, points[(index * 5 + 3) % points.length]]} color={colors[variant]} transparent opacity={.25} lineWidth={.45} />}
        </group>
      ))}
      <mesh rotation={[Math.PI / 2.4, .2, 0]}><torusGeometry args={[2.85, .018, 8, 150]} /><meshBasicMaterial color="#ffffff" transparent opacity={.35} /></mesh>
      <mesh rotation={[1.9, 0, .8]}><torusGeometry args={[3.25, .012, 8, 150]} /><meshBasicMaterial color={colors[variant]} transparent opacity={.55} /></mesh>
    </group>
  );
}

function DataArchitecture() {
  const root = useRef();
  useFrame((state) => { root.current.position.y = Math.sin(state.clock.elapsedTime * .45) * .12; });
  return (
    <group ref={root} position={[0, -.5, 0]}>
      <NeuralCore />
      {[-1, 1].map(side => <Float key={side} speed={1.2} floatIntensity={.35}><mesh position={[side * 3.8, side * .75, -.65]} rotation={[0, side * -.38, side * .08]}><boxGeometry args={[2.3, 1.45, .06]} /><meshPhysicalMaterial color="#09131c" roughness={.08} metalness={.25} transmission={.25} transparent opacity={.78} /></mesh><mesh position={[side * 3.8, side * .75, -.58]} rotation={[0, side * -.38, side * .08]}><planeGeometry args={[1.75, .04]} /><meshBasicMaterial color={side > 0 ? '#9f8cff' : '#76f7d4'} /></mesh></Float>)}
      <gridHelper args={[24, 24, '#1c8b83', '#102c31']} position={[0, -3.15, 0]} />
    </group>
  );
}

function SceneLights() {
  return <><ambientLight intensity={.35} /><pointLight position={[4, 5, 6]} intensity={45} color="#a8fff0" /><pointLight position={[-5, -1, 2]} intensity={35} color="#6d5cff" /><spotLight position={[0, 7, -4]} intensity={60} angle={.4} penumbra={1} color="#ffffff" /></>;
}

export function HeroScene() {
  return (
    <div className="canvas-wrap" aria-label="Interactive three-dimensional neural network model">
      <Canvas dpr={[1, 1.7]} camera={{ position: [0, .2, 10], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <fog attach="fog" args={['#05090d', 9, 19]} /><SceneLights />
        <Suspense fallback={null}><DataArchitecture /><Sparkles count={90} scale={[14, 9, 8]} size={1.5} speed={.25} opacity={.42} color="#b9fff2" /></Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.32} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.75} />
      </Canvas>
    </div>
  );
}

export function ProjectScene({ variant = 0 }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7], fov: 42 }} gl={{ antialias: true, alpha: true }}>
      <SceneLights /><Suspense fallback={null}><Float speed={1.5} rotationIntensity={.35} floatIntensity={.5}><NeuralCore compact variant={variant} /></Float><Sparkles count={35} scale={7} size={1.2} speed={.2} color="#ffffff" /></Suspense>
    </Canvas>
  );
}
