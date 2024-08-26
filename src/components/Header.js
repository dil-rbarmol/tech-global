import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home'); // Default active link

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => {
    if (window.scrollY > 50 || window.location.pathname !== '/') {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Update active link based on scroll position
    const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && window.scrollY >= element.offsetTop - 50) {
        setActiveLink(`#${section}`);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo">Tech Global Solutions</div>
        <span className="nav-toggle" onClick={toggleMenu}>
          ☰
        </span>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" className={activeLink === '#home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeLink === '#about' ? 'active' : ''}>About</a></li>
          <li><a href="#services" className={activeLink === '#services' ? 'active' : ''}>Services</a></li>
          <li><a href="#portfolio" className={activeLink === '#portfolio' ? 'active' : ''}>Portfolio</a></li>
          <li><a href="#testimonials" className={activeLink === '#testimonials' ? 'active' : ''}>Testimonials</a></li>
          <li><a href="#contact" className={activeLink === '#contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
