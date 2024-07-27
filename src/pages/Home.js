import React, { useEffect } from 'react';
import { initScrollAnimations } from '../scrollAnimations';
import Header from '../components/Header';
import Name from '../components/Name';
import About from '../components/About';
import Skills from '../components/Skills';
import Volunteering from '../components/Volunteering';
import Footer from '../components/Footer';
import background from '../assets/background.png'
import './Home.css';

function Home() {
    useEffect(() => {
        initScrollAnimations();
      }, [])
  return (
    <div className="App">
      <div className='Introduction'  style={{ backgroundImage: `url(${background})` }}>
        <Header />
        <Name />
      </div>
      <div className="animated-section section-hidden">
      <About /></div>
      <div className="animated-section section-hidden">
      <Skills /></div>
      <div className="animated-section section-hidden">
      <Volunteering /></div>
      <Footer />
    </div>
  );
};

export default Home;
