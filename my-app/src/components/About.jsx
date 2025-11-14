import React, { useEffect, useState } from 'react';
import '../css/About.css';

const teamMembers = [
  {
    name: 'Edwin Mui',
    position: 'Director of Infrastructure',
    description: '',
    photo: 'test1.jpg'
  },
  {
    name: 'Christopher Yuen',
    position: 'Team Member',
    description: 'small description',
    photo: 'test2.jpg'
  },
  {
    name: 'Shoi Amin',
    position: 'Team Member',
    description: 'small description',
    photo: 'member3.jpg'
  },
  {
    name: 'Nevan Sujit',
    position: 'Team Member',
    description: 'small description',
    photo: 'member4.jpg'
  },
  {
    name: 'Brandon Kong',
    position: 'Team Member',
    description: 'small description',
    photo: 'member5.jpg'
  },
  {
    name: 'Eric Feng',
    position: 'Team Member',
    description: 'small description',
    photo: 'member6.jpg'
  }
];

export function AboutOrg() {
  return (
    <section id="about" className="About-org">
      <div className="About-org-inner">
        <div className="About-org-grid">
          <div className="About-text">
            <div className="About-heading-row">
              <h1>About</h1>
              <img
                src="/slim white franklinDAO transparent.png"
                alt="FranklinDAO logo"
                className="About-logo-inline-right"
              />
            </div>
            <p>
              We are an off-campus organization founded by students studying at the University of Pennsylvania.
              We are part of the EduDAO initiative and are actively involved in various aspects of the Web3 space—due diligence/sourcing for VCs, software development, and key participants in governance forums all over Defi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MeetTheTeam() {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const divider = document.querySelector('.SectionDivider');
    if (!divider) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // When the divider is scrolled past (above viewport), entry.isIntersecting will be false
        // and boundingClientRect.y will be negative. Use that to show the team.
        const scrolledPast = !entry.isIntersecting && entry.boundingClientRect.y < 0;
        setAppear(scrolledPast);
      });
    }, { threshold: 0 });

    obs.observe(divider);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="meet-the-team" className="Team-section">
      <div className="Team-right">
        <div className="Team-right-inner">
          <h2 className="Team-heading">Meet the Team</h2>
          <p>
            The Infrastructure team @FranklinDAO focuses on reliability, security, and
            automation. We operate and improve the platforms, CI/CD pipelines,
            and observability tooling that keep production running smoothly.
            We're a small, cross-functional group that collaborates closely
            with product and engineering teams to ship safely and quickly.
          </p>
          <p>
            If you'd like to learn more about our processes or open roles,
            reach out via the contact channels on this site.
          </p>
        </div>
      </div>

      {(() => {
        const director = teamMembers[0];
        const others = teamMembers.slice(1);

        // map members: top row uses others[0] and others[1] as flanking members
        const topLeft = others[0] || null;
        const topRight = others[1] || null;

        // bottom row: remaining members
        const bottom = others.slice(2);

        return (
          <div className={"Team-members-grid" + (appear ? ' appear' : '')}>
            {/* top-left member */}
            <div className="member-slot slot-top-left">
              {topLeft && (
                <div className="Team-member">
                  <img src={topLeft.photo} alt={topLeft.name} className="Team-photo" />
                  <div className="Team-member-meta">
                    <h3 className="Team-member-name">{topLeft.name}</h3>
                    <p className="Team-position">{topLeft.position}</p>
                  </div>
                </div>
              )}
            </div>

            {/* director in center */}
            <div className="member-slot slot-top-center">
              <div className="Team-member Team-member--director Team-member--director-grid">
                <img src={director.photo} alt={director.name} className="Team-photo Team-photo--director" />
                <div className="Team-member-meta">
                  <h3 className="Team-member-name">{director.name}</h3>
                  <p className="Team-position">{director.position}</p>
                  <p className="Team-member-desc">{director.description}</p>
                </div>
              </div>
            </div>

            {/* top-right member */}
            <div className="member-slot slot-top-right">
              {topRight && (
                <div className="Team-member">
                  <img src={topRight.photo} alt={topRight.name} className="Team-photo" />
                  <div className="Team-member-meta">
                    <h3 className="Team-member-name">{topRight.name}</h3>
                    <p className="Team-position">{topRight.position}</p>
                  </div>
                </div>
              )}
            </div>

            {/* bottom row: spread remaining members across three columns */}
            <div className="member-slot slot-bottom-left">
              {bottom[0] && (
                <div className="Team-member">
                  <img src={bottom[0].photo} alt={bottom[0].name} className="Team-photo" />
                  <div className="Team-member-meta">
                    <h3 className="Team-member-name">{bottom[0].name}</h3>
                    <p className="Team-position">{bottom[0].position}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="member-slot slot-bottom-center">
              {bottom[1] && (
                <div className="Team-member">
                  <img src={bottom[1].photo} alt={bottom[1].name} className="Team-photo" />
                  <div className="Team-member-meta">
                    <h3 className="Team-member-name">{bottom[1].name}</h3>
                    <p className="Team-position">{bottom[1].position}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="member-slot slot-bottom-right">
              {bottom[2] && (
                <div className="Team-member">
                  <img src={bottom[2].photo} alt={bottom[2].name} className="Team-photo" />
                  <div className="Team-member-meta">
                    <h3 className="Team-member-name">{bottom[2].name}</h3>
                    <p className="Team-position">{bottom[2].position}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })()}
    </section>
  );
}

// Default export kept for backward compatibility (renders both sections)
export default function About() {
  return (
    <div className="About">
      <AboutOrg />
      <MeetTheTeam />
    </div>
  );
}