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

function drawProjectOutput(ctx, mode, color, time) {
  ctx.fillStyle = '#081116'; ctx.fillRect(818, 108, 440, 580);
  ctx.strokeStyle = '#1b343c'; ctx.strokeRect(818, 108, 440, 580);
  ctx.font = '500 14px monospace'; ctx.fillStyle = '#688087'; ctx.fillText('LIVE PROJECT OUTPUT', 842, 140);
  ctx.fillStyle = color; ctx.fillRect(842, 153, 82, 2);

  if (mode === 'translate') {
    ctx.fillStyle = '#101d23'; ctx.fillRect(842, 184, 392, 122); ctx.fillRect(842, 327, 392, 151);
    ctx.fillStyle = '#71888e'; ctx.fillText('FRENCH  /  DETECTED', 864, 212); ctx.fillStyle = '#d9e9e9'; ctx.font = '500 24px monospace'; ctx.fillText('Bonjour, comment', 864, 254); ctx.fillText('allez-vous ?', 864, 283);
    ctx.font = '500 14px monospace'; ctx.fillStyle = color; ctx.fillText('ENGLISH  /  98.7%', 864, 358); ctx.fillStyle = '#ffffff'; ctx.font = '700 27px monospace'; ctx.fillText('Hello, how are', 864, 408); ctx.fillText('you?', 864, 443);
    ctx.strokeStyle = color; ctx.beginPath(); ctx.moveTo(1038, 306); ctx.lineTo(1038, 326); ctx.stroke();
    ctx.font = '500 13px monospace'; ctx.fillStyle = '#61777d'; ctx.fillText('SIMILAR  12     LATENCY  84ms', 864, 526);
  } else if (mode === 'voice') {
    ctx.fillStyle = '#101d23'; ctx.fillRect(842, 184, 392, 142);
    ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = 3;
    for (let x = 0; x < 360; x += 5) { const amp = 12 + Math.sin(x * .08) * 18; const y = 255 + Math.sin(x * .15 + time * 5) * amp; x === 0 ? ctx.moveTo(858 + x, y) : ctx.lineTo(858 + x, y); } ctx.stroke();
    ctx.fillStyle = color; ctx.beginPath(); ctx.arc(1038, 372, 31, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = '#061014'; ctx.font = '700 18px monospace'; ctx.fillText('Ⅱ', 1026, 379);
    ctx.font = '500 14px monospace'; ['01  Preheat oven to 180°C', '02  Whisk eggs and sugar', '03  Fold in the flour'].forEach((line, i) => { ctx.fillStyle = i === Math.floor(time % 3) ? '#ffffff' : '#62797f'; ctx.fillText(line, 858, 445 + i * 46); });
    ctx.fillStyle = color; ctx.fillRect(858, 591, ((time * 42) % 350), 3); ctx.fillStyle = '#61777d'; ctx.fillText('01:24  /  03:08', 858, 627);
  } else if (mode === 'vision') {
    ctx.fillStyle = '#10191d'; ctx.fillRect(842, 178, 392, 348);
    [[922, 284, 76, 96], [1070, 245, 88, 112], [1002, 405, 67, 83]].forEach((face, i) => {
      const [x,y,w,h] = face; ctx.fillStyle = '#25343a'; ctx.beginPath(); ctx.arc(x + w/2, y + h*.32, w*.22, 0, Math.PI*2); ctx.fill(); ctx.fillRect(x + w*.24, y + h*.57, w*.52, h*.35);
      ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.strokeRect(x, y, w, h); ctx.fillStyle = color; ctx.font = '500 11px monospace'; ctx.fillText(`FACE ${i+1}  ${97+i*.6}%`, x, y - 8);
    });
    ctx.fillStyle = color + '22'; ctx.fillRect(842, 178 + ((time * 95) % 348), 392, 3);
    ctx.fillStyle = '#71888e'; ctx.font = '500 13px monospace'; ctx.fillText('TRACKING 03 SUBJECTS', 858, 564); ctx.fillStyle = '#ffffff'; ctx.font = '700 28px monospace'; ctx.fillText('60 FPS  •  LIVE', 858, 610);
  } else {
    const messages = [['Your verification code is 4821', 'HAM', .08], ['WIN a free holiday — click now!', 'SPAM', .97], ['Meeting moved to 4:30 PM', 'HAM', .03]];
    messages.forEach((message, i) => { const y = 184 + i * 116; ctx.fillStyle = '#101d23'; ctx.fillRect(842, y, 392, 94); ctx.fillStyle = '#d4e1e2'; ctx.font = '500 14px monospace'; ctx.fillText(message[0], 860, y + 30); ctx.fillStyle = message[1] === 'SPAM' ? '#ff729e' : color; ctx.fillText(`${message[1]}   ${(message[2]*100).toFixed(0)}%`, 860, y + 68); ctx.strokeStyle = message[1] === 'SPAM' ? '#ff729e' : color; ctx.strokeRect(1145, y + 51, 67, 23); });
    ctx.fillStyle = '#667e84'; ctx.fillText('ANALYSING MESSAGE STREAM…', 858, 571); ctx.fillStyle = color; ctx.fillRect(858, 592, 350 * (.3 + (Math.sin(time * 2)+1)*.35), 4); ctx.fillStyle = '#ffffff'; ctx.font = '700 26px monospace'; ctx.fillText('96.2% ACCURACY', 858, 643);
  }
}

function drawIDE(ctx, project, color, time) {
  const w = 1280, h = 720;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#05090d'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#0a1117'; ctx.fillRect(0, 0, w, 54);
  ctx.fillStyle = '#080e13'; ctx.fillRect(0, 54, 205, h - 54);
  ctx.fillStyle = '#0b141a'; ctx.fillRect(205, 54, w - 205, 42);
  ctx.fillStyle = '#0a1015'; ctx.fillRect(800, 96, 480, 624);
  ctx.strokeStyle = '#183039'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(205, 54); ctx.lineTo(205, h); ctx.moveTo(800, 96); ctx.lineTo(800, h); ctx.stroke();
  ctx.font = '500 20px monospace'; ctx.fillStyle = '#9cb0b5'; ctx.fillText('●  ●  ●', 24, 34);
  ctx.fillStyle = '#6e8187'; ctx.fillText('ANVI LAB  /  PROJECTS', 485, 34);
  ctx.fillStyle = color; ctx.fillText('● LIVE', 1165, 34);
  ctx.font = '500 16px monospace'; ctx.fillStyle = '#688087'; ctx.fillText('EXPLORER', 22, 88);
  ['src', 'models', 'data', 'notebooks'].forEach((folder, i) => { ctx.fillStyle = '#526970'; ctx.fillText(`⌄  ${folder}`, 22, 132 + i * 38); });
  ctx.fillStyle = '#d8e5e6'; ctx.fillText(`   ◈ ${project.terminal.file}`, 22, 300);
  ctx.fillStyle = '#283b42'; ctx.fillRect(205, 54, 230, 42); ctx.fillStyle = '#cfdddf'; ctx.fillText(project.terminal.file, 225, 81);
  ctx.fillStyle = color; ctx.fillRect(205, 94, 230, 2);

  const keywords = ['from', 'import', 'return', 'for', 'in', 'if'];
  project.terminal.code.forEach((line, i) => {
    const y = 145 + i * 56;
    ctx.fillStyle = '#3f545b'; ctx.fillText(String(i + 1).padStart(2, '0'), 226, y);
    ctx.fillStyle = keywords.some(key => line.trim().startsWith(key)) ? '#c18bff' : i % 3 === 1 ? '#76f7d4' : '#cad8db';
    ctx.fillText(line, 278, y);
    if (i === Math.floor((time * 1.6) % project.terminal.code.length)) { ctx.fillStyle = color + '18'; ctx.fillRect(260, y - 24, 520, 34); ctx.fillStyle = color; ctx.fillRect(260, y - 24, 3, 34); }
  });

  ctx.fillStyle = '#0d1b21'; ctx.fillRect(225, 510, 555, 178); ctx.strokeStyle = '#1b343c'; ctx.strokeRect(225, 510, 555, 178);
  ctx.fillStyle = '#648087'; ctx.fillText('TERMINAL   OUTPUT   DEBUG CONSOLE', 246, 543);
  ctx.fillStyle = color; ctx.fillRect(246, 558, 118, 2);
  ctx.font = '500 15px monospace';
  project.terminal.logs.forEach((log, i) => { ctx.fillStyle = i === 2 ? color : '#789097'; ctx.fillText(`${i === 2 ? '✓' : '›'} ${log}`, 247, 593 + i * 29); });

  drawProjectOutput(ctx, project.terminal.mode, color, time);
  ctx.fillStyle = '#07181b'; ctx.fillRect(0, h - 25, w, 25); ctx.fillStyle = color; ctx.fillText('◉ main*', 20, h - 7); ctx.fillStyle = '#658087'; ctx.fillText('Python 3.11     UTF-8     Ln 12, Col 4', 880, h - 7);
}

function LiveIDE({ project, color }) {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas'); canvas.width = 1280; canvas.height = 720;
    const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 8;
    return map;
  }, []);
  useFrame((state) => { drawIDE(texture.image.getContext('2d'), project, color, state.clock.elapsedTime); texture.needsUpdate = true; });
  return <mesh position={[0, 1.78, .102]}><planeGeometry args={[5.28, 3.02]} /><meshBasicMaterial map={texture} toneMapped={false} /></mesh>;
}

