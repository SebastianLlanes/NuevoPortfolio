import React, {useState, useEffect} from 'react';
import FamilyImg from '../assets/images/family-modified.png';
import FirefighterImg from '../assets/images/bombero.jpg';
import MilitarImg from '../assets/images/militar-modified.jpg';
import RugbyImg from '../assets/images/rugby.jpg';
import FirefighteClaseImg from '../assets/images/bomberoclase.jpg';
import '../App.css';

// const ImageSlider = () => {
//   return (
//     <div className="slider">
//       <img src={FamilyImg} alt="Family" />

//       <img src={FirefighterImg} alt="Firefighting" />

//       <img src={MilitarImg} alt="militar" />

//       <img src={RugbyImg} alt="Rugby" />

//       <img src={FirefighteClaseImg} alt="Firefighter Class" />
//     </div>
//   );
// };

// export default ImageSlider;
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = 5; // Número total de imágenes en el slider

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide(currentSlide => (currentSlide + 1) % totalSlides); // Usar el operador módulo para volver al primer índice cuando se alcanza el último
      }
    }, 3000);

    return () => clearInterval(sliderInterval);
  }, [isPaused, totalSlides]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={FamilyImg} alt="Family" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
      <img src={FirefighterImg} alt="Firefighting" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
      <img src={MilitarImg} alt="militar" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
      <img src={RugbyImg} alt="Rugby" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
      <img src={FirefighteClaseImg} alt="Firefighter Class" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
    </div>
  );
};

export default ImageSlider;