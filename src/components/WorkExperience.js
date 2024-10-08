import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <section id="work-experience" className="section work-experience">
      <h2 className="section-title">Work Experience</h2>
      <hr/>
      <div className="experience-container">
        <div className="experience-box">
          <h3 className="experience-title">Data Analyst Intern</h3>
          <p className="experience-date">Aug 2023 - Oct 2023</p>
          <ul>
            <li>Extracted data from various social media platforms using web scrapers.</li>
            <li>Filtered and analyzed extracted data for company relevance.</li>
            <li>Collaborated effectively in team settings, contributing to overall project success.</li>
          </ul>
        </div>
        <div className="experience-box">
          <h3 className="experience-title">Technical Content Writer</h3>
          <p className="experience-date">Sep 2023 - Feb 2024</p>
          <ul>
            <li>Authored and published four articles on Machine Learning and Data Analytics.</li>
            <li>Enhanced writing skills and technical knowledge through content creation.</li>
            <li>Recognized for delivering clear, concise, and informative articles.</li>
          </ul>
        </div>
        <div className="experience-box">
          <h3 className="experience-title">Full Stack Intern</h3>
          <p className="experience-date">Feb 2024 - May 2024</p>
          <ul>
            <li>Developed the main product and the initial launch page.</li>
            <li>Engineered AI-based product features and web development using Flutter, Node.js, and Ruby on Rails.</li>
            <li>Set up backend infrastructure to support various projects.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
