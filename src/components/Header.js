import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [show, setShow] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={show ? 'visible' : 'hidden'}>
      <nav>
        <ul>
          <li><a href="#landing">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://github.com/yoyoweiii" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/kevinhsuau/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.facebook.com/fdsa6598/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
      </nav>
    </header>
  );
}

export default Header;