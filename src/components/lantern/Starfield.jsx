'use client';

/* ============================================================
   Starfield.jsx — Three.js Night Sky & Floating Sky Lanterns
   ============================================================ */

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';

const MEDITATION_DURATION = 60;

/* ============================================================
   LanternSwarm — Thousands of background sky lanterns
   ============================================================ */
function LanternSwarm({ count = 3000, radius = 150 }) {
  const meshRefBody = useRef();
  const meshRefDome = useRef();
  const meshRefRing = useRef();
  const meshRefCross1 = useRef();
  const meshRefCross2 = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tempColor = useMemo(() => new THREE.Color(), []);
  
  const lanterns = useMemo(() => {
    return Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 0.5) * radius; 
      const isFar = r > radius * 0.6; // Lanterns far away in the background

      return {
        x: Math.cos(angle) * r,
        y: -40 + Math.random() * 190, // Spawn above ground level
        z: -50 + Math.sin(angle) * r,
        // Far lanterns move slightly faster sometimes to look like they are "firing" up
        speed: isFar ? 0.8 + Math.random() * 2.0 : 0.4 + Math.random() * 1.5,
        scale: 0.05 + Math.random() * 0.15,
        swaySpeed: 0.2 + Math.random() * 0.8,
        swayOffset: Math.random() * Math.PI * 2,
        
        // Firing / Flaring visual properties
        isFar: isFar,
        fireOffset: Math.random() * 20, // Random time offset for firing
        fireDuration: 0.5 + Math.random() * 1.5, // How long the flare lasts
        baseColor: new THREE.Color("#ffaa00"),
        fireColor: new THREE.Color(Math.random() > 0.5 ? "#ffffff" : "#ffcc00"),
      };
    });
  }, [count, radius]);

  useEffect(() => {
    if (!meshRefBody.current || !meshRefDome.current) return;
    // Set initial colors
    lanterns.forEach((data, i) => {
      meshRefBody.current.setColorAt(i, data.baseColor);
      meshRefDome.current.setColorAt(i, data.baseColor);
    });
    meshRefBody.current.instanceColor.needsUpdate = true;
    meshRefDome.current.instanceColor.needsUpdate = true;
  }, [lanterns]);

  useFrame((state) => {
    if (!meshRefBody.current || !meshRefDome.current) return;
    const time = state.clock.getElapsedTime();
    let needsColorUpdate = false;
    
    lanterns.forEach((data, i) => {
      // Movement
      let currentY = data.y + time * data.speed;
      if (currentY > 150) {
        currentY = -40 + ((currentY - 150) % 190);
      }
      const swayX = Math.sin(time * data.swaySpeed + data.swayOffset) * 0.5;
      
      // Set matrix for Body
      dummy.position.set(data.x + swayX, currentY, data.z);
      dummy.rotation.set(Math.sin(time) * 0.1, time * 0.2, swayX * 0.2);
      dummy.scale.setScalar(data.scale);
      dummy.updateMatrix();
      meshRefBody.current.setMatrixAt(i, dummy.matrix);

      // Translate local Y to place the dome perfectly on top of the body
      dummy.translateY(1.1 * data.scale);
      dummy.updateMatrix();
      meshRefDome.current.setMatrixAt(i, dummy.matrix);

      // Translate down to place the ring and wire crosses perfectly at the bottom
      dummy.translateY(-2.2 * data.scale); // Go from top of cylinder (+1.1) to bottom (-1.1)
      dummy.updateMatrix();
      if (meshRefCross1.current) meshRefCross1.current.setMatrixAt(i, dummy.matrix);

      dummy.rotateY(Math.PI / 2);
      dummy.updateMatrix();
      if (meshRefCross2.current) meshRefCross2.current.setMatrixAt(i, dummy.matrix);

      dummy.rotateX(Math.PI / 2);
      dummy.updateMatrix();
      if (meshRefRing.current) meshRefRing.current.setMatrixAt(i, dummy.matrix);

      // Firing Visual Effect (Distant lanterns occasionally flare up brightly)
      if (data.isFar) {
        const cycle = (time + data.fireOffset) % 12; // Flare every 12 seconds
        if (cycle < data.fireDuration) {
          const intensity = Math.sin((cycle / data.fireDuration) * Math.PI);
          tempColor.copy(data.baseColor).lerp(data.fireColor, intensity);
          meshRefBody.current.setColorAt(i, tempColor);
          meshRefDome.current.setColorAt(i, tempColor);
          needsColorUpdate = true;
        } else if (cycle < data.fireDuration + 0.1) {
          // Snap back to base color right after the flare finishes
          meshRefBody.current.setColorAt(i, data.baseColor);
          meshRefDome.current.setColorAt(i, data.baseColor);
          needsColorUpdate = true;
        }
      }
    });
    
    meshRefBody.current.instanceMatrix.needsUpdate = true;
    meshRefDome.current.instanceMatrix.needsUpdate = true;
    if (meshRefRing.current) meshRefRing.current.instanceMatrix.needsUpdate = true;
    if (meshRefCross1.current) meshRefCross1.current.instanceMatrix.needsUpdate = true;
    if (meshRefCross2.current) meshRefCross2.current.instanceMatrix.needsUpdate = true;
    
    if (needsColorUpdate) {
      meshRefBody.current.instanceColor.needsUpdate = true;
      meshRefDome.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <group>
      <instancedMesh ref={meshRefBody} args={[null, null, count]}>
        <cylinderGeometry args={[0.9, 0.6, 2.2, 8, 1, true]} />
        <meshBasicMaterial transparent opacity={0.8} side={THREE.DoubleSide} toneMapped={false} />
      </instancedMesh>
      <instancedMesh ref={meshRefDome} args={[null, null, count]}>
        <sphereGeometry args={[0.9, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshBasicMaterial transparent opacity={0.8} side={THREE.DoubleSide} toneMapped={false} />
      </instancedMesh>
      <instancedMesh ref={meshRefRing} args={[null, null, count]}>
        <torusGeometry args={[0.6, 0.04, 4, 12]} />
        <meshBasicMaterial color="#2a1200" toneMapped={false} />
      </instancedMesh>
      <instancedMesh ref={meshRefCross1} args={[null, null, count]}>
        <boxGeometry args={[1.2, 0.04, 0.04]} />
        <meshBasicMaterial color="#111" toneMapped={false} />
      </instancedMesh>
      <instancedMesh ref={meshRefCross2} args={[null, null, count]}>
        <boxGeometry args={[1.2, 0.04, 0.04]} />
        <meshBasicMaterial color="#111" toneMapped={false} />
      </instancedMesh>
    </group>
  );
}

/* ============================================================
   FireflySwarm — Ground level glowing animals
   ============================================================ */
function FireflySwarm({ count = 500, radius = 100 }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const fireflies = useMemo(() => {
    return Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 0.5) * radius; 
      
      // Magical animal colors: neon green, yellow, cyan
      const colors = ["#ccff00", "#aaff00", "#00ffcc", "#ffff00", "#ffaa00"];
      const baseColor = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);

      return {
        x: Math.cos(angle) * r,
        y: -100 + Math.random() * 50, // Confined strictly to the bottom ground level (-100 to -50)
        z: -30 + Math.sin(angle) * r,
        speedX: (Math.random() - 0.5) * 2.5,
        speedY: (Math.random() - 0.5) * 1.5,
        speedZ: (Math.random() - 0.5) * 2.5,
        scale: 0.1 + Math.random() * 0.25,
        baseColor: baseColor,
      };
    });
  }, [count, radius]);

  useEffect(() => {
    if (!meshRef.current) return;
    fireflies.forEach((data, i) => {
      meshRef.current.setColorAt(i, data.baseColor);
    });
    meshRef.current.instanceColor.needsUpdate = true;
  }, [fireflies]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    fireflies.forEach((data, i) => {
      // Erratic flight pattern
      const noiseX = Math.sin(time * data.speedX * 2.0) * 2.0;
      const noiseY = Math.cos(time * data.speedY * 1.5) * 1.5;
      const noiseZ = Math.sin(time * data.speedZ * 2.0) * 2.0;
      
      dummy.position.set(data.x + noiseX, data.y + noiseY, data.z + noiseZ);
      dummy.scale.setScalar(data.scale * (0.6 + Math.sin(time * 5 + i) * 0.4)); // twinkling size
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[0.5, 8, 8]} />
      <meshBasicMaterial transparent opacity={0.9} toneMapped={false} />
    </instancedMesh>
  );
}

