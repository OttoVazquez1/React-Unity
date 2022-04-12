import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'



function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <NavLink className='nav-link' to='/'>UNITY</NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink className='nav-link' to='categoria/tees'>T-Shirts</NavLink>
        <NavLink className='nav-link' to='categoria/hoodie'>Hoodies</NavLink>
      </Nav>
    </Navbar.Collapse>
    <NavLink to='/cart'>
      <CartWidget/>
    </NavLink>
  </Container>
</Navbar>
  )
}

export default NavBar