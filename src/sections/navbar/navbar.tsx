import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Col, Navbar as ReactNavbar, Row, Stack } from 'react-bootstrap';
import './navbar.css';
import cakeLogo from '../../assets/images/confectionery.svg';
import Sheet, { SheetPosition } from '../../components/sheet/sheet';
import React from 'react'
import crossIcon from '../../assets/images/cross.svg';
import envelope from '../../assets/images/envelope.svg';

interface Props {
  applicationName: string;
  sections: any;
  handleContactPage():void;
}
const Navbar = ({ applicationName, sections, handleContactPage }: Props) => {

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleContact = () => {
    setOpenDrawer(false);
    handleContactPage();
  }

  return (
    <div className='navbar'>
      <Container>
        <ReactNavbar.Brand className='title' href="/"><img className='logo' src={cakeLogo} /> {applicationName}</ReactNavbar.Brand>
        <ReactNavbar.Toggle className='d-sm-block d-md-none' onClick={() => setOpenDrawer(true)} />

        <Stack direction='horizontal' className='d-none d-md-flex'>
          {sections && Object.keys(sections).map((section) => <Nav.Link className='link' href={`#${section}`} key={section}>{section.charAt(0).toUpperCase() + section.slice(1)}</Nav.Link>)}
          <Nav.Link className='link' onClick={handleContactPage}> Contact </Nav.Link>
        </Stack>
      </Container>

      <Sheet open={openDrawer} position={SheetPosition.right} handleClose={() => setOpenDrawer(false)} width='100%'>
        <div className='navbar-sheet-header'>
          <span className='navbar-sheet-close-icon' onClick={() => setOpenDrawer(false)}><img height={'20px'} width={'20px'} src={crossIcon} /></span>
        </div>
        <Container className='navbar-sheet-container'>
          {sections && Object.keys(sections).map((section) => <Nav.Link className='link drawer-link' href={`#${section}`} onClick={()=> setOpenDrawer(false)} key={section}>{section.charAt(0).toUpperCase() + section.slice(1)}</Nav.Link>)}
          <Nav.Link className='link drawer-link' onClick={handleContact}> Contact </Nav.Link>
        </Container>
      </Sheet>

      <span className='contact-btn' onClick={handleContactPage}><img className='envelope-img' height={'20px'} width={'20px'} src={envelope} /></span>

    </div>
  )
}

export default Navbar