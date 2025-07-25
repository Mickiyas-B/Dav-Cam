import React from 'react'
import './Portfolio.css';
import img1 from '../../assets/Images/Portofolio/Pregnant.jpg';
import img2 from '../../assets/Images/Portofolio/Family.jpg';
import img3 from '../../assets/Images/Portofolio/Mom and me.jpg';
import img4 from '../../assets/Images/Portofolio/NewBorn.jpg';
import img5 from '../../assets/Images/Portofolio/Beauty.jpg';
import img6 from '../../assets/Images/Portofolio/marriage2.jpg';
import img7 from '../../assets/Images/Portofolio/Digtale shoot.jpg';
import img8 from '../../assets/Images/Portofolio/Kids2.jpg';
import img9 from '../../assets/Images/Wedding.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Portfolio() {
        
    return (
        <>

            <div className='Portfolio-header-container'>
            <div className="Portfolio-container">
                    <div className="Portfolio-header">
                    <img src={img9} alt="" className='img1' />
                    <img src={img2} alt="" />
                    
                    <img src={img3} alt="" />
                </div>
                <div className="Portfolio-Small-Titel">
                    <p>Holidays</p>
                    <p>Marriage</p>
                    <p>Mommy And Me</p>
                </div>
                <div className="Portfolio-header">
                    <img src={img8} alt=""/>
                    <img src={img4} alt="" className='img1'/>
                    <img src={img6} alt="" className='img1'/>
                </div>
                <div className="Portfolio-Small-Titel">
                    <p>Kids</p>
                    <p> Baptism</p>
                    <p>Family</p>
                </div>
                <div className="Portfolio-header">
                    <img src={img7} alt="" className='img1'/>
                    <img src={img1} alt="" className='img1'/>
                    <img src={img5} alt="" />
                </div>
                <div className="Portfolio-Small-Titel">
                    <p>Digital Model</p>
                    <p>Pregnancy</p>
                    <p>Beauty</p>
                </div>

            </div>
            <div className='Portfolio-Question'>
                <h2>Do you have any questions for us? Feel free to ask!</h2>

                <Nav className="justify-content-center">
                    <Link className=" planning-contact" to="/Contact">Contact</Link>
                </Nav>
                </div>
                </div>
        </>
    )
    }

    export default Portfolio
