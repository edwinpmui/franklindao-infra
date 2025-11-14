import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import '../css/Home.css';
import Metrics from '../components/Metrics';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="Home">
      <div className="SiteContent">
        <section className="PageSection">
          <Banner />
        </section>

        <section className="PageSection">
          <About />
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