import React, { useState, useEffect } from 'react';
import '../css/Nav.css';

function Nav({ className }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768 && open) setOpen(false);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  function handleNavClick(e) {
    // Toggle the sidebar when the user clicks the nav container itself.
    // Individual interactive elements inside will stop propagation so they behave normally.
    setOpen((v) => !v);
  }

  function scrollToSection(e, id) {
    e.preventDefault();
    e.stopPropagation();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  }

  return (
    <nav
      className={`Nav ${open ? 'open' : ''} ${className || ''}`}
      aria-label="Main navigation"
      aria-expanded={open}
      onClick={handleNavClick}
    >
      {/* keep the compact visible pieces outside the sliding panel so they remain visible when collapsed */}
      <div className="Nav-top">
        <span className="Nav-text">Infra@FranklinDAO</span>
      </div>

      <div className="Nav-panel">
        <div className="Nav-panel-header">
          <span className="Nav-panel-text">Infra@FranklinDAO</span>
        </div>
        <div className="Nav-links" id="nav-links" aria-hidden={!open}>
          <a href="#home" className="Nav-item" onClick={(e) => scrollToSection(e, 'home')}>
            <span className="Nav-item-label">Home</span>
            <span className="Nav-item-arrow" aria-hidden>→</span>
            <span className="Nav-item-desc">Overview & latest updates</span>
          </a>

          <a href="#about" className="Nav-item" onClick={(e) => scrollToSection(e, 'about')}>
            <span className="Nav-item-label">About</span>
            <span className="Nav-item-arrow" aria-hidden>→</span>
            <span className="Nav-item-desc">Who we are & mission</span>
          </a>

          <a href="#work" className="Nav-item" onClick={(e) => scrollToSection(e, 'work')}>
            <span className="Nav-item-label">Work</span>
            <span className="Nav-item-arrow" aria-hidden>→</span>
            <span className="Nav-item-desc">Case studies & projects</span>
          </a>

          <a href="#contact" className="Nav-item" onClick={(e) => scrollToSection(e, 'contact')}>
            <span className="Nav-item-label">Contact</span>
            <span className="Nav-item-arrow" aria-hidden>→</span>
            <span className="Nav-item-desc">Get in touch</span>
          </a>
        </div>
      </div>

      <div className="Nav-bottom">
        <button
          className="Nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
        >
          <span className="Nav-toggle-box">
            <span className="Nav-toggle-inner" />
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;