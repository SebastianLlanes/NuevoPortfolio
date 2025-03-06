import { useState, useEffect } from "react";
import img1 from "../assets/images/Picsart_25-03-05_00-12-57-839.png";
import img2 from "../assets/images/Picsart_25-03-05_00-15-00-231.png";
import img3 from "../assets/images/Picsart_25-03-05_00-15-46-568.png";
import img4 from "../assets/images/Picsart_25-03-05_00-17-04-764.png";
import img5 from "../assets/images/Picsart_25-03-05_18-07-30-580.png";
import img6 from "../assets/images/Picsart_25-03-05_18-08-18-335.png";
import img7 from "../assets/images/Picsart_25-03-05_18-10-03-245.png";
import img8 from "../assets/images/Picsart_25-03-05_18-11-02-073.png";

const images = [ img1, img2, img3, img4, img5, img6, img7, img8 ]; // Rutas de las imágenes

const ProfileCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500); // Tiempo de la transición (0.5s)
    }, 3000); // Cambio de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={images[currentImage]}
      alt="profile-img"
      className={`profile-image ${fade ? "fade-in" : "fade-out"}`}
    />
  );
};

export default ProfileCarousel;
