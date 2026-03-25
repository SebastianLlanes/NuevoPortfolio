import React from 'react';
import RevealOnScroll from './Components/RevealOnScroll';
import VisitorCounter from './Components/VisitorCounter';
import Home from './Pages/Home';
import About from './Pages/About';
import Knowledge from './Pages/Knowledge';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import './App.css';

const App = () => {
  return (
    <>
    <VisitorCounter />
      <div id="home"><Home /></div>
      <RevealOnScroll direction="up">
        <div id="experience"><Experience /></div>
      </RevealOnScroll>
      <RevealOnScroll direction="up" delay={0.1}>
        <div id="knowledge"><Knowledge /></div>
      </RevealOnScroll>
      <RevealOnScroll direction="up" delay={0.1}>
        <div id="about"><About /></div>
      </RevealOnScroll>
      <RevealOnScroll direction="up" delay={0.1}>
        <div id="contact"><Contact /></div>
      </RevealOnScroll>
    </>
  );
}

export default App;

