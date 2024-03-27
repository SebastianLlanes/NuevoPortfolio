import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='ul-navbar'>
        <li className='li-navbar'><a href="/">Home</a></li>
        <li className='li-navbar'><a href="/about">About me</a></li>
        <li className='li-navbar'><a href="/Knownledge">Knownledge</a></li>
        <li className='li-navbar'><a href="/Experience">Experience</a></li>
        <li className='li-navbar'><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
