import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer/Footer';     
import About from './Component/About Page/About/About';;
import Portfolio from './Component/Portofolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Main from './Component/Main Page/Main';
import Header from './Component/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";




function App() {


  return (
    <>
      <BrowserRouter basename="/Dav-Cam">
      <Header />
    
      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Main />} />
      
      </Routes>
  
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default App;
