import React from 'react'
import './Conatct.css';

    function Contact() {
    return (
        <>
            <div className='Contact-container'>
                <div className='Contact-Header'>
                    <div className='Contact-Header-Title'>
                        <h1>Contact</h1>
                        <p>We’d love to hear from you! If you’d like to connect before making a reservation, simply leave us a message using the contact form below. We’ll get back to you as soon as possible to answer your questions and guide you through the next steps.</p>
                        <p>
                            If you’re ready to book your session, please fill out the reservation form. We’ll confirm your booking and provide you with all the details you need for a smooth and enjoyable experience.</p>
                        <p>We look forward to capturing your special moments!</p>
                        
                    </div>
                    <div className='Contact-Header-Form'>
                        <form action="">
                            <div className='Contact-Form-Name'><span>Name</span></div>
                            <input className='Contact-Input-First' type="text" placeholder='Enter your First name' required />
                            <input className='Contact-Input-Second' type="text" placeholder='Enter your second name' required />
                            <div className='Contact-Form-Name'><span>Email</span></div>
                            <input className='Contact-Input-Email' type="email" placeholder='Enter your email' required />
                            <div className='Contact-Form-Name'><span>Phone</span></div>
                            <input className='Contact-Input-Phone' type="tel" placeholder='Enter your phone number' required />
                            <div className='Contact-Form-Name'><span>Message</span></div>
                            <textarea className='Contact-Input-Message' placeholder='Enter your message' required />
                            <button type='submit' className='Contact-Button'>Send</button>
                        </form>
                    </div>
                </div>
        </div>
        </>
    )
    }

export default Contact;
