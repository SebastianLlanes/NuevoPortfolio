import Home from './Pages/Home';
import About from './Pages/About';
import Knowledge from './Pages/Knowledge';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import './App.css';

const App = () => {
  return (
    <>
       <div id="home">
        <Home />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="knowledge">
        <Knowledge />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;

