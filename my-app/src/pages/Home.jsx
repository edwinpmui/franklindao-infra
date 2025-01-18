import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import '../css/Home.css';
import Metrics from '../components/Metrics';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="Home">
      <Banner />
      <About />
      <Metrics />
      <Footer />
    </div>
  );
}

export default Home;