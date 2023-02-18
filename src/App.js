import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from "./components/Skills/Skills"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
