import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar as ReactNavbar } from 'react-bootstrap';
import './navbar.css';
import cakeLogo from '../../assets/images/confectionery.svg';

interface Props {
  applicationName: string;
  sections: any;
  handleContactPage?: () => any;
}
const Navbar = ({ applicationName, sections, handleContactPage }: Props) => {
  return (
    <ReactNavbar className='navbar' expand='lg' fixed='top'>
      <Container>
        <ReactNavbar.Brand className='title' href="/"><img className='logo' src={cakeLogo} /> {applicationName}</ReactNavbar.Brand>
        <ReactNavbar.Toggle />
        <ReactNavbar.Collapse className="justify-content-center">
          <Nav>
            {sections && Object.keys(sections).map((section) => <Nav.Link className='link' href={`#${section}`} key={section}>{section.charAt(0).toUpperCase() + section.slice(1)}</Nav.Link>)}
            {handleContactPage && <Nav.Link className='link' onClick={handleContactPage}> Contact </Nav.Link>}
          </Nav>
        </ReactNavbar.Collapse>
      </Container>
    </ReactNavbar>
  )
}

export default Navbar