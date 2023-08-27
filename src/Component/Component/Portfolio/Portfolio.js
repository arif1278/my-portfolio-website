import React from 'react';
import './Portfolio.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import Sports from '../../../assets/ARIF 2.jpg'
import Education from '../../../assets/ARIF 3.jpg'
import News from '../../../assets/FB_IMG_1654190241485.jpg'
import 'swiper/css'
import { themeContext } from '../Toggle/Context';
import { useContext } from 'react';

import 'swiper/swiper-bundle.css'

const Portfolio = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className='portfolio' id='Portfolio'>
            {/* heading */}
            <span style={{color:darkMode?'white':''}}>Recent Project</span>
            <span>Portfolio</span>

            {/* slider */}

           <Swiper 
           spaceBetween={30}
           slidesPerView={3}
           grabCursor={true}
           className='portfolio-slider'
           >
            <SwiperSlide>
                <img src={Sports} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Education} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={News} alt='' />
            </SwiperSlide>
            
            
           </Swiper>
            
        </div>
    );
};

export default Portfolio;