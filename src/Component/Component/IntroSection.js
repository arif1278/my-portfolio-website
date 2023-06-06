import React from 'react';
import './ItroSection.css';
import Github from '../../assets/git hub image.png';
import linkedin from '../../assets/linkedin image.png';
import Instragram from '../../assets/instragram image.png';
import Arif2 from '../../assets/ARIF 2.jpg';
import { themeContext } from './Toggle/Context';
import { useContext } from 'react';



const IntroSection = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className='intro'>
            <div className='i-left'>
            <div className='i-name'>
                <span style={{color:darkMode? 'white':''}}>Hey! I'm</span>
                <span>Arif Hossain </span>
                <span>Mern Developer with 
                     high level of experience in<br></br>
                      React ,Web Design and Development</span>
            </div>
            <button className=' button i-button'>
            Hire me
            </button>
            <div className='i-icons'>
                <a href='https://github.com/arif1278'><img src={Github} alt="" /></a>
                <a href='https://www.linkedin.com/in/arif-hossain-10183426b/'><img src={linkedin} alt="" /></a>
                <a href='https://www.instagram.com/arifhossain5373/'><img src={Instragram} alt="" /></a>
        
            </div>
            </div>
            <div className='i-right'>
                <img src={Arif2} alt=''></img>
            </div>
        </div>
    );
};

export default IntroSection;