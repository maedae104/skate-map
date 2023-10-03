import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavScroll() {
  return (
    <Navbar bg="dark" expand="lg" className="fs-4 flex-grow-1 px-5" style={{backgroundColor: 'black', color: 'white'}}>
      
        <Navbar.Brand href="#" style={{color:'white'}}>Queer Skate Map</Navbar.Brand>
            <Nav.Link href="#action1" style={{color:'white', padding:'1em'}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{color:'white'}}>Login</Nav.Link>
      
    </Navbar>
  );
}

export default NavScroll;