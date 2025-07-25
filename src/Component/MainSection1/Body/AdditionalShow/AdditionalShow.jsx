import React from 'react'
import './AdditionalShow.css';
import image1 from '../../../../Assets/Images/wedding3.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavLink from 'react-bootstrap/esm/NavLink';

    function AdditionalShow() {
    return (
        <>
            <div className='additional-show-container'>
                <img src={image1} alt="" />
                <Container>
                <p>
                    From the vibrant colors of Eritrean and Ethiopian weddings to the sacred beauty of baptisms and the joy of birthdays, every celebration is a reflection of our rich Habesha heritage. Through the lens of photography, we capture not just moments, but memories — filled with love, tradition, culture, and community. Whether it’s the elegance of Habesha fashion or the timeless bonds of friendship, each image tells a story of who we are and where we come from. This is more than style — it’s culture, pride, and a celebration of life.
                    </p>
                    <Nav className="justify-content-center">
                        <NavLink className="nav-link Add-booking" To="Contact">Book Now</NavLink>
                    </Nav>
                
                </Container>
        </div>
        </>
    )
    }

    export default AdditionalShow
