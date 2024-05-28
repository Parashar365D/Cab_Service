import Navbar from './Compontents/Navbar';
import Home from './Compontents/Home';
import React from 'react';
import About from './Compontents/About';
import Contact from './Compontents/Contact';
import Services from './Compontents/Services';
import Footer from './Compontents/Footer';
import './App.css';

function App() {
  return (
    <>
        <Navbar/>
          <Home/>
          <Services/>
          <About/>
          <Contact/>
        <Footer/>
    </>
  );
}

export default App;
