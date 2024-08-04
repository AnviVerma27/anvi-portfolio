// Publications.js
import React from 'react';
import './Publications.css';

const Publications = () => {
  return (
    <section id="publications" className="publications">
      <div className="container">
        <h2>Publications</h2>
        <hr />
        <div className="publication">
          <h3>Contextual Outliers</h3>
          <p><strong>GeeksForGeeks</strong>, Oct 27, 2023</p>
          <p><a href="https://www.geeksforgeeks.org/contextual-outliers/">Understanding contextual outliers</a> is essential across various fields, including statistics, finance, and anomaly detection, as they offer valuable insights into unique events or conditions that impact the data. This article focuses on elaborating the concept of contextual outliers.</p>
        </div>
        <div className="publication">
          <h3>Unsupervised Neural Network Models</h3>
          <p><strong>GeeksForGeeks</strong>, Oct 19, 2023</p>
          <p><a href="https://www.geeksforgeeks.org/unsupervised-neural-network-models/">Unsupervised learning</a> is an intriguing area of machine learning that reveals hidden structures and patterns in data without requiring labelled samples. Because it investigates the underlying relationships in data, it’s an effective tool for tasks like anomaly identification, dimensionality reduction, and clustering. In this article, I have discussed it in detail.</p>
        </div>
        <div className="publication">
          <h3>Feature Descriptor in Image Processing</h3>
          <p><strong>GeeksForGeeks</strong>, Oct 12, 2023</p>
          <p><a href="https://www.geeksforgeeks.org/feature-descriptor-in-image-processing/">In image processing</a>, a feature descriptor is a representation of an image region or key point that captures relevant information about the image content. In this article, I have discussed one of the image processing algorithms i.e. Feature Descriptor.</p>
        </div>
        <div className="publication">
          <h3>Back-propagation with TensorFlow</h3>
          <p><strong>GeeksForGeeks</strong>, Oct 12, 2023</p>
          <p>This article discusses how <a href="https://www.geeksforgeeks.org/back-propagation-with-tensorflow/">backpropagation</a> works in TensorFlow, one of the most popular deep-learning libraries.</p>
        </div>
        <div className="publication">
          <h3>OpenCV: Image Processing</h3>
          <p><strong>Medium</strong>, July 29, 2023</p>
          <p><a href="https://medium.com/@anviver2005/opencv-image-processing-ca2b5186589e">OpenCV</a> stands for Open-source Computer Vision, which is made available by Berkely Software Distribution license. It is basically a group of algorithms inspired by human brain that learn using large number of datasets so as to clone the human instincts.</p>
        </div>
      </div>
    </section>
  );
};

export default Publications;