function Laptop({ progress = 0, activeProject = 0, project }) {
  const laptop = useRef();
  const lid = useRef();
  const screenGlow = useRef();
  const colors = ['#76f7d4', '#9f8cff', '#ff8fbd', '#78b9ff'];
  const openAmount = THREE.MathUtils.smoothstep(progress, .02, .2);
  const diveAmount = THREE.MathUtils.smoothstep(progress, .72, .98);

  useFrame((state, delta) => {
    const targetLid = Math.PI * .47 * (1 - openAmount);
    lid.current.rotation.x = THREE.MathUtils.damp(lid.current.rotation.x, targetLid, 5, delta);
    laptop.current.rotation.y = THREE.MathUtils.damp(laptop.current.rotation.y, -.25 + activeProject * .12, 3, delta);
    laptop.current.rotation.x = THREE.MathUtils.damp(laptop.current.rotation.x, -.08 + diveAmount * .2, 3, delta);
    laptop.current.position.z = THREE.MathUtils.damp(laptop.current.position.z, diveAmount * 2.2, 3, delta);
    laptop.current.position.y = Math.sin(state.clock.elapsedTime * .7) * .035 - .65;
    screenGlow.current.material.opacity = .5 + Math.sin(state.clock.elapsedTime * 2) * .08;
  });

  return (
    <group ref={laptop} rotation={[-.08, -.25, 0]} position={[0, -.65, 0]} scale={1.08}>
      <group>
        <mesh castShadow><boxGeometry args={[5.8, .18, 3.55]} /><meshStandardMaterial color="#858d91" metalness={.9} roughness={.23} /></mesh>
        <mesh position={[0, .101, -.1]}><boxGeometry args={[4.45, .016, 2.42]} /><meshStandardMaterial color="#11171a" metalness={.35} roughness={.4} /></mesh>
        {Array.from({ length: 6 }).map((_, row) => Array.from({ length: 12 }).map((__, col) => <mesh key={`${row}-${col}`} position={[-2.05 + col * .37, .12, -1.08 + row * .35]}><boxGeometry args={[.27, .025, .22]} /><meshStandardMaterial color="#20292c" roughness={.45} /></mesh>))}
        <mesh position={[0, .12, 1.15]}><boxGeometry args={[1.7, .025, .82]} /><meshStandardMaterial color="#697175" metalness={.65} roughness={.28} /></mesh>
      </group>
      <group ref={lid} position={[0, .08, -1.7]} rotation={[Math.PI * .47, 0, 0]}>
        <mesh position={[0, 1.78, 0]} castShadow><boxGeometry args={[5.8, 3.55, .16]} /><meshStandardMaterial color="#737c81" metalness={.92} roughness={.2} /></mesh>
        <mesh ref={screenGlow} position={[0, 1.78, .09]}><planeGeometry args={[5.45, 3.18]} /><meshBasicMaterial color={colors[activeProject]} transparent opacity={.12} /></mesh>
        <LiveIDE project={project} color={colors[activeProject]} />
        {Array.from({ length: 12 }).map((_, index) => <Float key={index} speed={1 + index % 3} floatIntensity={.2}><mesh position={[-2.2 + (index % 6) * .85, .65 + Math.floor(index / 6) * 2.1, .25 + (index % 4) * .1]}><boxGeometry args={[.035, .035, .035]} /><meshBasicMaterial color={index % 3 === 0 ? '#ffffff' : colors[activeProject]} /></mesh></Float>)}
        <mesh position={[0, 3.47, 0]}><boxGeometry args={[.08, .08, .04]} /><meshBasicMaterial color="#0d1315" /></mesh>
      </group>
    </group>
  );
}

export function LaptopJourney({ progress = 0, activeProject = 0, project }) {
  return (
    <Canvas shadows dpr={[1, 1.6]} camera={{ position: [0, 1.1, 10.5], fov: 38 }} gl={{ antialias: true, alpha: true }}>
      <fog attach="fog" args={['#05090d', 10, 20]} /><ambientLight intensity={.55} />
      <spotLight position={[3, 8, 6]} intensity={70} angle={.45} penumbra={1} castShadow color="#d9fff8" />
      <pointLight position={[-5, 1, 4]} intensity={35} color="#8c76ff" />
      <Suspense fallback={null}><Laptop progress={progress} activeProject={activeProject} project={project} /><Sparkles count={45} scale={[12, 7, 8]} size={1.2} speed={.2} color="#76f7d4" /></Suspense>
      <gridHelper args={[28, 28, '#173f40', '#0b2227']} position={[0, -1.52, 0]} />
    </Canvas>
  );
}
