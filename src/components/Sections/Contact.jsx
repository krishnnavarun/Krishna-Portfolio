import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone, ArrowUpRight, Check } from 'lucide-react'

function Contact({ activeSection }) {
  const contactLinks = [
    {
      label: "Email Address",
      value: "krishnavarun2024@gmail.com",
      url: "mailto:krishnavarun2024@gmail.com",
      icon: <Mail size={20} color="var(--color-emerald)" />
    },
    {
      label: "LinkedIn Profile",
      value: "linkedin.com/in/krishnavarunk",
      url: "https://www.linkedin.com/in/krishnavarun2024", // standard placeholder matching his user details
      icon: <Linkedin size={20} color="var(--color-emerald)" />
    },
    {
      label: "GitHub Repositories",
      value: "github.com/krishnnavarun",
      url: "https://github.com/krishnnavarun",
      icon: <Github size={20} color="var(--color-emerald)" />
    },
    {
      label: "Phone Contact",
      value: "+91 63822 95854",
      url: "tel:+916382295854",
      icon: <Phone size={20} color="var(--color-emerald)" />
    }
  ]

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      zIndex: 10
    }}>
      <div style={{ textAlign: 'center', marginBottom: '45px' }}>
        <span className="section-tag">CONNECT</span>
        <h2 className="section-title" style={{ marginBottom: '15px' }}>Start a Conversation</h2>
        <p style={{ maxWidth: '550px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
          Whether you want to recruit a software engineer, discuss React architectures, or explore AI agent connections, reach out directly.
        </p>
      </div>

      {/* Floating Glass Contact Panel */}
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '750px',
        padding: '40px 30px',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '40px',
        alignItems: 'center',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.03)'
      }}>
        {/* Left column: Direct contact list */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {contactLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '12px 16px',
                background: 'rgba(49, 87, 79, 0.03)',
                border: '1px solid rgba(49, 87, 79, 0.08)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}
            >
              <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '10px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
              }}>
                {link.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: 700, letterSpacing: '0.05em' }}>
                  {link.label}
                </span>
                <span style={{ fontSize: '0.92rem', color: 'var(--color-charcoal)', fontWeight: 500, fontFamily: 'var(--font-sans)' }}>
                  {link.value}
                </span>
              </div>
              <ArrowUpRight size={16} color="var(--color-sage)" />
            </motion.a>
          ))}
        </div>

        {/* Right column: Branding signature */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          borderLeft: '1px solid rgba(49, 87, 79, 0.1)',
          paddingLeft: '30px',
          gap: '15px'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            color: 'var(--color-emerald)',
            fontWeight: 800,
            letterSpacing: '-0.01em'
          }}>
            KRISHNA VARUN K
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
            B.E. Computer Science & Engineering<br />
            Sri Eshwar College of Engineering
          </p>
          
          <div style={{
            margin: '10px 0',
            width: '40px',
            height: '1px',
            background: 'var(--color-gold)'
          }} />
          
          <span style={{
            fontSize: '0.72rem',
            color: 'var(--color-emerald)',
            background: 'rgba(124, 154, 146, 0.12)',
            padding: '4px 10px',
            borderRadius: '20px',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Check size={12} /> OPEN TO OPPORTUNITIES
          </span>
        </div>
      </div>

      {/* Back to top scroll button */}
      <motion.button
        onClick={handleScrollToTop}
        whileHover={{ y: -3 }}
        style={{
          marginTop: '60px',
          background: 'transparent',
          border: 'none',
          color: 'var(--color-emerald)',
          fontFamily: 'var(--font-display)',
          fontSize: '0.85rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        <span>▲</span>
        <span>BACK TO TOP</span>
      </motion.button>
    </div>
  )
}

export default Contact
