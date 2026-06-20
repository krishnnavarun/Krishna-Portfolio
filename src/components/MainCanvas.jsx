import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr } from '@react-three/drei'
import GlassSphere from './3D/GlassSphere'
import ParticleField from './3D/ParticleField'

function MainCanvas({ scrollProgress, activeSection }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      dpr={[1, 2]} // Performance optimized for high-res screens
      gl={{ 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true
      }}
      style={{ pointerEvents: 'none' }} // HTML clicks can pass through by default
    >
      {/* Light setup for luxury glass reflections */}
      <ambientLight intensity={1.2} color="#FAFAF8" />
      <directionalLight 
        position={[5, 10, 3]} 
        intensity={2.0} 
        color="#7C9A92" // Sage Green hue
        castShadow={false}
      />
      <pointLight position={[-5, -5, -2]} intensity={1.5} color="#C19A6B" /> {/* Copper Gold accent */}
      <pointLight position={[0, 0, 8]} intensity={1.0} color="#31574F" />   {/* Deep Emerald fill */}

      <Suspense fallback={null}>
        {/* Subtle, floating background ambient particles */}
        <ParticleField scrollProgress={scrollProgress} />
        
        {/* The central refractive Glass Sphere */}
        <GlassSphere scrollProgress={scrollProgress} activeSection={activeSection} />
      </Suspense>


      {/* Adaptive Dpr adjusts rendering quality on drag/movement to stay at 60fps */}
      <AdaptiveDpr />
    </Canvas>
  )
}

export default MainCanvas
