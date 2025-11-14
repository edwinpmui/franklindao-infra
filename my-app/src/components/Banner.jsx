import React from 'react';
import '../css/Banner.css';
// logo file not used anymore — using public PNG asset instead

function Banner() {
  // Animation removed — static hero
  return (
    <div id="home" className="Banner">
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