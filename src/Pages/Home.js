import React, {useState, useEffect} from 'react';
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

const words = ["Click", "Scroll", "Wow!"];

const Home = () => {

const typingSpeed = 120;
const delayBetweenWords = 600;

const [text, setText] = useState(Array(words.length).fill(""));
const [wordIndex, setWordIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);

useEffect(() => {
  if (wordIndex >= words.length) return;

  const currentWord = words[wordIndex];

  const timeout = setTimeout(() => {
    if (charIndex < currentWord.length) {
      setText((prev) => {
        const updated = [...prev];
        updated[wordIndex] = currentWord.substring(0, charIndex + 1);
        return updated;
      });
      setCharIndex((prev) => prev + 1);
    } else {
      setTimeout(() => {
        setWordIndex((prev) => prev + 1);
        setCharIndex(0);
      }, delayBetweenWords);
    }
  }, typingSpeed);

  return () => clearTimeout(timeout);
}, [charIndex, wordIndex]);

// Color Picker
const [colorPickerVisible, setColorPickerVisible] = useState(false);

const toggleColorPicker = () => {
    setColorPickerVisible(!colorPickerVisible);
  };

 // Estado para el modo claro/oscuro
 const [darkMode, setDarkMode] = useState(true);

 // Función para cambiar entre el modo claro y oscuro
 const toggleDarkMode = () => {
   setDarkMode(!darkMode);

   // Obtenemos los estilos actuales de las variables CSS
   const root = document.documentElement;
   const currentSmokyBlack = getComputedStyle(root).getPropertyValue('--smoky-black');
   const currentWhite = getComputedStyle(root).getPropertyValue('--white');

   // Intercambiamos los valores de las variables
   root.style.setProperty('--smoky-black', currentWhite);
   root.style.setProperty('--white', currentSmokyBlack);

   root.style.transition = 'background-color 0.9s ease';
 };

  return (
    <div className="home-div">
      <header>
        <Navbar />
        <button
          className="colorPicker-toggle-button"
          onClick={toggleColorPicker}
        >
          <img src={ColorPickerIcon} alt="Color picker" />
        </button>
        {colorPickerVisible && <ColorPicker />}

        <button className="toggle-color-picker-btn" onClick={toggleDarkMode}>
          {darkMode ? (
            <img src={Sun} alt="Light mode" />
          ) : (
            <img src={Moon} alt="Dark mode" />
          )}
        </button>
      </header>
      <section>
        <div className="border-efect-div">
          <div className="img-profile-div">
            <ProfileCarousel />
          </div>
        </div>
        <div className="titles-home-div">
          <h1>Sebastián Llanes</h1>
          <h2>
            {text.map((t, i) => (
              <span key={i}>{t} </span>
            ))}
            <span className="cursor">|</span>
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

