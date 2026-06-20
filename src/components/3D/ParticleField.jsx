import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField({ scrollProgress }) {
  const pointsRef = useRef()
  
  const count = 350
  
  // Generate random positions and velocities for particles
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const spd = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
      // Position particles in a large bounding box surrounding the view
      pos[i * 3] = (Math.random() - 0.5) * 15      // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15  // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10  // Z
      
      spd[i] = 0.05 + Math.random() * 0.15          // Floating speed
    }
    
    return [pos, spd]
  }, [])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    
    const time = state.clock.getElapsedTime()
    const positionsArray = pointsRef.current.geometry.attributes.position.array
    
    // Slow ambient rotation of the entire particle field
    pointsRef.current.rotation.y = time * 0.015
    pointsRef.current.rotation.x = time * 0.005

    // Add scroll-linked translation for subtle depth parallax
    pointsRef.current.position.y = -scrollProgress * 2.5
    
    // Animate individual particles slightly (floating wave)
    for (let i = 0; i < count; i++) {
      const idx = i * 3 + 1 // Y coordinate
      // Apply a wave function based on time and individual speed
      positionsArray[idx] += Math.sin(time * speeds[i] + i) * 0.002
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  // Create a clean circular particle texture procedurally to keep assets light
  const particleTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 16
    canvas.height = 16
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8)
    gradient.addColorStop(0, 'rgba(124, 154, 146, 0.8)') // Sage Green core
    gradient.addColorStop(0.3, 'rgba(124, 154, 146, 0.4)')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 16, 16)
    
    const texture = new THREE.CanvasTexture(canvas)
    return texture
  }, [])

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        map={particleTexture}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  )
}

export default ParticleField
