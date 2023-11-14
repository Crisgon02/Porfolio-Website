import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/img/logo.svg"
import nav1 from "../assets/img/nav-icon1.svg"
import nav2 from "../assets/img/nav-icon2.svg"
import nav3 from "../assets/img/nav-icon3.svg"
import {useState, useEffect} from "react";
import "./Navbar.css";
function NavBar() {
    const[activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);

            }else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateLink = (value) => {
        setActiveLink(value)
    }
  return (
    <Navbar expand="lg" className = {scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={"https://media.giphy.com/media/lyLRTrqRpW8YU/giphy.gif"} alt="atom" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#home" className ={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={() => onUpdateLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className ={activeLink === 'skills' ? 'active navbar-link':'navbar-link'} onClick={() => onUpdateLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className ={activeLink === 'projects' ? 'active navbar-link':'navbar-link'} onClick={() => onUpdateLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"> 
                    <img src={nav1} alt=""/>
                </a>
                <a href="#"> 
                    <img src={nav3} alt =""/>
                </a>
                <a href="#"> 
                    <img src={nav2} alt =""/>
                </a>
            </div>
            <button className='vvd' onClick = {() => console.log('connect')}>
                <span>Lets Connect</span>
            </button>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;