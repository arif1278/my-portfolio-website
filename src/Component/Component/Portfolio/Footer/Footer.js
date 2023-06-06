import React from 'react';
import './Footer.css'
import footer from '../../../../assets/footer img.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={footer} alt='' style={{width:'100%'}}/>
            <div className='f-content'>
               <span style={{fontSize:'1rem', padding:'10px',}}>arifhossain199257@gmail.com</span>
               <div className='f-icons'>
                <Insta color='white' size='2rem'/>
                <Facebook color='white' size='2rem'/>
                <Github color='white' size='2rem'/>
                <Linkedin color='white' size='2rem'/>
                <Twitter color='white' size='2rem'/>
               </div>
            </div>
        </div>
    );
};

export default Footer;