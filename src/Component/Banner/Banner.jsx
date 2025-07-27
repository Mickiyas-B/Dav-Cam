import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Banner.css';
import Banner1 from './../../assets/Images/banner 1 .jpg';
import Banner2 from './../../assets/Images/Banner 2.jpg';    
import Banner3 from './../../assets/Images/banner 3.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


    function Banner() {
    return (
        <>
        <Container className='Banner-container'>
    <Row className='Banner-row'>
        <Col><img src={Banner1} alt="Banner pictures"  className='Banner1'/></Col>
        <Col><img src={Banner2} alt="Banner pictures" className='Banner2'/></Col>
        <Col><img src={Banner3} alt="Banner pictures" className='Banner3'/></Col>
    </Row>
        </Container>
        <div className='Banner-booking'>
                <Link to="/Contact" className='Booking'>Book Now</Link>
        </div>  
        
        </>
    )
    }

    export default Banner
