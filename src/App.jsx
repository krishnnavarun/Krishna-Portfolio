import React, { useState, useEffect, useRef } from 'react'
import MainCanvas from './components/MainCanvas'
import Hero from './components/Sections/Hero'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'
import Projects from './components/Sections/Projects'
import Achievements from './components/Sections/Achievements'
import Leetcode from './components/Sections/Leetcode'
import Experience from './components/Sections/Experience'
import Contact from './components/Sections/Contact'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      
      setScrollProgress(progress)

      // Determine which section is currently active
      const sections = document.querySelectorAll('.section')
      let currentSection = 0
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        // If the top of the section is near the middle of the screen
        if (rect.top <= window.innerHeight * 0.5) {
          currentSection = index
        }
      })
      
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial check
    setTimeout(handleScroll, 100)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-container" ref={containerRef}>
      {/* Background 3D Canvas */}
      <div className="canvas-container canvas-interactive">
        <MainCanvas scrollProgress={scrollProgress} activeSection={activeSection} />
      </div>

      {/* Foreground Scroll Sections */}
      <div className="scroll-container">
        <section id="hero" className="section">
          <Hero activeSection={activeSection} />
        </section>
        
        <section id="about" className="section">
          <About activeSection={activeSection} />
        </section>
        
        <section id="skills" className="section">
          <Skills activeSection={activeSection} />
        </section>
        
        <section id="projects" className="section">
          <Projects activeSection={activeSection} />
        </section>
        
        <section id="achievements" className="section">
          <Achievements activeSection={activeSection} />
        </section>
        
        <section id="leetcode" className="section">
          <Leetcode activeSection={activeSection} />
        </section>
        
        <section id="experience" className="section">
          <Experience activeSection={activeSection} />
        </section>
        
        <section id="contact" className="section">
          <Contact activeSection={activeSection} />
        </section>
      </div>
    </div>
  )
}

export default App
