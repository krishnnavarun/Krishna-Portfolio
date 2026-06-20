import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import SkillsGalaxy from '../3D/SkillsGalaxy'

function Skills() {
  const categories = [
    { title: "Languages", techs: ["JavaScript", "Python", "HTML", "CSS"] },
    { title: "Frontend", techs: ["ReactJS", "TailwindCSS", "Bootstrap"] },
    { title: "Backend", techs: ["NodeJS", "ExpressJS", "REST APIs"] },
    { title: "Database & Cloud", techs: ["MongoDB", "MySQL", "AWS", "Render", "Vercel"] },
    { title: "Tools & DevOps", techs: ["Git", "GitHub", "Docker", "Postman", "GitHub Actions"] }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <div className="grid-2" style={{ width: '100%', zIndex: 10, alignItems: 'center' }}>
      {/* Left Column: Clean, Scannable Skills List */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <motion.span variants={childVariants} className="section-tag">CAPABILITIES</motion.span>
        <motion.h2 variants={childVariants} className="section-title gradient-text">Technical Skills</motion.h2>
        <motion.p 
          variants={childVariants}
          style={{
            marginBottom: '32px',
            fontSize: '1.05rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6
          }}
        >
          Technologies and tools I use to build modern full-stack applications.
        </motion.p>

        <motion.div 
          variants={childVariants}
          className="glass-panel" 
          style={{
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            border: '1px solid rgba(49, 87, 79, 0.08)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.02)'
          }}
        >
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              variants={childVariants}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '8px',
                borderBottom: idx < categories.length - 1 ? '1px solid rgba(49, 87, 79, 0.08)' : 'none',
                paddingBottom: idx < categories.length - 1 ? '16px' : '0'
              }}
            >
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}>
                {cat.title}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.techs.map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="glass-card"
                    style={{
                      background: 'rgba(49, 87, 79, 0.03)',
                      color: 'var(--color-charcoal)',
                      padding: '5px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      border: '1px solid rgba(49, 87, 79, 0.08)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Column: Local Canvas for the Orbiting Galaxy */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{
          height: '480px',
          width: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'grab'
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
        >
          <ambientLight intensity={1.5} color="#FAFAF8" />
          <directionalLight position={[2, 5, 2]} intensity={1.5} color="#7C9A92" />
          <pointLight position={[-3, -3, -2]} intensity={1.2} color="#C19A6B" />
          <Suspense fallback={null}>
            <SkillsGalaxy />
          </Suspense>
        </Canvas>
      </motion.div>
    </div>
  )
}

export default Skills
