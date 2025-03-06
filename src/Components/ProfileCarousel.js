import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/images/Picsart_25-03-05_00-12-57-839.png"; //Imagen principal de perfil
import img2 from "../assets/images/Picsart_25-03-05_00-15-00-231.png";
import img3 from "../assets/images/Picsart_25-03-05_00-15-46-568.png";
import img4 from "../assets/images/Picsart_25-03-05_00-17-04-764.png";
import img5 from "../assets/images/Picsart_25-03-05_18-07-30-580.png";
import img6 from "../assets/images/Picsart_25-03-05_18-08-18-335.png";
 


const images = [ img1, img2, img3, img4, img5, img6, ]; // Rutas de las imágenes

const ProfileCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Define la duración de cada imagen
    const durations = [3000, 500, 500, 500, 500, 500]; // img1 = 3s, otras = 1s
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, durations[index]);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="carousel-container">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="profile"
          className="carousel-image"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ProfileCarousel;