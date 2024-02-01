import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';
//import { useStateContext } from '../context/ContextProvider';

const Footer = () => {

  return (
    <footer className='Footer'>
      <div className='FooterContent'>

        <div></div>
        <div className='FooterText'>X beogradska gimnazija</div>
        <div className='FooterText'>skolska 2023/24</div>
        <div></div>
   
      </div>
    </footer>
  );
};

export default Footer;
