import React, { useState, useEffect } from 'react';
import '../css/Nav.css';

function Nav({ className }) {
  const [open, setOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('Home');
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768 && open) setOpen(false);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  // Watch the Banner element for the 'banner-scrolled' class and mirror it
  // so the nav can reveal the color blocks in the same moments the banner does.
  useEffect(() => {
    const banner = document.querySelector('.Banner') || document.getElementById('home');
    if (!banner) {
      // Fallback: simple scroll threshold
      const onScroll = () => setNavScrolled(window.scrollY > 120);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }

    // Observe class changes on the banner element so we mirror 'banner-scrolled'.
    const mo = new MutationObserver(() => {
      setNavScrolled(banner.classList.contains('banner-scrolled'));
    });
    mo.observe(banner, { attributes: true, attributeFilter: ['class'] });
    // initialize
    setNavScrolled(banner.classList.contains('banner-scrolled'));
    return () => mo.disconnect();
  }, []);

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

  // Watch page sections and update the collapsed-nav label with the current section.
  useEffect(() => {
  const ids = ['home', 'about', 'partners', 'work'];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        // find the entry with the largest intersectionRatio that's intersecting
        let best = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
          }
        });
        if (best && best.target && best.target.id) {
          const label = best.target.id.charAt(0).toUpperCase() + best.target.id.slice(1);
          setCurrentSection(label);
        }
      },
      { threshold: [0.25, 0.45, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`Nav ${open ? 'open' : ''} ${navScrolled ? 'nav-scrolled' : ''} ${className || ''}`}
      aria-label="Main navigation"
      aria-expanded={open}
      onClick={handleNavClick}
    >
      {/* Current section label for collapsed nav (updated via IntersectionObserver) */}
      <div className="Nav-current" aria-live="polite">{currentSection}</div>
      {/* keep the compact visible pieces outside the sliding panel so they remain visible when collapsed */}
      <div className="Nav-top">
        <span className="Nav-text">Infra@FranklinDAO</span>
        {/* color blocks placed under the brand text in the collapsed nav */}
        <img src={encodeURI('/color blocks transparent.png')} alt="Color blocks" className="Nav-logo Nav-logo--blocks" />
      </div>

      <div className="Nav-panel">
        <div className="Nav-panel-header">
          {/* large color blocks shown when the panel is open */}
          <img src={encodeURI('/color blocks transparent.png')} alt="Color blocks" className="Nav-logo Nav-logo--blocks-large" />
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