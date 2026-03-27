import React from 'react';
import Facebook from '../assets/icons/facebook.png';
import Linkedin from '../assets/icons/linkedin.png';
import Instagram from '../assets/icons/instagram.png';
import Github from '../assets/icons/github.png';

function Footer() {
  const links = [
    { href: "https://web.facebook.com/bastianlla", icon: Facebook, alt: "Facebook", color: "#1877f2" },
    { href: "https://www.linkedin.com/in/sebasti%C3%A1n-llanes-86547b250/", icon: Linkedin, alt: "LinkedIn", color: "#0a66c2" },
    { href: "https://github.com/SebastianLlanes", icon: Github, alt: "GitHub", color: "#f0f0f0" },
    { href: "https://www.instagram.com/_sebastian_llanes/", icon: Instagram, alt: "Instagram", color: "#e1306c" },
  ];

  return (
    <footer className="footer">
      <div className="footer-glass">
        <ul className="footer-links">
          {links.map(function(link, index) {
            return (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ '--link-color': link.color }}
                >
                  <img src={link.icon} alt={link.alt} />
                </a>
              </li>
            );
          })}
        </ul>
        <p className="footer-copy">© 2025 Sebastián Llanes · Click. Scroll. <span>Wow!</span></p>
      </div>
    </footer>
  );
}

export default Footer;