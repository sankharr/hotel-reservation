import './App.css';
import Download from './components/Download';
import WhyUs from './components/whyUs/WhyUs';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
        {/* <Header/> */}
        <Intro/>
        <WhyUs/>
        <Search/>
        <Download/>
        <Footer/>
    </div>
  )
}

export default App;
