import React from 'react';
import ImageSlider from '../Components/ImageSlider';

const About = () => {
  return (
      <div id='page'  className='about-div'>
        <h2>About me</h2>
        <section className='about-section'>          
          <ImageSlider />
        </section>
      </div>
  );
}

export default About;