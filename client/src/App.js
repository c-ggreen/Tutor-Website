import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import FAQ from './Components/FAQ';
import Home from './Components/Home'
import Nav from './Components/Nav';
import Tutoring from './Components/Tutoring';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Tutoring/>
      <FAQ/>
      <Contact/>
    </div>
  );
}

export default App;
