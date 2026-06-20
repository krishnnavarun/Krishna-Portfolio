import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function GlassSphere({ scrollProgress, activeSection }) {
  const groupRef = useRef()
  const sphereRef = useRef()
  const innerTextRef = useRef()
  
  // Track mouse coordinates for subtle parallax tilt
  const mouse = useRef({ x: 0, y: 0 })
  
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates to [-0.5, 0.5]
      mouse.current.x = (e.clientX / window.innerWidth) - 0.5
      mouse.current.y = (e.clientY / window.innerHeight) - 0.5
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state, delta) => {
    if (!groupRef.current) return

    const time = state.clock.getElapsedTime()
    
    // Slow ambient rotation for the glass sphere
    if (sphereRef.current) {
      sphereRef.current.rotation.y = time * 0.15
      sphereRef.current.rotation.x = Math.sin(time * 0.1) * 0.1
    }

    // Dynamic targets based on activeSection scroll
    let targetX = 0
    let targetY = 0
    let targetZ = 0
    let targetScale = 1.4

    if (activeSection === 0) {
      // Hero: centered, prominent
      targetX = 0
      targetY = 0
      targetZ = 0
      targetScale = 1.5
    } else if (activeSection === 1) {
      // About: slightly offset to the right, showing profile details on the left
      targetX = 1.5
      targetY = 0
      targetZ = -0.5
      targetScale = 1.3
    } else if (activeSection === 2) {
      // Skills: recedes to the left background to let the technology galaxy shine
      targetX = -2.5
      targetY = 1.2
      targetZ = -2
      targetScale = 0.9
    } else if (activeSection === 3) {
      // Projects: moves to background center as a giant soft background lens
      targetX = 0
      targetY = 0.5
      targetZ = -4
      targetScale = 2.0
    } else if (activeSection === 4) {
      // Achievements: moves far right
      targetX = 2.0
      targetY = -1.0
      targetZ = -2
      targetScale = 0.8
    } else if (activeSection === 5) {
      // Leetcode: subtle top right lens
      targetX = 2.2
      targetY = 1.5
      targetZ = -1.5
      targetScale = 0.7
    } else if (activeSection === 6) {
      // Experience: subtle background
      targetX = -2.2
      targetY = -0.5
      targetZ = -2
      targetScale = 0.8
    } else {
      // Contact: fades out or goes deep back center
      targetX = 0
      targetY = 0
      targetZ = -5
      targetScale = 2.5
    }

    // Apply mouse parallax (subtle sway)
    const mouseSwayX = mouse.current.x * 0.5
    const mouseSwayY = -mouse.current.y * 0.5
    
    // Smooth interpolation (lerp) toward target properties
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX + mouseSwayX, 0.08)
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY + mouseSwayY, 0.08)
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.08)
    
    const currentScale = groupRef.current.scale.x
    const nextScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.08)
    groupRef.current.scale.set(nextScale, nextScale, nextScale)

    // Inner text faces the camera slightly but sways
    if (innerTextRef.current) {
      innerTextRef.current.rotation.y = Math.sin(time * 0.3) * 0.15
    }
  })

  // Procedural rings representing orbital paths around the sphere
  const rings = useMemo(() => {
    const items = []
    for (let i = 0; i < 3; i++) {
      const radius = 1.5 + i * 0.2
      const segments = 64
      const points = []
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2
        points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius))
      }
      items.push({
        geometry: new THREE.BufferGeometry().setFromPoints(points),
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        speed: 0.15 + i * 0.1
      })
    }
    return items
  }, [])

  // Secondary sub-component for orbit trails
  const OrbitTrails = () => {
    const trailsRef = useRef([])
    useFrame((state) => {
      const time = state.clock.getElapsedTime()
      trailsRef.current.forEach((trail, idx) => {
        if (trail) {
          trail.rotation.y = time * rings[idx].speed
          trail.rotation.x = Math.sin(time * 0.05 + idx) * 0.2
        }
      })
    })

    return (
      <group>
        {rings.map((ring, idx) => (
          <group 
            key={idx} 
            ref={el => trailsRef.current[idx] = el}
            rotation={ring.rotation}
          >
            <line geometry={ring.geometry}>
              <lineBasicMaterial 
                color="#7C9A92" 
                transparent={true} 
                opacity={0.12} 
                linewidth={1}
              />
            </line>
          </group>
        ))}
      </group>
    )
  }

  return (
    <group ref={groupRef}>
      {/* Dynamic ambient halo trails orbiting the sphere */}
      <OrbitTrails />

      {/* Main Glass Sphere container */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1, 64, 64]} />
        
        {/* Apple Vision Pro/Stripe level Glassmorphic Material */}
        <MeshTransmissionMaterial
          backside={true}
          samples={16}
          thickness={0.6}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.95}
          ior={1.25} // Refractive index of thin glass
          chromaticAberration={0.06} // Sleek rainbow edge split
          anisotropicBlur={0.1}
          distortion={0.15}
          distortionScale={0.2}
          temporalDistortion={0.05}
          color="#FAFAF8" // Warm Pearl White base tint
        />
      </mesh>

      {/* 3D Typographic text nested directly inside the refractive glass sphere */}
      <group ref={innerTextRef}>
        <Text
          position={[0, 0.08, -0.15]}
          fontSize={0.12}
          font="https://fonts.gstatic.com/s/outfit/v11/QId5Xr2x118dBMR5-E1M.woff" // Outfit Medium font binary
          color="#31574F" // Deep Emerald
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.08}
          maxWidth={1.5}
        >
          KRISHNA VARUN
        </Text>
        <Text
          position={[0, -0.08, -0.15]}
          fontSize={0.055}
          font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhjp-Ek-_g.woff" // Inter Light font binary
          color="#C19A6B" // Copper Gold
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.12}
          opacity={0.8}
        >
          SOFTWARE ENGINEER
        </Text>
      </group>
    </group>
  )
}

export default GlassSphere
