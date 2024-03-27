import Navbar from '../Components/Navbar';
import ProfileImg from '../assets/images/Picsart_22-11-07_14-04-00-132.png';
import '../App.css';

const Home = () => {

  return (
    <div className='home-div'>
      <header>
        <Navbar />
      </header>
      <section>
        <div className='border-efect-div'>
          <div className='img-profile-div'>
            <img src={ProfileImg} alt='profile-img' />
          </div>
        </div>
        <div className='titles-home-div'>
          <h1>Sebastián Llanes</h1>
          <h2>Frontend Developer</h2>
        </div>
      </section>
      <footer className='footer'>
        <ul>
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>Whatsapp</li>
          <li>Github</li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;

