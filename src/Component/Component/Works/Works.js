import React from 'react';
import './Works.css';
import Fiverr from '../../../assets/fiverr1.png';
import Upwork from '../../../assets/upwork.webp';
import Shopify from '../../../assets/Shopify1.png';
import Amazon from '../../../assets/amazon3.png';
import Facebook from '../../../assets/facebook.png';
import { themeContext } from '../Toggle/Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Works = () => {
    const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
    return (
        <div className='works'>
              <div className='awesome'>
            <span style={{color:darkMode? 'white':''}}>Works for all these</span>
            <span>Brands & Clients</span>
            <span>lorem ispum is simpley
                <br/>
                this is very pretty call her
                <br/>
                this is very softly who im find
                <br/>
                angkara is very bad for me
                <br/>
            </span>
            <button className='button s-button'>
              Hire me
            </button>
            
            <div className='blur s-blur' style={{background:'#ABF1FF94'}}></div>
            </div>
            <div className='w-right'>
             <motion.div
             initial={{rotate:45}}
             whileInView={{rotate:0}}
             viewport={{margin:'-40px'}}
             
            transition={{duration:'2',type:'spring'}}
             
             className='w-mainCircle'>
                <div className=' w-secCircle'>
                    <img src={Fiverr} alt='' />
                </div>
                <div className=' w-secCircle'>
                    <img src={Upwork} alt='' />
                </div>
                <div className=' w-secCircle'>
                    <img src={Amazon} alt='' />
                </div>
                <div className=' w-secCircle'>
                    <img src={Shopify} alt='' />
                </div>
                <div className='w-secCircle'>
                    <img src={Facebook} alt='' />
                </div>

             </motion.div>
             {/* background circle */}
             <div style={{color:darkMode? 'black':''}} className='w-backCircle blueCircle'></div>
             <div className='w-backCircle yellowCircle'></div>
            </div>
        </div>
    );
};

export default Works;