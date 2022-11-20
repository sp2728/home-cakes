import React from 'react'
import Navbar from '../../sections/navbar/navbar'
import Data from '../../data.json';
import './home.css';
import { Components, sectionMap } from '../../constants';
import Footer from '../../sections/footer/footer';

const Home = () => {

  const sections  = Data.sections;

  const sectionsContent = Object.entries(sections).map(([key, value], i)=> React.createElement(sectionMap[value.type as keyof Components], {key:i, pageName:key, ...value}));

  return (
    <div id="home">
        <Navbar sections={Data.sections} applicationName={Data.header.applicationName}/>
        {sectionsContent}
        <Footer/>
    </div>
  )
}

export default Home