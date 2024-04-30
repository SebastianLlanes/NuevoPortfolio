import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import ColorPicker from '../Components/ColorPicker';

import ProfileImg from '../assets/images/portada.png';
import HtmlIcon from '../assets/icons/html.svg';
import CssIcon from '../assets/icons/css.svg';
import JavascriptIcon from '../assets/icons/js.svg';
import ReactIcon from '../assets/icons/react.svg';
import GitIcon from '../assets/icons/git.svg';
import ResponsiveIcon from '../assets/icons/responsive.svg';
import ColorPickerIcon from '../assets/icons/color-picker.png';
import Moon from '../assets/icons/night-mode.png';
import Sun from '../assets/icons/sun-mode.png';

import '../App.css';


const Home = () => {
 //Efecto texto h2
const [text, setText] = useState(["", ""]);
const typingSpeed = 300;
useEffect(() => {
  const typingIntervals = [];
  const words = ["Frontend",  "Developer."];
  
  words.forEach((word, index) => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => {
        if (prevText[index].length < word.length) {
          return [
            ...prevText.slice(0, index),
            word.substring(0, currentIndex + 1),
            ...prevText.slice(index + 1),
          ];
        } else {
          clearInterval(intervalId);
          return prevText;
        }
      });
      currentIndex++;
    }, typingSpeed);
    typingIntervals.push(intervalId);
  });
  return () => {
    typingIntervals.forEach((intervalId) => clearInterval(intervalId));
  };
 }, []);

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

   root.style.transition = 'background-color 0.5s ease';
 };

  return (
      <div className='home-div'>
        <header>
          <Navbar />
          <button
            className='colorPicker-toggle-button' 
            onClick={toggleColorPicker}
            ><img src={ ColorPickerIcon } alt='Color picker' />
          </button>
          {colorPickerVisible && <ColorPicker />}

          <button 
            className="toggle-color-picker-btn" 
            onClick={toggleDarkMode}>
            {darkMode ? <img src={Sun} alt='Light mode' /> : <img src={Moon} alt='Dark mode' /> }
          </button>
        
        </header>
        <section>
          <div className='border-efect-div'>
            <div className='img-profile-div'>
              <img src={ProfileImg} alt='profile-img' />
            </div>
          </div>
          <div className='titles-home-div'>
            <h1>Sebastián Llanes</h1>
            <h2>
            {text[0]} {text[1]}
              <span className="cursor">|</span> {/* Cursor intermitente */}
            </h2>
          </div>          
        </section>
        <div className='icon-container'>
            <img src={ HtmlIcon } alt='Html' />
            <img src={ CssIcon } alt='Css' />
            <img src={ JavascriptIcon } alt='Javascript' />
            <img src={ ReactIcon } alt='React' />
            <img src={ GitIcon } alt='Git' />
            <img src={ ResponsiveIcon } alt='Responsive' />
          </div>
      </div>
  );
}

export default Home;

