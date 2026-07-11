import React from 'react'

function Navbar({ activeSection }) {
  const navItems = [
    { label: 'Home', id: 'hero', index: 0 },
    { label: 'About', id: 'about', index: 1 },
    { label: 'Skills', id: 'skills', index: 2 },
    { label: 'Projects', id: 'projects', index: 3 },
    { label: 'Achievements', id: 'achievements', index: 4 },
    { label: 'Leetcode', id: 'leetcode', index: 5 },
    { label: 'Experience', id: 'experience', index: 6 },
    { label: 'Contact', id: 'contact', index: 7 }
  ]

  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleScrollTo('hero')}>
          <span>Krishna</span> <span className="logo-accent">Varun</span>
        </div>
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.id} className="navbar-item">
              <button
                onClick={() => handleScrollTo(item.id)}
                className={`navbar-link ${activeSection === item.index ? 'active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
