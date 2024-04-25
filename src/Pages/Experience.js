import React from 'react';
import '../App.css';
import Card from '../Components/Card';
import Project from '../Components/Project';
import Curriculum from '../assets/images/LlanesCVi.pdf';

const Experience = () => {
  return (
        <div className='exp-container'>
          <h2>Experience</h2>
          <div className='exp-card-container'>
            <Card />
          </div>
          <a href={ Curriculum } className='cv-cv' target='_blank'  rel='noreferrer'>
            <button id='cv-button'> 
              Acceder al CV
              <span className='overlay'></span>
            </button>
          </a>
          <h2>Projects</h2>
          <div className='project-card-container'>     
            <Project />
          </div>
          
        </div>
  );
}

export default Experience;