/* ============================================================
   LanternBody (Reusable geometry for SkyLantern)
   ============================================================ */
function LanternBody({ paperMaterialRef, domeMaterialRef }) {
  return (
    <group>
      {/* Top Dome (Hemisphere to trap hot air) */}
      <mesh position={[0, 1.75, 0]}>
        <sphereGeometry args={[1.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          ref={domeMaterialRef}
          color="#ffedcc"
          emissive="#ff8800"
          emissiveIntensity={0.6}
          roughness={0.9}
          transparent={true}
          opacity={0.95}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Tapered Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.5, 1.0, 3.5, 32, 1, true]} />
        <meshStandardMaterial
          ref={paperMaterialRef}
          color="#ffedcc"
          emissive="#ff8800"
          emissiveIntensity={0.6}
          roughness={0.9}
          transparent={true}
          opacity={0.95}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Bottom Frame Ring */}
      <mesh position={[0, -1.75, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.0, 0.05, 8, 32]} />
        <meshStandardMaterial color="#333" roughness={0.9} />
      </mesh>
      
      {/* Wire Cross for the flame */}
      <mesh position={[0, -1.75, 0]}>
        <boxGeometry args={[2.0, 0.05, 0.05]} />
        <meshStandardMaterial color="#333" roughness={0.9} />
      </mesh>
      <mesh position={[0, -1.75, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[2.0, 0.05, 0.05]} />
        <meshStandardMaterial color="#333" roughness={0.9} />
      </mesh>
    </group>
  );
}

