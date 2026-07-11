import React, { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

function SkillsGalaxy() {
  const groupRef = useRef()
  const [hoveredNode, setHoveredNode] = useState(null)

  // Define skills categorized on tilted 3D orbits:
  // radius: orbit size, speed: velocity, phase: start angle, tiltX/tiltZ: angles of orbital inclination
  const skills = useMemo(() => [
    // Languages (Orbit 1, radius 1.1, tiltX: 0.3, tiltZ: 0.1)
    { name: 'JavaScript', radius: 1.1, speed: 0.4, phase: 0, tiltX: 0.3, tiltZ: 0.1 },
    { name: 'Python', radius: 1.1, speed: 0.4, phase: Math.PI / 2, tiltX: 0.3, tiltZ: 0.1 },
    { name: 'HTML', radius: 1.1, speed: 0.4, phase: Math.PI, tiltX: 0.3, tiltZ: 0.1 },
    { name: 'CSS', radius: 1.1, speed: 0.4, phase: 3 * Math.PI / 2, tiltX: 0.3, tiltZ: 0.1 },

    // Frontend (Orbit 2, radius 1.7, tiltX: -0.4, tiltZ: -0.2)
    { name: 'ReactJS', radius: 1.7, speed: -0.32, phase: 0, tiltX: -0.4, tiltZ: -0.2 },
    { name: 'TailwindCSS', radius: 1.7, speed: -0.32, phase: 2 * Math.PI / 3, tiltX: -0.4, tiltZ: -0.2 },
    { name: 'Bootstrap', radius: 1.7, speed: -0.32, phase: 4 * Math.PI / 3, tiltX: -0.4, tiltZ: -0.2 },

    // Backend (Orbit 3, radius 2.3, tiltX: 0.5, tiltZ: 0.3)
    { name: 'NodeJS', radius: 2.3, speed: 0.25, phase: 0, tiltX: 0.5, tiltZ: 0.3 },
    { name: 'ExpressJS', radius: 2.3, speed: 0.25, phase: 2 * Math.PI / 3, tiltX: 0.5, tiltZ: 0.3 },
    { name: 'REST APIs', radius: 2.3, speed: 0.25, phase: 4 * Math.PI / 3, tiltX: 0.5, tiltZ: 0.3 },

    // Database & Cloud (Orbit 4, radius 2.9, tiltX: -0.6, tiltZ: 0.4)
    { name: 'MongoDB', radius: 2.9, speed: -0.2, phase: 0, tiltX: -0.6, tiltZ: 0.4 },
    { name: 'MySQL', radius: 2.9, speed: -0.2, phase: 2 * Math.PI / 5, tiltX: -0.6, tiltZ: 0.4 },
    { name: 'AWS', radius: 2.9, speed: -0.2, phase: 4 * Math.PI / 5, tiltX: -0.6, tiltZ: 0.4 },
    { name: 'Render', radius: 2.9, speed: -0.2, phase: 6 * Math.PI / 5, tiltX: -0.6, tiltZ: 0.4 },
    { name: 'Vercel', radius: 2.9, speed: -0.2, phase: 8 * Math.PI / 5, tiltX: -0.6, tiltZ: 0.4 },

    // Tools & DevOps (Orbit 5, radius 3.5, tiltX: 0.7, tiltZ: -0.5)
    { name: 'Git', radius: 3.5, speed: 0.15, phase: 0, tiltX: 0.7, tiltZ: -0.5 },
    { name: 'GitHub', radius: 3.5, speed: 0.15, phase: 2 * Math.PI / 5, tiltX: 0.7, tiltZ: -0.5 },
    { name: 'Docker', radius: 3.5, speed: 0.15, phase: 4 * Math.PI / 5, tiltX: 0.7, tiltZ: -0.5 },
    { name: 'Postman', radius: 3.5, speed: 0.15, phase: 6 * Math.PI / 5, tiltX: 0.7, tiltZ: -0.5 },
    { name: 'GitHub Actions', radius: 3.5, speed: 0.15, phase: 8 * Math.PI / 5, tiltX: 0.7, tiltZ: -0.5 }
  ], [])

  const nodeRefs = useRef([])

  useFrame((state) => {
    if (!groupRef.current) return

    const time = state.clock.getElapsedTime()
    
    // Slow global rotation of the entire particle cloud on y-axis
    groupRef.current.rotation.y = time * 0.04
    
    // Calculate and apply 3D tilted orbit math for each tag
    skills.forEach((skill, idx) => {
      const node = nodeRefs.current[idx]
      if (node) {
        const angle = time * skill.speed + skill.phase
        
        // 1. Raw flat orbit in the XZ plane
        const rawX = Math.cos(angle) * skill.radius
        const rawZ = Math.sin(angle) * skill.radius
        
        // 2. Rotate around X-axis by tiltX
        const cosX = Math.cos(skill.tiltX)
        const sinX = Math.sin(skill.tiltX)
        const x1 = rawX
        const y1 = -rawZ * sinX
        const z1 = rawZ * cosX
        
        // 3. Rotate around Z-axis by tiltZ
        const cosZ = Math.cos(skill.tiltZ)
        const sinZ = Math.sin(skill.tiltZ)
        const x2 = x1 * cosZ - y1 * sinZ
        const y2 = x1 * sinZ + y1 * cosZ
        
        // Position node in full 3D space
        node.position.set(x2, y2, z1)
      }
    })
  })

  return (
    <group ref={groupRef} scale={[1, 1, 1]} position={[0, 0, 0]}>
      {/* Central Core Element */}
      <mesh>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshBasicMaterial color="#0E2431" transparent opacity={0.06} wireframe />
      </mesh>
      <mesh scale={[0.8, 0.8, 0.8]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshPhysicalMaterial 
          color="#0E2431" 
          emissive="#3F51B5"
          emissiveIntensity={1.0}
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Central Core HTML Typography Label */}
      <Html distanceFactor={5.5} center>
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.68rem',
          fontWeight: 700,
          color: '#FAFAF8',
          background: '#0E2431',
          padding: '6px 14px',
          borderRadius: '20px',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 15px rgba(14, 36, 49, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          pointerEvents: 'none',
          textTransform: 'uppercase',
          letterSpacing: '0.08em'
        }}>
          FULL STACK DEVELOPER
        </div>
      </Html>

      {/* Orbiting tags distributed inside the 3D space */}
      {skills.map((skill, idx) => (
        <group key={idx} ref={el => nodeRefs.current[idx] = el}>
          <Html 
            distanceFactor={5.5} 
            center
            style={{
              pointerEvents: 'auto'
            }}
          >
            <div 
              onMouseEnter={() => setHoveredNode(idx)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{
                background: hoveredNode === idx ? '#0E2431' : 'rgba(250, 250, 248, 0.85)',
                color: hoveredNode === idx ? '#FAFAF8' : '#222222',
                border: hoveredNode === idx ? '1px solid #3F51B5' : '1px solid rgba(14, 36, 49, 0.15)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: '6px 12px',
                borderRadius: '30px',
                fontSize: '0.78rem',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                whiteSpace: 'nowrap',
                boxShadow: hoveredNode === idx 
                  ? '0 6px 12px rgba(14, 36, 49, 0.15)' 
                  : '0 2px 4px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: hoveredNode === idx ? 'scale(1.1)' : 'scale(1.0)',
                cursor: 'pointer'
              }}
            >
              {skill.name}
            </div>
          </Html>
        </group>
      ))}
    </group>
  )
}

export default SkillsGalaxy
