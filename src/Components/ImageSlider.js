import React, { useState, useEffect } from 'react';
import FamilyImg from '../assets/images/family2025.jpg';
import FirefighterImg from '../assets/images/bombero.jpeg';
import MilitarImg from '../assets/images/militar-modified.jpeg';
import RugbyImg from '../assets/images/rugby.jpeg';
import FirefighteClaseImg from '../assets/images/bomberoclase.jpg';
import '../App.css';

const slideContent = [
  {
    picture: FamilyImg,
    titulo: "Mi familia",
    description:
      "Es el núcleo mas importante de mi vida, la plataforma de lanzamiento desde donde despegan mis proyectos.",
  },
  {
    picture: FirefighteClaseImg,
    titulo: "20 años en aeronaútica",
    description:
      "Tengo una larga trayectoria en el ámbito aeroportuario, dedicándome siempre al Servicio de Salvamento y Extinción de Incendios en Aeronaves.",
  },
  {
    picture: RugbyImg,
    titulo: "Deportista",
    description:
      "La etapa deportiva la considero importante porque me enseño valores como el trabajo en equipo, el compromiso y el esfuerzo.",
  },
  {
    picture: MilitarImg,
    titulo: "Mi etapa en Fuerza Aérea",
    description:
      "Durante seis años, tuve el honor de servir como soldado en la Fuerza Aérea. Estos años moldearon mi carácter, enseñándome a enfrentar desafíos con determinación y a liderar con integridad. Al día de hoy sigue siendo una fuente constante de inspiración en mi carrera profesional.",
  },
  {
    picture: FirefighterImg,
    titulo: "Mi vocación",
    description:
      "Como bombero aeronáutico, he aprendido a responder con rapidez y precisión en situaciones críticas, trabajando en estrecha colaboración con equipos multidisciplinarios para garantizar la seguridad de todos.",
  },
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='slideshow'>
      {slideContent.map((slide, index) => (
        <div
          key={index}
          className={`slideshow-item ${index === activeIndex ? 'slideshow-item--active' : ''}`}
        >
          <img 
          src={slide.picture} 
          alt={slide.titulo} 
          className={index === 3 ? 'slide-img--right' : ''}
           />
          <div className='slideshow-item-text'>
            <h5>{slide.titulo}</h5>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
      <div className='slideshow-dots'>
        {slideContent.map((_, index) => (
          <button
            key={index}
            className={`slideshow-dot ${index === activeIndex ? 'slideshow-dot--active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;