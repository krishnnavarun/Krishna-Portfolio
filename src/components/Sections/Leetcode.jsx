import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Award, BookOpen, Globe, Code } from 'lucide-react'

function Leetcode({ activeSection }) {
  const [terminalLines, setTerminalLines] = useState([])
  const [activeTab, setActiveTab] = useState('stats') // 'stats' or 'chart'

  const terminalLogs = [
    "Initializing connection to api.leetcode.com...",
    "Querying profile for 'krishna-varun-2024'...",
    "User authentication: verified.",
    "Fetching submission metrics & contest histories...",
    "Data streams parsed successfully.",
    "--------------------------------------------------",
    "PROFILE METRICS LOADED:",
    "  > Max Rating: 1651",
    "  > Global Rank: 1,130,356",
    "  > Problems Solved: 136 (Easy: 60 | Med: 65 | Hard: 11)",
    "  > Profile Status: ACTIVE / CONSISTENT",
    "--------------------------------------------------"
  ]

  // State to track if animation has started
  const [hasStarted, setHasStarted] = useState(false)

  // Typing effect for the terminal logs when the section becomes active
  useEffect(() => {
    if (activeSection !== 5) {
      // Do not reset if animation already ran
      if (!hasStarted) {
        setTerminalLines([])
      }
      return
    }

    // If already started, don't re‑run the interval
    if (hasStarted) return
    setHasStarted(true)

    let currentLine = 0
    const interval = setInterval(() => {
      if (currentLine < terminalLogs.length) {
        setTerminalLines(prev => [...prev, terminalLogs[currentLine]])
        currentLine++
      } else {
        clearInterval(interval)
      }
    }, 450)

    return () => clearInterval(interval)
  }, [activeSection, hasStarted])

  // Mock contest history for SVG rating graph
  const ratingData = [
    { contest: "Contest 1", rating: 1400 },
    { contest: "Contest 2", rating: 1435 },
    { contest: "Contest 3", rating: 1420 },
    { contest: "Contest 4", rating: 1490 },
    { contest: "Contest 5", rating: 1530 },
    { contest: "Contest 6", rating: 1515 },
    { contest: "Contest 7", rating: 1585 },
    { contest: "Contest 8", rating: 1615 },
    { contest: "Contest 9", rating: 1651 }
  ]

  // Create SVG points coordinates based on ratingData
  const svgWidth = 400
  const svgHeight = 180
  const minRating = 1350
  const maxRating = 1700
  const points = ratingData.map((d, i) => {
    const x = (i / (ratingData.length - 1)) * (svgWidth - 40) + 20
    const y = svgHeight - ((d.rating - minRating) / (maxRating - minRating)) * (svgHeight - 40) - 20
    return `${x},${y}`
  }).join(" ")

  return (
    <div className="grid-2" style={{ width: '100%', zIndex: 10 }}>
      {/* Left Column: Interactive Tabbed Panel */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <span className="section-tag">COMPETITIVE PROGRAMMING</span>
        <h2 className="section-title gradient-text">Interactive Coding Dashboard</h2>
        <p style={{ marginBottom: '24px', fontSize: '1.02rem', color: '#555555' }}>
          Solving logical, algorithmic structures is a core passion. I maintain consistency across coding environments to test performance, optimization, and time complexity.
        </p>

        {/* Tab selection headers */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <button
            onClick={() => setActiveTab('stats')}
            className={`btn-secondary ${activeTab === 'stats' ? 'active' : ''}`}
            style={{
              padding: '8px 18px',
              fontSize: '0.85rem',
              borderRadius: '12px',
              backgroundColor: activeTab === 'stats' ? 'rgba(14, 36, 49, 0.08)' : 'transparent',
              border: '1px solid rgba(14, 36, 49, 0.2)'
            }}
          >
            Statistics
          </button>
          <button
            onClick={() => setActiveTab('chart')}
            className={`btn-secondary ${activeTab === 'chart' ? 'active' : ''}`}
            style={{
              padding: '8px 18px',
              fontSize: '0.85rem',
              borderRadius: '12px',
              backgroundColor: activeTab === 'chart' ? 'rgba(14, 36, 49, 0.08)' : 'transparent',
              border: '1px solid rgba(14, 36, 49, 0.2)'
            }}
          >
            Contest Rating Graph
          </button>
        </div>

        {/* Tab Content 1: Statistics Dials */}
        {activeTab === 'stats' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px'
          }}>
            <div className="glass-card" style={{ padding: '20px 16px', textAlign: 'center' }}>
              <Award size={20} color="var(--color-gold)" style={{ margin: '0 auto 8px' }} />
              <h4 style={{ fontSize: '1.4rem', color: 'var(--color-emerald)', fontWeight: 700 }}>1651</h4>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>Max Rating</span>
            </div>
            
            <div className="glass-card" style={{ padding: '20px 16px', textAlign: 'center' }}>
              <BookOpen size={20} color="var(--color-gold)" style={{ margin: '0 auto 8px' }} />
              <h4 style={{ fontSize: '1.4rem', color: 'var(--color-emerald)', fontWeight: 700 }}>136</h4>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>Solved</span>
            </div>

            <div className="glass-card" style={{ padding: '20px 16px', textAlign: 'center' }}>
              <Globe size={20} color="var(--color-gold)" style={{ margin: '0 auto 8px' }} />
              <h4 style={{ fontSize: '0.98rem', color: 'var(--color-emerald)', fontWeight: 700, margin: '6px 0 8px' }}>Top 12%</h4>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>Global Rank</span>
            </div>
          </div>
        )}

        {/* Tab Content 2: SVG Chart */}
        {activeTab === 'chart' && (
          <div className="glass-card" style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--color-emerald)', alignSelf: 'flex-start', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Code size={14} /> Contest Progression (Peak: 1651)
            </h4>
            <div style={{ width: '100%', overflow: 'hidden' }}>
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} style={{ width: '100%', height: '100%' }}>
                {/* Grid Lines */}
                <line x1="20" y1="20" x2="380" y2="20" stroke="rgba(14, 36, 49, 0.05)" />
                <line x1="20" y1="70" x2="380" y2="70" stroke="rgba(14, 36, 49, 0.05)" />
                <line x1="20" y1="120" x2="380" y2="120" stroke="rgba(14, 36, 49, 0.05)" />
                
                {/* SVG Curve Path */}
                <polyline
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="3"
                  points={points}
                />
                
                {/* SVG Glow effect */}
                <polyline
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="8"
                  strokeOpacity="0.25"
                  points={points}
                />

                {/* Nodes on graph */}
                {ratingData.map((d, i) => {
                  const x = (i / (ratingData.length - 1)) * (svgWidth - 40) + 20
                  const y = svgHeight - ((d.rating - minRating) / (maxRating - minRating)) * (svgHeight - 40) - 20
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="var(--color-emerald)"
                      stroke="var(--color-pearl)"
                      strokeWidth="2"
                    />
                  )
                })}
              </svg>
            </div>
          </div>
        )}
      </motion.div>

      {/* Right Column: Terminal Emulator */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: '100%',
          maxWidth: '480px',
          background: '#222222', // Charcoal background
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
          overflow: 'hidden',
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: '0.82rem',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Header Bar */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444', display: 'inline-block' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.68rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Terminal size={12} /> bash - leetcode
            </span>
          </div>

          {/* Log Window */}
          <div style={{
            padding: '20px',
            minHeight: '260px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            color: '#ECE6DD'
          }}>
            <div style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>$ npm run leetcode-sync</div>
            
            {terminalLines.map((line, idx) => (
              <div 
                key={idx} 
                style={{ 
                  color: line.startsWith("  > ") ? "var(--color-gold)" : (line.includes("[OK]") ? "#10B981" : "#ECE6DD"),
                  whiteSpace: 'pre' 
                }}
              >
                {line}
              </div>
            ))}
            
            {/* Blinking Cursor */}
            {terminalLines.length < terminalLogs.length ? (
              <span style={{
                width: '6px',
                height: '14px',
                background: 'var(--color-gold)',
                display: 'inline-block',
                animation: 'blink 1s step-end infinite'
              }}></span>
            ) : (
              <div style={{ color: 'var(--color-gold)' }}>$ <span style={{
                width: '6px',
                height: '14px',
                background: 'var(--color-gold)',
                display: 'inline-block',
                animation: 'blink 1s step-end infinite'
              }}></span></div>
            )}
          </div>
        </div>
        
        {/* Style tag for blinking cursor */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes blink {
            from, to { background-color: transparent }
            50% { background-color: var(--color-gold) }
          }
        `}} />
      </div>
    </div>
  )
}

export default Leetcode
