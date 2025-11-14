import React from 'react';
import '../css/About.css';

const teamMembers = [
  {
    name: 'test1',
    position: 'Director of Infrastructure',
    description: 'small description',
    photo: 'test1.jpg'
  },
  {
    name: 'test2',
    position: 'Team Member',
    description: 'small description',
    photo: 'test2.jpg'
  }
];

export function AboutOrg() {
  return (
    <section id="about" className="About-org">
      <div className="About-org-inner">
        <h1>About Us</h1>
        <p>
          Welcome to our organization. We are dedicated to maintaining and
          advancing the infrastructure that powers our services. Our mission
          is to provide resilient, secure, and scalable systems so teams can
          build confidently.
        </p>
      </div>
    </section>
  );
}

export function MeetTheTeam() {
  return (
    <section id="meet-the-team" className="Team-section">
      <div className="Team-left">
        <h2>Infrastructure Team</h2>
        <div className="Team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="Team-member">
              <img src={member.photo} alt={member.name} className="Team-photo" />
              <div className="Team-member-meta">
                <h3 className="Team-member-name">{member.name}</h3>
                <p className="Team-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="Team-right">
        <div className="Team-right-inner">
          <h3>Who we are</h3>
          <p>
            The Infrastructure team focuses on reliability, security, and
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