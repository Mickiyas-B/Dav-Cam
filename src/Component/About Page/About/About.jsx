import React from 'react'
import './About.css';
import aboutImage from '../../../assets/Images/Baby banner.jpg';
import pregnancyImage from '../../../assets/Images/pregnancy2.png';
import anywhereImage from '../../../assets/Images/Anywhere.jpg';
import Planning from '../Planing/Planning';

    function About() {
    return (
        <>
            <div className="About-container">
            <div className='About-banner'>
                <img src={aboutImage} alt="about banner Image" className='About-banner-image'/>
                </div>
                <h1 className='about-title'>Our Studio</h1>
                <div className="About-content">
                    <div>
                        <h1>Atmosphere</h1>
                        <p className='Atmosphere-pragraph'>Available Anywhere, Anytime – Your Story, Your Location
    No studio? No problem. Our photography is all about capturing real moments in real places — whether it's a wedding, birthday, baptism, or a casual shoot with friends. We come to you, wherever you are, to bring your vision to life. With a flexible schedule and a passion for telling authentic stories through the lens, we ensure every shoot feels natural, personal, and unforgettable. From the heart of Eritrean and Habesha culture to spontaneous, on-location sessions, we're here to create timeless memories — on your terms.
                        </p>
                    </div>
                    <div>
                        <h1>Shaking</h1>
                        <p>Photography Without Limits – We Come to You
We don’t work from a fixed studio — instead, we bring the studio experience to you. Based in Belgium and easily accessible from surrounding areas, we are fully mobile and flexible, ready to shoot at any location that fits your vision. Whether it's your home, a beautiful outdoor setting, or a special event venue, we adapt to your style and needs. This freedom allows us to capture authentic, meaningful moments in environments where you feel most comfortable. Your story, your setting — we’ll be there.</p>
                    </div>
                </div>
                <div className="About-images">
                    <div>
                        <img src={anywhereImage} alt="" className='atmosphere'/>
                    </div>
                    <div>
                        <img src={pregnancyImage} alt="" className='pregnant-image'/>
                    </div>
                </div>
            </div>

            <Planning />
        </>
    )
    }

    export default About
