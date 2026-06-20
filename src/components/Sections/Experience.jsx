import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Server, Database, Globe, Cpu } from 'lucide-react'

function Experience({ activeSection }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <div className="grid-2" style={{ width: '100%', zIndex: 10 }}>
      {/* Left Column: Workstation Info */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <motion.span variants={childVariants} className="section-tag">WORK HISTORY</motion.span>
        <motion.h2 variants={childVariants} className="section-title gradient-text">Futuristic Workstation</motion.h2>
        
        {/* Company Card */}
        <motion.div 
          variants={childVariants}
          className="glass-panel" 
          style={{ 
            padding: '30px', 
            position: 'relative',
            border: '1px solid rgba(49, 87, 79, 0.08)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.02)'
          }}
        >
          {/* Tag indicator */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '25px',
            background: 'rgba(193, 154, 107, 0.12)',
            border: '1px solid rgba(193, 154, 107, 0.25)',
            color: 'var(--color-gold)',
            padding: '4px 10px',
            borderRadius: '20px',
            fontSize: '0.72rem',
            fontWeight: 700
          }}>
            INTERNSHIP
          </div>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{
              background: 'rgba(49, 87, 79, 0.08)',
              padding: '12px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Briefcase size={22} color="var(--color-emerald)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-emerald)', fontWeight: 700 }}>Better Tomorrow</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Full Stack MERN Developer | 2025</span>
            </div>
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
            Engineered a full-stack MERN solution at Better Tomorrow, architecting an end-to-end workflow platform that seamlessly orchestrates user requests, data tracking, and managerial approval loops.
          </p>

          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--color-gold)', letterSpacing: '0.05em', marginBottom: '10px', fontWeight: 700 }}>
            Key Contributions:
          </h4>
          <ul style={{
            listStyleType: 'none',
            fontSize: '0.88rem',
            color: '#555555',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            paddingLeft: '4px'
          }}>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--color-emerald)', fontWeight: 'bold' }}>•</span>
              Designed and built high-performance backend Node.js Restful APIs.
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--color-emerald)', fontWeight: 'bold' }}>•</span>
              Created efficient NoSQL collections, indexes, and queries in MongoDB.
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--color-emerald)', fontWeight: 'bold' }}>•</span>
              Automated builds and deployments on Vercel (Client) and Render (Server).
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Right Column: Animated Workflow Diagram */}
      <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'center', width: '100%', maxWidth: '440px' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="glass-panel" 
          style={{
            width: '100%',
            padding: '30px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(49, 87, 79, 0.08)'
          }}
        >
          <h3 style={{
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            color: 'var(--color-emerald)',
            letterSpacing: '0.1em',
            alignSelf: 'flex-start',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Cpu size={14} /> Pipeline Data Orchestration
          </h3>

          {/* Node 1: Client / User */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', position: 'relative' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100px',
              zIndex: 2
            }}>
              <div className="glass-card" style={{
                padding: '12px',
                borderRadius: '50%',
                background: 'var(--color-pearl)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Globe size={24} color="var(--color-gold)" />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, marginTop: '6px', color: 'var(--color-charcoal)' }}>Client UI (Vercel)</span>
            </div>

            {/* Connecting line */}
            <div style={{
              position: 'absolute',
              top: '24px',
              left: '80px',
              width: '120px',
              height: '2px',
              background: 'linear-gradient(90deg, var(--color-gold) 0%, var(--color-emerald) 100%)',
              zIndex: 1
            }}>
              {/* Flowing dot */}
              <div style={{
                position: 'absolute',
                top: '-4px',
                left: 0,
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'var(--color-emerald)',
                animation: 'flowRight 2.2s linear infinite'
              }} />
            </div>

            {/* Node 2: Node.js API server */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100px',
              zIndex: 2
            }}>
              <div className="glass-card" style={{
                padding: '12px',
                borderRadius: '50%',
                background: 'var(--color-pearl)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Server size={24} color="var(--color-emerald)" />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, marginTop: '6px', color: 'var(--color-charcoal)' }}>API Server (Render)</span>
            </div>
          </div>

          <div style={{
            height: '40px',
            width: '2px',
            background: 'rgba(49, 87, 79, 0.15)',
            position: 'relative'
          }}>
            {/* Flowing dot downwards */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-4px',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'var(--color-gold)',
              animation: 'flowDown 1.8s linear infinite'
            }} />
          </div>

          {/* Node 3: Database schema */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 2
          }}>
            <div className="glass-card" style={{
              padding: '12px',
              borderRadius: '50%',
              background: 'var(--color-pearl)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Database size={24} color="var(--color-emerald)" />
            </div>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, marginTop: '6px', color: 'var(--color-charcoal)' }}>Database Layer (MongoDB Atlas)</span>
          </div>

          {/* CSS Animation inject */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes flowRight {
              0% { left: 0% }
              100% { left: 100% }
            }
            @keyframes flowDown {
              0% { top: 0% }
              100% { top: 100% }
            }
          `}} />
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
