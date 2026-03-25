import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const RevealOnScroll = ({ children, direction = 'up', delay = 0 }) => {
    console.log('RevealOnScroll montado');
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

    const current = ref.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, [controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 70 : direction === "down" ? -70 : 0,
      x: direction === "left" ? 70 : direction === "right" ? -70 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // más "elástico" al llegar
      },
    },
  };
  console.log('variants:', variants.hidden);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;