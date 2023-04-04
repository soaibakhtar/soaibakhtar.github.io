import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Container/Home/Home"
import About from "./Components/Container/About/About"
import Skills from "./Components/Container/Skills/Skills"
import Portfolio from "./Components/Container/Portfolio/Portfolio"
import Contact from "./Components/Container/Contact/Contact"
import Footer from "./Components/Container/Footer/Footer"
import Github from './Components/Container/Github/Github';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Github/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
