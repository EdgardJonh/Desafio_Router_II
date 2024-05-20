// ahora usamos navlink
// Propiedades de react bootstrap

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// propiedades de react router dom
import { NavLink } from "react-router-dom";

const Navbars = () => {
    const setActiveClass = ({isActive})=>(isActive ? 'isActive' : 'noActive')
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="#home">PokeApp</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={setActiveClass} to="/">Home</NavLink>|
            <NavLink className={setActiveClass} to="pokemones">Pokemones</NavLink> 
          </Nav>
      </Container>
    </Navbar>
  );
};
export default Navbars;
