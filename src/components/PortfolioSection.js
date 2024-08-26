import React from 'react';

const PortfolioSection = () => (
  <section id="portfolio" className="portfolio">
    <h2>Our Work</h2>
    <div className="portfolio-list">
      <div className="portfolio-item">
        <img src="path/to/image1.jpg" alt="Project 1" />
        <h3>Project 1</h3>
      </div>
      <div className="portfolio-item">
        <img src="path/to/image2.jpg" alt="Project 2" />
        <h3>Project 2</h3>
      </div>
      <div className="portfolio-item">
        <img src="path/to/image3.jpg" alt="Project 3" />
        <h3>Project 3</h3>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
