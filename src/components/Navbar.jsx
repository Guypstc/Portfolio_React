import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

/* รูป (Image) */
import Logo from "../assets/image/Logo-Web.png";
import navIcon1 from "../assets/icon/icon-facebook.png";
import navIcon2 from "../assets/icon/icon-instagram.png";
import navIcon3 from "../assets/icon/icon-github.png"; 


export const MyNavbar = () => {
    const [activelink, setActiveLink] = useState('home');
    const [scrolled, setScolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScolled(true);
            }else{
                setScolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    } 
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
      <Navbar.Brand href="#home" className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
        <h2>Portfolio</h2>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activelink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activelink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.facebook.com/prasittichai.meaungthai/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.instagram.com/pstchai/?next=%2F"><img src={navIcon2} alt="" /></a>
                <a href="https://github.com/Guypstc"><img src={navIcon3} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

