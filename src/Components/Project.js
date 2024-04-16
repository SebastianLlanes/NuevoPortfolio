import React from "react";
import CssIcon from '../assets/icons/css.svg';
import JavascriptIcon from '../assets/icons/js.svg';
import ReactIcon from '../assets/icons/react.svg';
import '../App.css';

function Project() {

  const projectContent = [
    { project: 'Menú digital con pre orden', description: 'Comenzó como un proyecto informativo al que luego se le agrego una dinámica para hacer una preorden por WhatsApp', techOne: JavascriptIcon, techTwo: ReactIcon, techThree: CssIcon },
    { project: 'ToDo App', description: 'Task Machine para quienes desean tener orden con un simple ayuda memoria.', techOne: JavascriptIcon, techTwo: ReactIcon, techThree: CssIcon },
    { project: 'Weather App', description: 'App desarrollada para obtener el comportamiento del clima.',techOne: JavascriptIcon, techTwo: ReactIcon, techThree: CssIcon },
    
  ]

  return (
    <>
    {projectContent.map((project, index) => (
        <div className="project-card-sm" key={index}>
            <div className="card-border-gradient"></div>
                <div className="card-container">
                    <img src="https://unblast.com/wp-content/uploads/2018/08/Gradient-Mesh-22.jpg" alt="" />
                    <div className="wrapper">
                        <h3>{project.project}</h3>
                        <p> {project.description} </p>
                        <span> 
                            <img src={project.techOne} alt='Javasrcipt' />  
                            <img src={project.techTwo} alt='React' /> 
                            <img src={project.techThree} alt='CSS' />    
                        </span>           
                    </div>
            </div>
        </div>
        ))}     
        </>
       );
}
     

export default Project;