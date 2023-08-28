import React from 'react';
import './Experience.css'
import { themeContext } from '../Toggle/Context';
import { useContext } from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
    return (
        <div className='experience' id='Experience' data-aos="zoom-in-up"
        data-aos-duration="3000">
          <div className='achievement'>
            <div className='circle' style={{color:darkMode? 'black':''}}>2+</div>
            <span>years</span>
            <span>Experience</span>
            
            </div>  
          <div className='achievement'>
            <div className='circle' style={{color:darkMode? 'black':''}}>20+</div>
            <span>completed</span>
            <span>Projects</span>
            
            </div>  
          <div className='achievement'>
            <div className='circle' style={{color:darkMode? 'black':''}}>5+</div>
            <span>Companies</span>
            <span>work</span>
            
            </div>  
        </div>
    );
};

export default Experience;