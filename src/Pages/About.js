import React from 'react';
import ImageSlider from '../Components/ImageSlider';

const About = () => {
  return (
      <div id='page'  className='about-div'>
        <h2>About me</h2>
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