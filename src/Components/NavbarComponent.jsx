import {useState,useEffect} from 'react'


import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";





const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

const changeBackgroundColor = () =>{



  if (window.scrollY) {

    setChangeColor(true)
  }else{
    setChangeColor(false)
  }
}

useEffect(()=>{
  changeBackgroundColor()

  window.addEventListener('scroll',changeBackgroundColor)
})



  return (
    <div>
    
      <Navbar expand="lg" className= {changeColor ? "color-active " : ""}>
        <Container>
          <Navbar.Brand href="/" className="fs4 fw-bold">
            Faris RR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map(link => {
                return (
                  <div key={link.id} className="nav-link text-center">
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending, isTransitioning }) =>
                        [
                          isPending ? "pending" : "",
                          isActive ? "active" : "",
                          isTransitioning ? "transitioning" : "",
                        ].join(" ")
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <button className=" btn btn-outline-dark rounded-1">
                Ask Me
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
