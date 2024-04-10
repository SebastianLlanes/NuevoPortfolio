import React from 'react';
import Facebook from '../assets/icons/facebook.png';
import Linkedin from '../assets/icons/linkedin.png';
import Instagram from '../assets/icons/instagram.png';
import Github from '../assets/icons/github.png';

function Footer() {

  return (
    <footer className='footer'>
        <ul>
            <li>
                <a href="https://web.facebook.com/bastianlla" target='blank'>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <span><img src={Facebook} alt='facebook'/></span>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/sebasti%C3%A1n-llanes-86547b250/" target='blank'>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <span><img src={Linkedin} alt='Linkedin' /></span>
                </a>
            </li>
            <li>
                <a href="https://github.com/SebastianLlanes" target='blank'>
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                    <span><img src={Github} alt='Github' /></span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/_sebastian_llanes/" target='blank'>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <span><img src={Instagram} alt='Instagram' /></span>
                </a>
            </li>
        </ul>   
  </footer>
  );
}

export default Footer;