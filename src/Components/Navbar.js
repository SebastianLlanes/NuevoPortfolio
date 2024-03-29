import React from 'react';
import { useLocation } from 'react-router-dom'; // Importa useLocation de react-router-dom

function Navbar() {
  const location = useLocation(); // Obtiene la ubicación actual

  return (
    <nav className='navbar'>
      <ul className='ul-navbar'>
        {/* Usa lógica condicional para renderizar los elementos del navbar */}
        {location.pathname !== '/' && (
          <li className='li-navbar'>
            <a href="/">Home</a>
          </li>
        )}
        {location.pathname !== '/Experience' && (
          <li className='li-navbar'>
            <a href="/Experience">Experience</a>
          </li>
        )}
        {location.pathname !== '/Knownledge' && (
          <li className='li-navbar'>
            <a href="/Knownledge">Knownledge</a>
          </li>
        )}
        {location.pathname !== '/about' && (
          <li className='li-navbar'>
            <a href="/about">About me</a>
          </li>
        )}
        {location.pathname !== '/Contact' && (
          <li className='li-navbar'>
            <a href="/Contact">Contact</a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
