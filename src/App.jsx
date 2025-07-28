import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer/Footer';     
import About from './Component/About Page/About/About';;
import Portfolio from './Component/Portofolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Main from './Component/Main Page/Main';
import Header from './Component/Header/Header';
import { Routes, Route } from 'react-router-dom';




function App() {


  return (
    <>
      <Header />
      <Main />
    
      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      
      </Routes>
  
      <Footer />
    </>
  )
}

export default App;
