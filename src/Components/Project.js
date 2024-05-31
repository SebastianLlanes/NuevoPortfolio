import React from "react";
import CssIcon from '../assets/icons/css.svg';
import JavascriptIcon from '../assets/icons/js.svg';
import ReactIcon from '../assets/icons/react.svg';
import SantaGulaIcon from '../assets/images/santagula.jpg';
import AntroIcon from '../assets/images/antro.png';
import ToDoAppIcon from '../assets/images/todoapp.png';
import SubscriptionTrackerIcon from '../assets/images/popcorn2.png';
import '../App.css';

function Project() {

  const projectContent = [
    { project: 'Menú digital con pre orden', image: SantaGulaIcon, description: 'Comenzó como un proyecto informativo al que luego se le agrego una dinámica para hacer una preorden por WhatsApp', techOne: JavascriptIcon, techTwo: ReactIcon, techThree: CssIcon, url: 'https://santa-gula-menu.vercel.app/' },
    { project: 'Menú digital', image: AntroIcon, description: 'Menú digital con portada, botones de bebidas y comidas, enlaces a redes sociales y Spotify', techOne: JavascriptIcon, techTwo: ReactIcon, techThree: CssIcon, url: 'https://antro-bar.vercel.app' },
    { project: 'ToDo App', image: ToDoAppIcon, description: 'Task Machine para quienes desean tener orden con un simple ayuda memoria.', techOne: JavascriptIcon, techTwo: ReactIcon, techThree: CssIcon, url: 'https://sebastianllanes.github.io/ToDoApp/' },
    { project: 'Subscriptions Tracker', image: SubscriptionTrackerIcon, description: 'App para control de gastos en subscripciones.', techOne: JavascriptIcon, techTwo: ReactIcon, techThree: CssIcon, url: 'https://subscriptions-tracker-one.vercel.app/' },
    // { project: 'Weather App', image: , description: 'App desarrollada para obtener el comportamiento del clima.',techOne: JavascriptIcon, techTwo: ReactIcon, techThree: CssIcon },
    
  ]

  const handleClick = (url) => {
    setTimeout(() => {
      window.open(url, '_blank');
    }, 500); 
  };
  

  return (
    <>
    {projectContent.map((project, index) => (
         <a href={project.url} onClick={() => handleClick(project.url)} key={index}  className="project-card-sm" target="_blank" rel="noopener noreferrer">
            <div>
                <div className="card-border-gradient"></div>
                    <div className="card-container">
                        <img src= {project.image} alt= {project.project} />
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
        </a>
         
        ))}     
        </>
       );
}
     

export default Project;