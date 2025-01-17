import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import '../css/Home.css';
import Metrics from '../components/Metrics';

function Home() {
  return (
    <div className="Home">
      <Banner />
      <About />
      <Metrics />
    </div>
  );
}

export default Home;