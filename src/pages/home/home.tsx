import React from 'react'
import Navbar from '../../sections/navbar/navbar'
import Data from '../../data.json';
import './home.css';
import { Components, sectionMap } from '../../constants';
import Footer from '../../sections/footer/footer';
import facebookIcons from '../../assets/images/facebook.svg';
import instagramIcon from '../../assets/images/instagram.svg'
import Sheet from '../../components/sheet/sheet';

const Home = () => {

  const sections = Data.sections;

  const sectionsContent = Object.entries(sections).map(([key, value], i) => React.createElement(sectionMap[value.type as keyof Components], { key: i, pageName: key, ...value }));

  const [openContact, setOpenContact] = React.useState(false);

  const FloatButtons = () => (
    <div className='home-float-buttons'>
      <span className='float-span'><img className='float-icons' src={facebookIcons} /></span>
      <span className='float-span'><img className='float-icons' src={instagramIcon} /></span>
    </div>
  )

  return (
    <div className="home">
      <Navbar sections={Data.sections} applicationName={Data.header.applicationName} handleContactPage={() => setOpenContact(true)} />
      <FloatButtons />
      {sectionsContent}
      <Sheet open={openContact} position={'right'} handleClose={()=> setOpenContact(false)}/>
      <Footer />
      {/* <span className='contact-btn'><Button onClick={() => setOpenContact(true)}> <MarkChatUnread color='primary' /> </Button></span> */}
    </div>
  )
}

export default Home