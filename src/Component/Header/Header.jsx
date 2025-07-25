import { Link } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Images/logo2.png';

function Header() {
    return (
        <Navbar expand="lg" bg="none" className="Header-content">
            <Container className="Header-container-fluid">
                <Navbar.Brand className="logo-container">
                    <img
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-center"
                        alt="Dav Cam logo"
                    />
                    <span className="Logo-name">ዳviድ pictures</span>
                </Navbar.Brand>

                {/* Toggle button for mobile view */}
                <Navbar.Toggle  aria-controls="navbar-nav" />

                {/* Collapsible nav links */}
                <Navbar.Collapse id="navbar-nav" className='Header-nav-collapse'>
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Link to="/" className="nav-link Home">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/About" className="nav-link Home">About</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/Portfolio" className="nav-link Home">Portfolio</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/Contact" className="nav-link Home">Contact</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
