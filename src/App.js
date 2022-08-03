import './App.css';
import Download from './components/Download';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Search from './components/Search';

function App() {
  return (
    <div className="App text-white overflow-hidden">
        {/* <Header/> */}
        <Intro/>
        <Experience/>
        <Search/>
        <Download/>
        <Footer/>
    </div>
  )
}

export default App;
