import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import ProfileImg from '../assets/images/Picsart_22-11-07_14-04-00-132.png';
import '../App.css';

const Home = () => {
 //Efecto texto h2
const [text, setText] = useState(["", ""]);
const typingSpeed = 100;
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

  return (
      <div className='home-div'>
        <header>
          <Navbar />
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
      </div>
  );
}

export default Home;

