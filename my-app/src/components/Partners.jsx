import React from 'react';
import '../css/Partners.css';
// Logos served from the public/ folder (no import required)
const HuddleLogo = '/Huddle01-team-logo.png';
const CantonLogo = '/Canton-Network-logo.jpg';

export default function Partners() {
  // placeholder partner data; replace src with real logos in /public or /images
  // only two partners for now — replace with real names/logos
  const partners = [
    { name: 'm31 Capital', logo: '/m31capital.png' },
    { name: 'Shark Labs', logo: '/sharklabs_logo.png' }
  ];

  return (
    <div className="Partners" id="partners">
      <div className="Partners-inner">
        <h2 className="Partners-heading">Who we work with</h2>
        <p className="Partners-lead">We collaborate with projects, foundations, and teams across the ecosystem.</p>

        <div className="Partners-grid">
          {partners.map((p) => (
            <div key={p.name} className="Partner-card">
              <div className="Partner-logo-wrap">
                <img src={p.logo} alt={p.name} className="Partner-logo" />
              </div>
              <div className="Partner-name">{p.name}</div>
            </div>
          ))}
        </div>

        {/* Protocol logos (rendered below the partner photos) */}
        <div className="Partner-protocols" aria-hidden="false">
          <img src={HuddleLogo} alt="Huddle01 team" className="Partner-protocol-logo" />
          <img src={CantonLogo} alt="Canton Network" className="Partner-protocol-logo" />
        </div>
      </div>
    </div>
  );
}
