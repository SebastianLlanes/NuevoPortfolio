import React from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
      <div id='page' className='home-div'>
        <header>
          <Navbar />
        </header>
        <section>
          <div className='border-efect-div'>
            <div className='img-profile-div'>
              ABOUT ME
            </div>
          </div>
          <div className='titles-home-div'>
            <h1>Welcome to my website!</h1>
            <p>This is the homepage of my React.js website.</p>
          </div>
        </section>
      </div>
  );
}

export default About;