import React from 'react'
import './Planning.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

    function Planning() {
    return (
        <>
            <div className="Planning-container">
                <h1>Our working method</h1>
                <div className="Planning-content">
                    <div>
                        <h2>Schedule</h2>
                        <p>Selecting the right date is the first step toward capturing beautiful memories. We kindly ask that you schedule your session at least two weeks in advance to ensure availability. For maternity photography, the ideal time is between 30 and 32 weeks of pregnancy — this allows us to capture your glow while leaving plenty of time to deliver your photos. Newborn sessions are best done within the first two weeks after birth, when your little one is still tiny and sleepy — perfect for those precious early moments.</p>
                    </div>
                    <div>
                        <h2>Photographing</h2>
                        <p>Your photoshoot is a time to explore different looks and settings, so feel free to bring along a variety of outfits and accessories! With a bit of preparation, we can unlock even more creative possibilities. You’ll collaborate closely with the photographer to choose the right outfits and build a unique style for your session — making each photo truly one of a kind.</p>
                    </div>
                    <div>
                        <h2>process</h2>
                        <p>Once your photoshoot is complete, you'll have the chance to review the images and select your favorites for editing. This is where the magic truly happens. Our editing team uses professional techniques, including skin-enhancing and color correction, to bring out the best in every shot — all while keeping your personal style in mind. Whether you prefer a soft, natural finish or a bold, high-glamour look, we tailor the edits to match your vision. From fine-tuning lighting and tones to perfecting small details, we ensure each photo and video is polished, vibrant, and ready to be shared or printed. Your memories deserve nothing less than perfection.</p>
                    </div>
                </div>

                <div className="justify-content-center">
                    <Link to="/Contact" className=" planning-contact">Contact</Link>
                </div>
            </div>
        </>
    )
    }

    export default Planning
