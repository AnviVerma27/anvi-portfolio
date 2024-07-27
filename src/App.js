import React, { useEffect } from 'react';
import Header from './components/Header';
import Name from './components/Name';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Volunteering from './components/Volunteering';
import Footer from './components/Footer';
import background from './assets/background.png'
import { initScrollAnimations } from './scrollAnimations';
import './App.css';

const App = () => {

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
      {/* <WorkExperience /> */}
      {/* <Projects /> */}
      <div className="animated-section section-hidden">
      <Skills /></div>
      {/* <Publications /> */}
      <div className="animated-section section-hidden">
      <Volunteering /></div>
      <Footer />
    </div>
  );
};

export default App;
