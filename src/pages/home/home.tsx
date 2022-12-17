import React from 'react'
import Navbar from '../../sections/navbar/navbar'
import Data from '../../data.json';
import './home.css';
import { Components, sectionMap } from '../../constants';
import Footer from '../../sections/footer/footer';
import facebookIcons from '../../assets/images/facebook.svg';
import instagramIcon from '../../assets/images/instagram.svg'
import { SheetPosition } from '../../components/sheet/sheet';
import Stack from 'react-bootstrap/Stack';
import Contact from '../../sections/contact/contact';


const Home = () => {

  const sections = Data.sections;

  const sectionsContent = Object.entries(sections).map(([key, value], i) => React.createElement(sectionMap[value.type as keyof Components], { key: i, pageName: key, ...value }));

  const [openContact, setOpenContact] = React.useState(false);

  const [isMobile, setIsMobile] = React.useState(false);

  //choose the screen size 
  const handleResize = () => {
      if (window.innerWidth < 720) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
  }

  React.useEffect(() => {
    handleResize();
  }, [])


  const FloatButtons = () => (
    <Stack direction="vertical" className='home-float-buttons'>
      <span className='float-span'><img className='float-icons' src={facebookIcons} /></span>
      <span className='float-span'><img className='float-icons' src={instagramIcon} /></span>
    </Stack>
  )

  return (
    <div className="home">
      <Navbar sections={Data.sections} applicationName={Data.header.applicationName} handleContactPage={() => setOpenContact(true)} />
      <FloatButtons />
      {sectionsContent}
      <Contact position={isMobile? SheetPosition.bottom : SheetPosition.right} open={openContact} handleClose={() => setOpenContact(false)} />
      <Footer />
    </div>
  )
}

export default Home