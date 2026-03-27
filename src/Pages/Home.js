import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import ColorPicker from '../Components/ColorPicker';
import ProfileCarousel from "../Components/ProfileCarousel";

// import ProfileImg from '../assets/images/Picsart_22-11-07_14-04-00-132.png';
import HtmlIcon from '../assets/icons/html.svg';
import CssIcon from '../assets/icons/css.svg';
import JavascriptIcon from '../assets/icons/js.svg';
import ReactIcon from '../assets/icons/react.svg';
import FirebaseIcon from '../assets/icons/firebaseicon.png';
import GitIcon from '../assets/icons/git.svg';
import ResponsiveIcon from '../assets/icons/responsive.svg';
import ColorPickerIcon from '../assets/icons/color-picker.png';
import Moon from '../assets/icons/night-mode.png';
import Sun from '../assets/icons/sun-mode.png';

import '../App.css';

const Home = () => {


// Color Picker
const [colorPickerVisible, setColorPickerVisible] = useState(false);

const toggleColorPicker = () => {
    setColorPickerVisible(!colorPickerVisible);
  };

 // Estado para el modo claro/oscuro
 const [darkMode, setDarkMode] = useState(true);

 // Función para cambiar entre el modo claro y oscuro
// REEMPLAZÁ la función toggleDarkMode completa
const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  document.documentElement.classList.toggle('light-mode');
};
  return (
    <div className="home-div">
      <header>
        <Navbar />
      </header>

      <div className="floating-controls">
        <div className="floating-controls__item">
          <button className="floating-btn" onClick={toggleColorPicker}>
            <img src={ColorPickerIcon} alt="Color picker" />
          </button>
          <span className="floating-btn__tooltip">Personalizar colores</span>
        </div>
        <div className="floating-controls__item">
          <button className="floating-btn" onClick={toggleDarkMode}>
            <img
              src={darkMode ? Sun : Moon}
              alt={darkMode ? "Light mode" : "Dark mode"}
            />
          </button>
          <span className="floating-btn__tooltip">
            {darkMode ? "Modo claro" : "Modo oscuro"}
          </span>
        </div>
        {colorPickerVisible && <ColorPicker />}
      </div>
      <section>
        <div className="border-efect-div">
          <div className="img-profile-div">
            <ProfileCarousel />
          </div>
        </div>
        <div className="titles-home-div">
          <h1>Sebastián Llanes</h1>
          <h2 className="catchphrase">
            <span className="catchphrase__word catchphrase__word--1">
              Click.
            </span>
            <span className="catchphrase__word catchphrase__word--2">
              Scroll.
            </span>
            <span className="catchphrase__word catchphrase__word--3">Wow.</span>
          </h2>
        </div>
      </section>
      <div className="icon-container">
        <img src={HtmlIcon} alt="Html" />
        <img src={CssIcon} alt="Css" />
        <img src={JavascriptIcon} alt="Javascript" />
        <img src={ReactIcon} alt="React" />
        <img src={FirebaseIcon} alt="Firebase" />
        <img src={GitIcon} alt="Git" />
        <img src={ResponsiveIcon} alt="Responsive" />
      </div>
    </div>
  );
}

export default Home;

