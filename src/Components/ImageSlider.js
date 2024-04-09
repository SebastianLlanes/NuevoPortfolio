import React from 'react';
import FamilyImg from '../assets/images/family-modified.png';
import FirefighterImg from '../assets/images/bombero.jpg';
import MilitarImg from '../assets/images/militar-modified.jpg';
import RugbyImg from '../assets/images/rugby.jpg';
import FirefighteClaseImg from '../assets/images/bomberoclase.jpg';
import '../App.css';

const ImageSlider = () => {
  return (
    <div className="slider">
      <img src={FamilyImg} alt="Family" />

      <img src={FirefighterImg} alt="Firefighting" />

      <img src={MilitarImg} alt="militar" />

      <img src={RugbyImg} alt="Rugby" />

      <img src={FirefighteClaseImg} alt="Firefighter Class" />
    </div>
  );
};

export default ImageSlider;
