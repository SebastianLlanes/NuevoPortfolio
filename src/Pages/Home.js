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
        <li>
            <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <span>Facebook</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <span>Linkedin</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i className="fa fa-google-plus" aria-hidden="true"></i>
                <span>Github</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <span>Instagram</span>
            </a>
        </li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;

