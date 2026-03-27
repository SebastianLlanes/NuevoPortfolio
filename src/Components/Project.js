import React from "react";
import { motion } from "framer-motion";
import CssIcon from '../assets/icons/css.svg';
import JavascriptIcon from '../assets/icons/js.svg';
import ReactIcon from '../assets/icons/react.svg';
import FirebaseIcon from '../assets/icons/firebaseicon.png';
import SantaGulaIcon from '../assets/images/santagula.jpg';
import SantaGulaGestion from '../assets/images/gestiondepedidos.png';
import AntroIcon from '../assets/images/antro.png';
import ToDoAppIcon from '../assets/images/todoapp.png';
import SubscriptionTrackerIcon from '../assets/images/popcorn2.png';
import GifsForAllIcon from '../assets/images/GifForAll.png';
import TweetCreatorIcon from '../assets/images/tweet-creator.png';
import QuererTIcon from '../assets/images/querer-t.png';
import '../App.css';

function Project() {

  const projectContent = [
    { project: "POS — System de Punto de Venta", image: QuererTIcon, description: "Construido con React 18 y Vite, utilizando CSS Modules para el estilado por componentes. El backend está completamente serverless sobre Firebase — Firestore como base de datos NoSQL en tiempo real y Firebase Auth para la autenticación.", techOne: JavascriptIcon, techTwo: ReactIcon, techThree: FirebaseIcon, url: "https://pos-system-seven-taupe.vercel.app/" },
    { project: "Aplicación para gestión de pedidos", image: SantaGulaGestion, description: "Gestión de pedidos en tiempo real. Almacenamiento de datos en Firebase para confección de informes para análisis en la toma de decisiones.", techOne: JavascriptIcon, techTwo: ReactIcon, techThree: FirebaseIcon, url: "https://santagula-gestion.vercel.app/" },
    { project: "Menú digital con pre orden", image: SantaGulaIcon, description: "Comenzó como un proyecto informativo al que luego se le agregó una dinámica para hacer una preorden por WhatsApp.", techOne: JavascriptIcon, techTwo: ReactIcon, techThree: FirebaseIcon, url: "https://santa-gula-menu.vercel.app/" },
    { project: "Menú digital", image: AntroIcon, description: "Menú digital con portada, botones de bebidas y comidas, enlaces a redes sociales y Spotify.", techOne: JavascriptIcon, techTwo: ReactIcon, techThree: CssIcon, url: "https://antro-bar.vercel.app" },
    { project: "ToDo App", image: ToDoAppIcon, description: "Task Machine para quienes desean tener orden con un simple ayuda memoria.", techOne: JavascriptIcon, techTwo: ReactIcon, techThree: CssIcon, url: "https://sebastianllanes.github.io/ToDoApp/" },
    { project: "Subscriptions Tracker", image: SubscriptionTrackerIcon, description: "App para control de gastos en subscripciones.", techOne: JavascriptIcon, techTwo: ReactIcon, techThree: CssIcon, url: "https://subscriptions-tracker-one.vercel.app/" },
    { project: "Gif For All", image: GifsForAllIcon, description: "Buscador de Gif. Integración de API.", techOne: JavascriptIcon, techTwo: ReactIcon, techThree: CssIcon, url: "https://gifs-for-all.vercel.app/" },
    { project: "Tweet Creator", image: TweetCreatorIcon, description: "Tweet Creator. Uso de diferentes hooks, helpers y librerías.", techOne: JavascriptIcon, techTwo: ReactIcon, techThree: CssIcon, url: "https://tweet-creator.vercel.app/" },
  ];

  const handleClick = (url) => {
    setTimeout(() => { window.open(url, '_blank'); }, 500);
  };

  return (
    <>
      {projectContent.map(function(project, index) {
        return (
          <motion.div
            key={index}
            className="project-card-sm"
            onClick={function() { handleClick(project.url); }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="card-container">
              <img src={project.image} alt={project.project} />
              <motion.div
                className="card-overlay"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{project.project}</h3>
                <p>{project.description}</p>
                <div className="card-tech-row">
                  <img src={project.techOne} alt="Javascript" />
                  <img src={project.techTwo} alt="React" />
                  <img src={project.techThree} alt="CSS" />
                </div>
                <a href={project.url} className="card-demo-btn" target="_blank" rel="noopener noreferrer" onClick={function(e) { e.stopPropagation(); }}>
                  Ver demo →
                </a>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

export default Project;