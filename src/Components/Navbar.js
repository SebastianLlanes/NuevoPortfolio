import React, { useState, useEffect } from 'react';

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY && currentScrollY > 80);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

useEffect(() => {
  const sections = ['home', 'experience', 'knowledge', 'about', 'contact'];

  const handleScroll = () => {
    const windowHeight = window.innerHeight;

    let current = sections[0];
    let minDistance = Infinity;

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const distance = Math.abs(rect.top - windowHeight * 0.3);
      if (distance < minDistance) {
        minDistance = distance;
        current = id;
      }
    });

    setActiveSection(current);
  };

  // Ejecutar al montar para marcar Home desde el inicio
  handleScroll();

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'knowledge', label: 'Knowledge' },
    { id: 'about', label: 'About me' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={hidden ? 'navbar navbar--hidden' : 'navbar'}>
      <ul className="ul-navbar">
        {navItems.map(function(item) {
          var linkClass = activeSection === item.id ? 'nav-link--active' : '';
          return (
            <li key={item.id} className="li-navbar">
              <a href={'#' + item.id} className={linkClass}>{item.label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
