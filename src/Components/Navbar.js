import React from 'react';

function Navbar() {

  return (
    <nav className='navbar'>
      <ul className='ul-navbar'>
        
          <li className='li-navbar'>
            <a href="#home">Home</a>
          </li>        

          <li className='li-navbar'>
          <a href="#experience">Experience</a>
          </li>           

          <li className='li-navbar'>
          <a href="#knowledge">Knowledge</a>
          </li>      

          <li className='li-navbar'>
          <a href="#about">About me</a>
          </li>     
            
          <li className='li-navbar'>
          <a href="#contact">Contact</a>
          </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
