import React from 'react';
import FamilyImg from '../assets/images/family-modified.png';
import FirefighterImg from '../assets/images/bombero.jpg';
import MilitarImg from '../assets/images/militar-modified.jpg';
import RugbyImg from '../assets/images/rugby.jpg';
import FirefighteClaseImg from '../assets/images/bomberoclase.jpg';
import '../App.css';



const ImageSlider = () => {
  
  const slideContent = [
    { picture: FamilyImg, titulo: 'Mi familia', description: 'Es el núcleo mas importante de mi vida, la plataforma de lanzamiento desde donde despegan mis proyectos.' },
    { picture: FirefighteClaseImg, titulo: '20 años en aeronaútica', description: 'Tengo una larga trayectoria en el ámbito aeroportuario, dedicándome siempre al Servicio de Salvamento y Extinción de Incendios en Aeronaves.' },
    { picture: RugbyImg, titulo: 'Deportista', description: 'La etapa deportiva la considero importante porque me enseño valores como el trabajo en equipo, el compromiso y el esfuerzo.' },
    { picture: MilitarImg, titulo: 'Mi etapa en Fuerza Aérea', description: 'Durante seis años, tuve el honor de servir como soldado en la Fuerza Aérea. Estos años moldearon mi carácter, enseñándome a enfrentar desafíos con determinación y a liderar con integridad.Al dia de hoy sigue siendo una fuente constante de inspiración en mi carrera profesional.' },
    { picture: FirefighterImg, titulo: 'Mi vocación', description: 'Como bombero aeronáutico, he aprendido a responder con rapidez y precisión en situaciones críticas, trabajando en estrecha colaboración con equipos multidisciplinarios para garantizar la seguridad de todos.' },
    
  ]


  return (
    <>
    <div className='slideshow' >
    {slideContent.map((slide, index) => (        
        <div className='slideshow-item' key={index}>
            <img src={slide.picture} alt={slide.titulo} />
            <div className='slideshow-item-text'>
                <h5>{slide.titulo}</h5>
                <p> {slide.description} </p>
            </div>
        </div>
    
         ))} 
      </div>    
    </>
   
  );
};

export default ImageSlider;