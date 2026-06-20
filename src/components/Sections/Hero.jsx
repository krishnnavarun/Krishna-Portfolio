import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'

function Hero({ activeSection }) {
  const nameLetters = "KRISHNA VARUN K".split("")
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  }
  
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.5,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  }

  const subVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
      minHeight: '80vh',
      zIndex: 10
    }}>
      {/* Decorative tag */}
      <motion.span 
        initial={{ opacity: 0, letterSpacing: '0.05em' }}
        animate={{ opacity: 1, letterSpacing: '0.15em' }}
        transition={{ duration: 1.2 }}
        className="section-tag"
      >
        PORTFOLIO INTRO
      </motion.span>

      {/* Main typography (Name assembles from particles) */}
      <motion.h1 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
          fontWeight: 800,
          color: '#31574F', // Deep Emerald
          lineHeight: 1.05,
          textTransform: 'uppercase',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.02em',
          marginBottom: '10px'
        }}
      >
        {nameLetters.map((char, index) => (
          <motion.span 
            key={index} 
            variants={letterVariants}
            style={{ 
              display: 'inline-block',
              whiteSpace: char === " " ? "pre" : "normal"
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Roles Subheading */}
      <motion.div
        variants={subVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '25px',
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          fontWeight: 500,
          color: '#C19A6B' // Copper Gold
        }}
      >
        <span>Software Engineer</span>
        <span style={{ opacity: 0.4 }}>•</span>
        <span>MERN Developer</span>
        <span style={{ opacity: 0.4 }}>•</span>
        <span>AI Product Builder</span>
      </motion.div>

      {/* Brief Pitch statement */}
      <motion.p
        variants={subVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: '620px',
          fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
          color: '#555555',
          fontFamily: "'Inter', sans-serif",
          marginBottom: '40px',
          lineHeight: 1.6
        }}
      >
        Building scalable products, intelligent systems and production-ready applications.
      </motion.p>

      {/* Interactive CTA buttons */}
      <motion.div
        variants={subVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <button 
          onClick={() => handleScrollTo('projects')}
          className="btn-primary"
        >
          View Projects <ArrowRight size={18} />
        </button>
        <button 
          onClick={() => handleScrollTo('contact')}
          className="btn-secondary"
        >
          Contact Me <MessageSquare size={18} />
        </button>
      </motion.div>
    </div>
  )
}

export default Hero
