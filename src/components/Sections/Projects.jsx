import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Cpu, Layout, Users } from 'lucide-react'

function Projects({ activeSection }) {
  // Project list details
  const projects = [
    {
      id: "nxtbuild",
      title: "NxtBuild",
      tagline: "AI-Powered MERN App Generator",
      desc: "Developed an innovative AI-driven MERN platform designed for automated web application generation. Leveraging Gemini APIs, users can generate fully structured node codebases, database models, and clean react pages from plain text prompts.",
      techs: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Gemini API"],
      icon: <Cpu size={24} color="var(--color-emerald)" />,
      github: "https://github.com/krishnnavarun/NxtBuild"
    },
    {
      id: "finance-tracker",
      title: "AI Powered Finance Tracker",
      tagline: "Intelligent Budgeting & Forecasting System",
      desc: "Architected a full-stack financial web app with an interactive transactional CRUD engine, real-time charts, and budgets. Integrated OpenAI APIs to generate dynamic, user-tailored spending analysis, insights, and structural PDF summaries.",
      techs: ["ReactJS", "Redux", "NodeJS", "ExpressJS", "MongoDB", "OpenAI API"],
      icon: <Layout size={24} color="var(--color-emerald)" />,
      github: "https://github.com/krishnnavarun/ai-finance-tracker"
    },
    {
      id: "dev-connect",
      title: "Developers Connect",
      tagline: "Collaborative Social Platform",
      desc: "Engineered a collaborative platform for programmers to find projects and connect in real-time. Features skill-matching algorithms, search indexing, and real-time availability filters to match developer talents with startups.",
      techs: ["ReactJS", "Redux", "NodeJS", "ExpressJS", "MongoDB"],
      icon: <Users size={24} color="var(--color-emerald)" />,
      github: "https://github.com/krishnnavarun/developers-connect"
    }
  ]

  // Hover states to simulate local 3D card tilt
  const [tilts, setTilts] = useState({})

  const handleMouseMove = (id, e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    // Tilt limit ~ 8 degrees
    const divisor = 25
    setTilts({
      ...tilts,
      [id]: { rotateX: -y / divisor, rotateY: x / divisor }
    })
  }

  const handleMouseLeave = (id) => {
    setTilts({
      ...tilts,
      [id]: { rotateX: 0, rotateY: 0 }
    })
  }

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', zIndex: 10 }}>
      {/* Title animation */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <span className="section-tag">SELECTED CREATIVE WORKS</span>
        <h2 className="section-title gradient-text">Premium Product Showcases</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
          A display of web architectures combining clean schema designs, real-time client state management, and modern artificial intelligence capabilities.
        </p>
      </motion.div>

      {/* Floating Glass Showcase Containers */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {projects.map((project, idx) => {
          const rotation = tilts[project.id] || { rotateX: 0, rotateY: 0 }

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
              onMouseMove={(e) => handleMouseMove(project.id, e)}
              onMouseLeave={() => handleMouseLeave(project.id)}
              animate={{
                rotateX: rotation.rotateX,
                rotateY: rotation.rotateY,
                transformPerspective: 1200
              }}
              className="glass-panel"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr',
                padding: '40px',
                gap: '40px',
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                alignItems: 'center',
                border: '1px solid rgba(49, 87, 79, 0.08)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.02)'
              }}
            >
              {/* Highlight Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(225deg, rgba(124, 154, 146, 0.04) 0%, rgba(255, 255, 255, 0) 50%)',
                pointerEvents: 'none'
              }} />

              {/* Column 1: Tech Metadata */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderRight: '1px solid rgba(49, 87, 79, 0.1)',
                paddingRight: '30px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{
                    background: 'rgba(49, 87, 79, 0.06)',
                    padding: '12px',
                    borderRadius: '12px',
                    border: '1px solid rgba(49, 87, 79, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      color: 'var(--color-emerald)',
                      fontWeight: 800
                    }}>
                      {project.title}
                    </h3>
                    <span style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-gold)',
                      fontWeight: 700,
                      letterSpacing: '0.02em'
                    }}>
                      {project.tagline}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                  {project.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        background: 'rgba(124, 154, 146, 0.08)',
                        border: '1px solid rgba(124, 154, 146, 0.15)',
                        color: 'var(--color-emerald)',
                        padding: '5px 12px',
                        borderRadius: '20px',
                        fontSize: '0.72rem',
                        fontWeight: 600
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Column 2: Detailed Text & CTAs */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                justifyContent: 'center'
              }}>
                <p style={{
                  fontSize: '0.98rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-muted)'
                }}>
                  {project.desc}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center'
                }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{
                      padding: '10px 22px',
                      fontSize: '0.85rem',
                      borderRadius: '20px'
                    }}
                  >
                    <Github size={16} /> GitHub Code
                  </a>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
