import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';


    function Footer() {
    return (
        <>
            <footer className="footer-container footer_main border-top py-4">
                <div className="container">
                    <div className="row align-items-center justify-content-between text-center text-md-start">

                        <div className="col-md-4 mb-3 mb-md-0">
                            <p className="footer_text">© 2025 ዳviድ pictures. All rights reserved.</p>
                        </div>

                        <div className="col-md-4 mb-3 mb-md-0 tag">
                            <h1>Follow Us</h1>
                            <div className="social_link justify-content-center justify-content-md-start">
                                <Link to="https://www.facebook.com/profile.php?id=100009359620318"><i className="fa-brands fa-facebook"></i></Link>
                                <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                                <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                                <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
                            </div>
                        </div>

                        <div className="col-md-4 footer_links">
                            <ul className="nav justify-content-center justify-content-md-end">
                                <li className="nav-item"><Link to="/" className="nav-link px-2">Home</Link></li>
                                <li className="nav-item"><Link to="About" className="nav-link px-2">About</Link></li>
                                <li className="nav-item"><Link to="Portfolio" className="nav-link px-2">Portfolio</Link></li>
                                <li className="nav-item"><Link to="Contact" className="nav-link px-2">Contact</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;

