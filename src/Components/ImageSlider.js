import React from 'react';
import FamilyImg from '../assets/images/family-modified.png';
import FirefighterImg from '../assets/images/bombero.jpg';
import MilitarImg from '../assets/images/militar-modified.jpg';
import RugbyImg from '../assets/images/rugby.jpg';
import FirefighteClaseImg from '../assets/images/bomberoclase.jpg';
import '../App.css';



const ImageSlider = () => {
  
  const slideContent = [
    { picture: FamilyImg, titulo: 'Mi familia', description: 'Algo lindo sobre mi familia' },
    { picture: FirefighteClaseImg, titulo: 'Enseñando en el cuartel', description: 'Algo sobre el cuartel del aeropuerto y mi rol' },
    { picture: RugbyImg, titulo: 'Deportista', description: 'Algo lindo sobre el deporte' },
    { picture: MilitarImg, titulo: 'Mi etapa en Fuerza Aérea', description: 'Algo bueno sobre fuerza aerea' },
    { picture: FirefighterImg, titulo: 'Mi vocación', description: 'Algo bueno sobre ser bombero' },
    
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