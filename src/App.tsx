import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Specialization from './components/Specialization';
import Technologies from './components/Technologies';
import Industries from './components/Industries';
import References from './components/References';
import Reviews from './components/Reviews';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gray-100">
        <Header />
        <Banner />
        <About />
        <Services />
        <Specialization />
        <Technologies />
        <Industries />
        <References />
        <Reviews />
        <Partners />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
