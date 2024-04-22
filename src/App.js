import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import { images } from './components/Data';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className='mainBody'>
        <div className='carouselContainer'>
          <Carousel images={images}/>
        </div>
      </div>
      <div className='textBody'>
        <div className='textDetails'>
          <h1>Think Health. Think Massage.</h1>
          <p>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 987-654-3210 today!</p>
          <div className='buttons'>
            <button>Learn More about us</button>
            <button>Contact Us Today</button>
          </div>
        </div>
      </div>
      <div className='moreInfo'>
        <p className='heading'>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
        <p>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
        <p>We welcome you to come explore all the benefits you’ll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.</p>
        <br />
        <hr />
        <p className='title'>Family Wellness Massage Therapy</p>
        <div className='contactDetails'>
        <p>888 Griffiths Way, Mainland ML 1234</p>
        <p>Tel: 987.654.3210</p>
        <p>Email: info@yoursite.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
