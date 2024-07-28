import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <hr />
      <div className="projects-container">
        <div className="project-box">
          <h3 className="project-title">Translingo: Instant Sentence Translator</h3>
          <p>GitHub: <a href="https://github.com/AnviVerma27/Translator">AnviVerma27/Translator</a></p>
          <p>Streamlit: <a href="https://translatoresg2b8cttebdeyaehlazrw.streamlit.app">Translingo App</a></p>
          <ul>
            <li>Developed an application that instantly translates sentences from any language to English and suggests similar sentences.</li>
            <li>Leveraged natural language processing techniques to enhance translation accuracy and provide contextual sentence suggestions.</li>
          </ul>
        </div>

        <div className="project-box">
          <h3 className="project-title">Talking Recipe Book</h3>
          <p>GitHub: <a href="https://github.com/AnviVerma27/Talking-recipe">AnviVerma27/Talking-recipe</a></p>
          <ul>
            <li>Created an application that provides recipes for various dishes in voice format.</li>
            <li>Implemented text-to-speech technology to enhance user experience, allowing users to follow recipes hands-free while cooking.</li>
          </ul>
        </div>

        <div className="project-box">
          <h3 className="project-title">Face Detection</h3>
          <p>GitHub: <a href="https://github.com/AnviVerma27/Face-Detection">AnviVerma27/Face-Detection</a></p>
          <ul>
            <li>Implemented an OpenCV project to detect faces in webcam footage, images, and videos.</li>
            <li>The application highlights detected faces with bounding boxes.</li>
            <li>Enhanced the model to work in real-time and handle multiple faces simultaneously.</li>
          </ul>
        </div>

        <div className="project-box">
          <h3 className="project-title">Spam-Ham Detection</h3>
          <p>GitHub: <a href="https://github.com/AnviVerma27/sms-classification-spam-ham">AnviVerma27/sms-classification-spam-ham</a></p>
          <ul>
            <li>Developed a machine learning model to classify text messages as spam or ham.</li>
            <li>Utilized natural language processing and feature extraction techniques to improve its accuracy.</li>
            <li>Deployed the model to provide real-time message classification.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
