import React from 'react';

const HeroSection = () => (
  <section className="hero" id="home">
    <div className="video-background">
      <video autoPlay muted loop>
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="hero-content">
      <div className="text-content">
        <h1 className="tagline">Empowering businesses to embrace the limitless potential of the cloud while maintaining ironclad security</h1>
        
      </div>
      <div className="image-content">
        <img src="/videos/desktop.gif" alt="Hero" className="animated-image" />
        <p className="sub-tagline">Innovate Fearlessly, Protect Relentlessly.</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
