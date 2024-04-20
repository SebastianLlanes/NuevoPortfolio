import React from 'react';
import '../App.css';
import Card from '../Components/Card';
import Project from '../Components/Project';

const Experience = () => {
  return (
        <div className='exp-container'>
          <h2>Experience</h2>
          <div className='exp-card-container'>
            <Card />
          </div>
          <h2>Projects</h2>
          <div className='project-card-container'>     
            <Project />
          </div>
        </div>
  );
}

export default Experience;
