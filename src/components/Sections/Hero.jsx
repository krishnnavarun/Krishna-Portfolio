import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownCircle, Linkedin, Github, Instagram, Camera, Code2, Terminal } from 'lucide-react'

function Hero() {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "AI Solutions Engineer"
  ]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)
  const [imageError, setImageError] = useState(false)

  // Smooth custom typing animation
  useEffect(() => {
    let timer
    const activeRole = roles[currentRoleIndex]

    const handleType = () => {
      if (!isDeleting) {
        // Typing letters
        setCurrentText(activeRole.substring(0, currentText.length + 1))
        setTypingSpeed(100) // standard typing speed

        if (currentText === activeRole) {
          // Pause when word is complete
          timer = setTimeout(() => setIsDeleting(true), 2000)
          return
        }
      } else {
        // Deleting letters
        setCurrentText(activeRole.substring(0, currentText.length - 1))
        setTypingSpeed(50) // deleting speed is faster

        if (currentText === '') {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          setTypingSpeed(300) // brief pause before next word
          return
        }
      }
    }

    timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentRoleIndex])

  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Social Links mapping
  const socials = [
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/krishnnavarun', label: 'LinkedIn' },
    { icon: <Github size={20} />, url: 'https://github.com/krishnnavarun', label: 'GitHub' },
    { icon: <Instagram size={20} />, url: 'https://instagram.com/krishnnavarun', label: 'Instagram' },
    { icon: <Camera size={20} />, url: 'https://twitter.com/krishnnavarun', label: 'Twitter' },
    { icon: <Code2 size={20} />, url: 'https://leetcode.com/krishnavarun', label: 'LeetCode' },
    { icon: <Terminal size={20} />, url: 'https://hackerrank.com/krishnnavarun', label: 'HackerRank' }
  ]

  return (
    <div className="hero-split-container">
      {/* Left side: Intro & Actions */}
      <div className="hero-text-side">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="hero-welcome">Hi There,</h2>
          <h1 className="hero-name">
            I'm Krishna <span className="name-accent">Varun</span>
          </h1>

          <div className="hero-typing-container">
            <span className="hero-typing-prefix">I Am Into </span>
            <span className="hero-typing-text">
              {currentText}
              <span className="typing-cursor">|</span>
            </span>
          </div>

          <button
            onClick={() => handleScrollTo('about')}
            className="hero-cta-btn"
          >
            About Me <ArrowDownCircle size={18} />
          </button>

          {/* Social Icons Grid */}
          <div className="hero-socials-row">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hero-social-icon"
                whileHover={{ y: -5, scale: 1.1 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right side: Profile Circle Frame */}
      <div className="hero-image-side">
        <motion.div
          className="hero-circle-frame"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          {!imageError ? (
            <motion.img
              src="/profile.jpg"
              alt="Krishna Varun"
              className="hero-astronaut-img"
              onError={() => setImageError(true)}
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 5.0,
                  ease: 'easeInOut'
                }
              }}
            />
          ) : (
            <div className="profile-placeholder">
              <span>KV</span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