/* ============================================================
   SkyLantern (Main Interactive Lantern)
   ============================================================ */
function SkyLantern({ phase, thought }) {
  const groupRef = useRef();
  const fireLightRef = useRef();
  const flameMeshRef = useRef();
  const flameGlowRef = useRef();
  const htmlRef = useRef();
  const paperMaterialRef = useRef();
  const domeMaterialRef = useRef();
  const fireStateRef = useRef({ intensity: 2, scale: 1 });

  useEffect(() => {
    if (!groupRef.current) return;
    
    if (phase === 'meditation') {
      gsap.to(groupRef.current.position, {
        y: 30, z: -100,
        duration: MEDITATION_DURATION,
        ease: 'power3.out',
      });
      gsap.to(groupRef.current.scale, {
        x: 0, y: 0, z: 0,
        duration: MEDITATION_DURATION,
        ease: 'power3.out',
      });
      
      // Fire flares up rapidly, providing "power" to launch
      gsap.to(fireStateRef.current, { 
        intensity: 6, 
        scale: 2.5, 
        duration: 2, 
        ease: 'power2.out' 
      });

      // Eventually fade out as it flies far away
      gsap.to(fireStateRef.current, {
        intensity: 0,
        scale: 0,
        duration: 10,
        ease: 'power2.in',
        delay: MEDITATION_DURATION - 10,
      });

      if (htmlRef.current) {
        gsap.fromTo(htmlRef.current, 
          { opacity: 0 },
          { opacity: 0.55, duration: 2, ease: 'power2.out' }
        );
        // Fade the text out as the lantern flies away
        gsap.to(htmlRef.current, {
          opacity: 0,
          duration: 4,
          delay: 8,
          ease: 'power2.in',
        });
      }
    } else if (phase === 'resolution') {
      gsap.killTweensOf(groupRef.current.position);
      gsap.killTweensOf(groupRef.current.scale);
      groupRef.current.position.set(0, 0, -100);
      groupRef.current.scale.set(0, 0, 0);
    } else if (phase === 'input') {
      gsap.killTweensOf(groupRef.current.position);
      gsap.killTweensOf(groupRef.current.scale);
      gsap.killTweensOf(fireStateRef.current);
      
      gsap.to(groupRef.current.position, {
        x: 0, y: 0, z: 4,
        duration: 2,
        ease: 'power2.out'
      });
      gsap.to(groupRef.current.scale, {
        x: 2.5, y: 2.5, z: 2.5,
        duration: 2,
        ease: 'power2.out'
      });
      
      fireStateRef.current.intensity = 2;
      fireStateRef.current.scale = 1;
    }
  }, [phase]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;
    
    groupRef.current.position.x = Math.sin(time * 0.5) * 0.5;
    
    // Add mouse pointer interaction to the main lantern's rotation
    const targetRotX = Math.sin(time * 0.4) * 0.05 - pointer.y * 0.5;
    const targetRotY = time * 0.15 + pointer.x * 0.8;
    
    // Smooth lerp
    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.z = Math.sin(time * 0.8) * 0.05;
    
    if (fireLightRef.current) {
      // Realistic, organic fire flutter (slower, moderate variations)
      const fireNoise = Math.sin(time * 9) * 0.1 + Math.sin(time * 12) * 0.05 + Math.sin(time * 3.5) * 0.15;
      const flicker = fireNoise * (fireStateRef.current.intensity > 0 ? 1 : 0);
      
      const currentIntensity = fireStateRef.current.intensity;
      // Light increases in sync with the flame getting big
      fireLightRef.current.intensity = currentIntensity + flicker * 2; 
      
      if (flameMeshRef.current && flameGlowRef.current) {
        const currentScale = fireStateRef.current.scale;
        // Flame gets slightly big, then small
        const scaleWithFlicker = currentScale + flicker * 0.5; 
        flameMeshRef.current.scale.set(scaleWithFlicker, scaleWithFlicker * 1.3, scaleWithFlicker);
        flameGlowRef.current.scale.setScalar(scaleWithFlicker);
      }
      
      // Make the paper glow from the inside out in sync with the fire!
      const newEmissive = (currentIntensity * 0.3) + flicker * 0.5;
      if (paperMaterialRef.current) {
        paperMaterialRef.current.emissiveIntensity = newEmissive;
      }
      if (domeMaterialRef.current) {
        domeMaterialRef.current.emissiveIntensity = newEmissive;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 4]} scale={[2.5, 2.5, 2.5]}>
      <LanternBody paperMaterialRef={paperMaterialRef} domeMaterialRef={domeMaterialRef} />
      
      {/* The Fire Core */}
      <mesh ref={flameMeshRef} position={[0, -1.6, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
      
      {/* The Fire Glow / Halo */}
      <mesh ref={flameGlowRef} position={[0, -1.6, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#ff7700" transparent opacity={0.7} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </mesh>

      <pointLight ref={fireLightRef} color="#ff6600" intensity={2} distance={15} position={[0, -1, 0]} />
      {phase === 'meditation' && (
        <Html
          transform
          position={[0, 0, 1.55]}
          scale={0.35}
          rotation={[0, 0, 0]}
          zIndexRange={[100, 0]}
          style={{
            width: '280px',
            height: '160px',
            overflow: 'hidden',
            textAlign: 'center',
            color: '#3d1a00',
            fontFamily: 'Inter, sans-serif',
            fontSize: '24px',
            fontWeight: '600',
            textShadow: 'none',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div ref={htmlRef} style={{ 
            opacity: 0,
            maxHeight: '140px',
            overflow: 'hidden',
            padding: '8px',
            wordBreak: 'break-word',
          }}>
            {thought}
          </div>
        </Html>
      )}
    </group>
  );
}

/* ============================================================
   Starfield — Main Component
   ============================================================ */
export default function Starfield({ phase, thought }) {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.2} color="#a0aec0" />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#cbd5e1" />

        {/* 3D Sky Lantern */}
        {phase !== 'resolution' && <SkyLantern phase={phase} thought={thought} />}

        {/* High Sky Lanterns */}
        <LanternSwarm count={3000} radius={180} />
        
        {/* Ground Level Fireflies */}
        <FireflySwarm count={800} radius={120} />

        {/* Post-Processing */}
        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={0.2}
            mipmapBlur
            intensity={1.2}
            radius={0.8}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
