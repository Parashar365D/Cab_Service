import React from 'react';
import Navbar from './Compontents/Navbar';
import Home from './Compontents/Home';
import Services from './Compontents/Services';
import About from './Compontents/About';
// import Contact from './Compontents/Contact';
import Footer from './Compontents/Footer';
import './App.css';

function App() {
  return (
    <>
        <Navbar/>
          <Home/>
          <Services/>
          <About/>
          {/* <Contact/>  */}
        <Footer/>
    </>
  );
}

export default App;
