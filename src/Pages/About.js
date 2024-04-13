import React from 'react';
import ImageSlider from '../Components/ImageSlider';

const About = () => {
  return (
      <div id='page' className='home-div'>
        <section className='about-section'>
          <ImageSlider />
          {/* <div className='titles-home-div'>
            <h1>Welcome to my website!</h1>
            <p>This is the homepage of my React.js website.</p>
          </div> */}
        </section>
      </div>
  );
}

export default About;