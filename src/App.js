import './App.css';
import Download from './components/Download';
import WhyUs from './components/whyUs/WhyUs';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Search from './components/search/Search';
import Offers from './components/offers/Offers';
import LuxuryStay from './components/luxuryStay/LuxuryStay';
import Location from './components/location/Location';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div className="App">
        {/* <Header/> */}
        <Intro/>
        
        <WhyUs/>
        <Offers/>
        <LuxuryStay />
        <Location />
        <Experience />
        {/* <Search/>
        
        <Download/> */}
        <Footer/>
    </div>
  )
}

export default App;
