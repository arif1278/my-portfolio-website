import React from 'react';
import './ItroSection.css';
import Github from '../../assets/git hub image.png';
import linkedin from '../../assets/linkedin image.png';
import Instragram from '../../assets/instragram image.png';
import Arif2 from '../../assets/ARIF 2.jpg';
import crown from '../../assets/crawn image.jpg';
import thumb from '../../assets/thumb image.jpg';
import glasses from '../../assets/glasses.png'
import { themeContext } from './Toggle/Context';
import { useContext } from 'react';
import FlotingDiv from './FlotingDiv/FlotingDiv';
import {motion} from 'framer-motion'



const IntroSection = () => {
    const transition={duration:2,type:'spring'}
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
                <motion.img
                initial={{left:'-46%'}}
                whileInView={{left:'-22%'}}
                transition={transition}
                className='glasses' src={glasses} alt='' />

                <motion.div
                initial={{top:'-4%', left:'67%'}}
                whileInView={{left:'53%'}}
                transition={transition}
                
                style={{top:'-2%', left:'46%'}}>
                    <FlotingDiv image={crown} text1='Mern' text2='Stack' text3='Developer'/>
                </motion.div>
                <motion.div
                initial={{left:'9rem', bottom:'18rem'}}
                whileInView={{left:'2rem'}}
                transition={transition}
                
                style={{top:'18rem',left:'0rem'}}>
                    <FlotingDiv image={thumb} text1='Best Design' text2='Award'/>
                </motion.div>
                <div className='blur' style={{background:'rgb(238 210 255)'}}>

                </div>
                <div className='blur' style={{background:'#C1F5FF',
                top:'17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'
            
            }}>

                </div>
            </div>
        </div>
    );
};

export default IntroSection;