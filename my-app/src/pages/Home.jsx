import React from 'react';
import Banner from '../components/Banner';
import About, { AboutOrg, MeetTheTeam } from '../components/About';
import '../css/Home.css';
import Metrics from '../components/Metrics';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="Home">
      <div className="SiteContent">
        <section className="PageSection PageSection--hero">
          <Banner />
        </section>

        {/* horizontal divider between banner and about */}
        <div className="SectionDivider" aria-hidden="true" />

        <section className="PageSection PageSection--dark">
          <AboutOrg />
        </section>

        <section className="PageSection PageSection--split">
          <MeetTheTeam />
        </section>

        <section className="PageSection">
          <Metrics />
        </section>

        <footer className="PageSection">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Home;