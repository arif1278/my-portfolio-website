import React from 'react';
import './Footer.css'
import footer from '../../../../assets/footer img.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'

import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const Footer = () => {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className='footer' data-aos="fade-up"
        data-aos-duration="3000">
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