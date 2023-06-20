import React from 'react';
import './Services.css'
import Heart from '../../../assets/HeartEmoji.jpg';
import Humble from '../../../assets/humbleEmoji.jpg';
import Glasses from '../../../assets/glasses.png'
import Card from '../Card/Card';
import Resume from './resume.pdf'
import { themeContext } from '../Toggle/Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const transition={duration:1,type:'spring'}
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    return (
        <div className='services' id='Services'>
            {/*left side*/}
            <div className='awesome'>
            <span style={{color:darkMode? 'white':''}}>My Awesome</span>
            <span>services</span>
            <span>lorem ispum is simpley
                <br/>
                this is very pretty call her
            </span>
            <a href={Resume} download>
            <button className='button s-button'>
              Download resume
            </button>
            </a>
            
            <div className='blur s-blur' style={{background:'#ABF1FF94'}}></div>
            </div>
            {/*right side */}
            <div className='cards'>
             <motion.div
             whileInView={{left:'14rem'}}
             initial={{left:'25%'}}
             transition={transition}
             
             style={{left:'25rem'}}>
                <Card 
                emoji ={Heart}
                heading={'Design'}
                details={'Figma,Sketch,Photoshop,Adobe,Adobi xd'}
                />
             </motion.div>
             <motion.div
             whileInView={{left:'-5rem'}}
             initial={{left:'-15%'}}
             transition={transition}
             
             style={{ top:'16rem',left:' 5rem'}}>
                <Card 
                emoji ={Glasses}
                heading={'Developer'}
                details={'HTML5,CSS3,Javascript,React'}
                />
             </motion.div>
             <motion.div
             whileInView={{left:'33rem'}}
             initial={{left:'20rem'}}
             transition={transition}
             
             style={{ top:'16rem',left:' 35rem'}}>
                <Card 
                emoji ={Humble}
                heading={'Full stack developer'}
                details= {'node.js,express.js,firebase,Mongodb'}
                />
             </motion.div>
             
            </div>
            
        </div>
    );
};

export default Services;