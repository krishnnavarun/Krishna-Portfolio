import React from 'react'
import { motion } from 'framer-motion'
import { Award, Zap, Trophy, Star } from 'lucide-react'

function Achievements({ activeSection }) {
  const milestones = [
    {
      year: "2026",
      title: "Secured 2nd Place at Titanium 2026",
      subtitle: "REC's National Tech Fest",
      desc: "Architected and presented a sustainability-focused software application, competing against engineering colleges nationwide to secure the runner-up spot.",
      icon: <Trophy size={20} color="var(--color-gold)" />,
      badge: "National Award"
    },
    {
      year: "2025",
      title: "OpenAI Academy x NxtWave Qualified",
      subtitle: "State-Level Buildathon Top Project",
      desc: "Qualified among the top builds state-wide in the Generative AI Buildathon workshop, engineering agentic AI tools and neural LLM applications.",
      icon: <Star size={20} color="var(--color-gold)" />,
      badge: "Selective Admission"
    },
    {
      year: "2025",
      title: "Consistent Learner Recognition",
      subtitle: "NxtWave Academy",
      desc: "Awarded for holding a continuous coding streak of 197 days, verifying persistence, algorithmic problem-solving, and dedication to software methodologies.",
      icon: <Award size={20} color="var(--color-gold)" />,
      badge: "197-Day Streak"
    },
    {
      year: "2025",
      title: "Automation Workflow Projects",
      subtitle: "Backend Orchestrations",
      desc: "Engineered automatic workflows and backend pipelines using n8n low-code nodes, shortening processing times and standardizing payload exchanges.",
      icon: <Zap size={20} color="var(--color-gold)" />,
      badge: "DevOps & Automation"
    }
  ]

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', zIndex: 10 }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <span className="section-tag">RECOGNITION</span>
        <h2 className="section-title gradient-text">Milestones & Achievements</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
          A chronological history of academic honors, hackathon achievements, and consistent skill builds.
        </p>
      </motion.div>

      {/* Vertical Timeline */}
      <div style={{
        position: 'relative',
        maxWidth: '800px',
        margin: '0 auto',
        width: '100%',
        padding: '20px 0'
      }}>
        {/* Central Vertical Line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '2px',
          backgroundColor: 'rgba(49, 87, 79, 0.1)',
          transform: 'translateX(-50%)'
        }} />

        {/* Milestone Blocks */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '50px'
        }}>
          {milestones.map((m, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  position: 'relative'
                }}
              >
                {/* 1. Timeline Node Indicator (Glowing Core Dot) */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 5
                }}>
                  <div className={`glow-dot ${activeSection === 4 ? 'glow-active' : ''}`} />
                </div>

                {/* 2. Glassmorphic Card Container */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.1 }}
                  className="glass-panel"
                  style={{
                    width: '45%',
                    padding: '24px 28px',
                    position: 'relative',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      color: 'var(--color-gold)',
                      fontSize: '1.25rem'
                    }}>
                      {m.year}
                    </span>
                    <span style={{
                      background: 'rgba(49, 87, 79, 0.05)',
                      border: '1px solid rgba(49, 87, 79, 0.1)',
                      color: 'var(--color-emerald)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em'
                    }}>
                      {m.badge}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.05rem',
                    color: 'var(--color-charcoal)',
                    marginBottom: '4px',
                    fontFamily: 'var(--font-display)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    {m.icon}
                    {m.title}
                  </h3>
                  
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--color-sage)',
                    display: 'block',
                    marginBottom: '10px'
                  }}>
                    {m.subtitle}
                  </span>

                  <p style={{
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                    color: 'var(--color-text-muted)',
                    margin: 0
                  }}>
                    {m.desc}
                  </p>
                </motion.div>

                {/* 3. Empty Spacer matching card width */}
                <div style={{ width: '45%' }} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Achievements
