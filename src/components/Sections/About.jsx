import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Brain, Code } from 'lucide-react'

function About({ activeSection }) {
  const containerRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  // Mouse move listener to calculate tilt details
  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const card = containerRef.current
    const rect = card.getBoundingClientRect()
    
    // Normalize coordinates relative to card center
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    // Convert to rotation degrees (tilt max ~ 12 deg)
    const factor = 18
    setRotateX(-y / factor)
    setRotateY(x / factor)
  }

  const handleMouseLeave = () => {
    // Reset rotation on leave
    setRotateX(0)
    setRotateY(0)
  }

  // Individual item details
  const details = [
    { icon: <GraduationCap size={22} color="#FF7B00" />, label: "CSE Student", desc: "Specializing in Computer Science & Engineering, building computational logic." },
    { icon: <Award size={22} color="#FF7B00" />, label: "Sri Eshwar College of Engineering", desc: "Pursuing Bachelor of Engineering, Class of 2024-2028." },
    { icon: <Award size={22} color="#FF7B00" />, label: "8.2 CGPA (IIIrd Sem)", desc: "Consistently maintaining academic excellence and top performance." },
    { icon: <Code size={22} color="#FF7B00" />, label: "MERN Stack Developer", desc: "Expert in building complex full-stack web applications from database to client UI." },
    { icon: <Brain size={22} color="#FF7B00" />, label: "AI Enthusiast", desc: "Integrating Large Language Models and automated neural agent workflows." }
  ]

  return (
    <div className="grid-2" style={{ width: '100%', zIndex: 10 }}>
      {/* Left Column: Context Text */}
      <motion.div 
        initial={{ opacity: 0, x: -45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <span className="section-tag">BACKGROUND</span>
        <h2 className="section-title gradient-text">About Me</h2>
        <p style={{ marginBottom: '20px', fontSize: '1.05rem', color: '#555555' }}>
          I'm Krishna Varun K, a Computer Science and Engineering student at Sri Eshwar College of Engineering. I build full-stack web applications using the MERN stack and enjoy solving real-world problems through scalable and user-focused software. Currently, I am strengthening my skills in Data Structures & Algorithms, System Design, Cloud Computing, and AI.
        </p>
      </motion.div>

      {/* Right Column: Holographic Parallax Card */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 1000
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="glass-panel"
          style={{
            width: '100%',
            maxWidth: '520px',
            padding: '35px 30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            position: 'relative',
            cursor: 'pointer'
          }}
        >
          {/* Subtle architectural glass reflection highlights */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
            pointerEvents: 'none',
            borderRadius: '20px 20px 0 0'
          }} />

          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            color: 'var(--color-emerald)',
            borderBottom: '1px solid rgba(14, 36, 49, 0.12)',
            paddingBottom: '12px',
            marginBottom: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }}></span>
            CRITERIA & CREDENTIALS
          </h3>

          {details.map((item, index) => (
            <motion.div 
              key={index}
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div style={{
                background: 'rgba(14, 36, 49, 0.05)',
                padding: '10px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(14, 36, 49, 0.08)'
              }}>
                {item.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.98rem',
                  color: 'var(--color-charcoal)'
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'var(--color-text-muted)',
                  marginTop: '2px'
                }}>
                  {item.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default About
