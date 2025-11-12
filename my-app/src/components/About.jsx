import React from 'react';
import '../css/About.css';

function About() {
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

  return (
    <div id="about" className="About">
      <header className="About-header">
        <h1>About Us</h1>
        <p>
          Welcome to our application. We are dedicated to providing the best service possible.
        </p>
      </header>
      <section className="Team">
        <h2>Our Team</h2>
        <div className="Team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="Team-member">
              <img src={member.photo} alt={member.name} className="Team-photo" />
              <h3>{member.name}</h3>
              <p className="Team-position">{member.position}</p>
              <p className="Team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;