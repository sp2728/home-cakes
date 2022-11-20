import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar as ReactNavbar } from 'react-bootstrap';
import './navbar.css';

interface Props {
  applicationName: string;
  sections: any;
}
const Navbar = ({ applicationName, sections }: Props) => {
    return (
        <ReactNavbar className='navbar' bg="light" expand="lg">
        <Container>
          <ReactNavbar.Brand className='title' href="#home">{applicationName}</ReactNavbar.Brand>
          <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            { sections && Object.keys(sections).map((section)=> <Nav.Link href={`#${section}`} key={section}>{section.charAt(0).toUpperCase() + section.slice(1)}</Nav.Link>)}
            </Nav>
          </ReactNavbar.Collapse>
        </Container>
      </ReactNavbar>
    )
}

export default Navbar