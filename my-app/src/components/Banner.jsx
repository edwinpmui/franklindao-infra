import React, { useEffect, useState, useRef } from 'react';
import '../css/Banner.css';
// logo file not used anymore — using public PNG asset instead

function Banner() {
  const [scrolled, setScrolled] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    // Trigger banner-scrolled only after a few downward scroll gestures.
    // This counts discrete downward scroll events and requires `THRESHOLD_COUNT`
    // downward moves before applying the scrolled state. The counter resets
    // after a short idle period so the user must scroll repeatedly.
    const THRESHOLD_COUNT = 10; // number of downward scrolls required
    const RESET_DELAY = 900; // ms to reset the scroll count after inactivity

    let lastY = window.scrollY || 0;
    let downCount = 0;
    let resetTimer = null;

    const clearResetTimer = () => {
      if (resetTimer) {
        clearTimeout(resetTimer);
        resetTimer = null;
      }
    };

    const onScroll = () => {
      const y = window.scrollY || 0;
      // small threshold to avoid micro-noise from tiny scrolls
      const delta = y - lastY;

      if (delta > 4) {
        // user scrolled down
        downCount = Math.min(THRESHOLD_COUNT, downCount + 1);
        clearResetTimer();
        resetTimer = setTimeout(() => {
          downCount = 0;
        }, RESET_DELAY);
      } else if (delta < -4) {
        // user scrolled up: slightly reduce the counter
        downCount = Math.max(0, downCount - 1);
      }

      lastY = y;

      // require both some scroll distance and repeated downward gestures
      setScrolled(y > 12 && downCount >= THRESHOLD_COUNT);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // run once in case the page loads scrolled
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearResetTimer();
    };
  }, []);

  // Static hero with scroll-driven class to hide logos
  return (
    <div id="home" ref={bannerRef} className={`Banner ${scrolled ? 'banner-scrolled' : ''}`}>
      {/* background video: plays silently and loops */}
      <video className="Banner-bg-video" autoPlay muted loop playsInline aria-hidden="true">
        <source src="/fdao_banner.mp4" type="video/mp4" />
        {/* fallback: browsers that don't support mp4 will ignore this */}
      </video>
      <div className="Banner-inner">
           <div className="Banner-brand">
             {/* Inline slim logo placed left of the team label (served from /public). */}
             <h1 className="Banner-title">
               <img src={encodeURI('/color blocks transparent.png')} alt="Color blocks" className="Banner-logo--blocks" />
               <img src={encodeURI('/slim color fDAO.png')} alt="FranklinDAO slim logo" className="Banner-logo--inline" />
               {/* show only the team label next to the slim logo */}
               <span className="Brand-sub">/ Infrastructure Team</span>
             </h1>
           </div>
      </div>
      {/* canvas removed: keep empty container for backward compatibility but hide via CSS */}
      <div className="content--canvas" aria-hidden="true"></div>
    </div>
  );
}

export default Banner;