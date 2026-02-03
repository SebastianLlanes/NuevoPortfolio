import React from "react";
import FrontendTitle from '../assets/images/frontenddeveloper.png';
import HtmlCssImg from '../assets/images/html-css.png';
import GitImg from '../assets/images/git.png';
import JavascriptImg from '../assets/images/javascript.png';
import ResponsiveImg from '../assets/images/responsivedesign.png';
import PythonImg from '../assets/images/pythonImg.png';
import '../App.css';

function Title() {

  const titleContent = [
    { titulo: 'Frontend Developer', institucion: 'Platzi', image: FrontendTitle },
    { titulo: 'HTML/CSS', institucion: 'Platzi', image: HtmlCssImg },
    { titulo: 'GIT', institucion: 'Platzi', image: GitImg },
    { titulo: 'Javascript', institucion: 'Platzi', image: JavascriptImg },
    { titulo: 'Responsive Design', institucion: 'Platzi', image: ResponsiveImg },
    { titulo: 'Python', institucion: 'Cognitive Class(IBM)', image: PythonImg  },
    
  ]

  return (
    <>
       {titleContent.map((titulo, index) => (
        <div className="knowledge-card" key={index}>
            <div className="knowledge-title" >
                <div className="title-img">
                    <img src={titulo.image} alt={titulo.titulo} className="title-imgs pv delete" />
                </div>
                
                <div className="project-info">
                    <div className="flex">
                    <div className="project-title">{titulo.titulo}</div>
                    <span className="tag"> {titulo.institucion} </span>
                    </div>
                </div>
            </div>
        </div>
     ))}     
   </>
  );
}

export default Title;