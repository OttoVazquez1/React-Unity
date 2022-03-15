import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">UNITY</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#remeras">T-Shirts</Nav.Link>
        <Nav.Link href="#hoodies">Hoodies</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Nav.Link href='#home'>
        <img className='w-25' src='https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png' alt="Carrito" />
    </Nav.Link>
  </Container>
</Navbar>
  )
}

export default NavBar