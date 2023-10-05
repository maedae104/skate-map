import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchButton from './Search';

function NavScroll() {
  return (
    <Navbar bg="light" expand="lg" className="fs-4 flex-grow-1 px-5" >
      
        <Navbar.Brand href="#">Queer Skate Map</Navbar.Brand>
            <Nav.Link href="#action1" style={{padding:'1em', paddingTop: '1em'}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{paddingTop: '1em'}}>Login</Nav.Link>
            <SearchButton />
    </Navbar>
  );
}

export default NavScroll;