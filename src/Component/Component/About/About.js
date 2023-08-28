import React, { useEffect } from 'react';
import  './About.css'
import bangladesh from'../../../assets/flag.jpg'
import Phone from'../../../assets/phone.jpg'
import Location from'../../../assets/location.png'
import Message from'../../../assets/message.jpg'
import image from '../../../assets/FB_IMG_1654190221544.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


    return (
        <div className='about' id='About' data-aos="fade-up"
        data-aos-duration="3000">
            <div className='about-heading'>
              <h1>About Myself</h1>
            </div>
           <div className='about-section'>
           <div className='about-left'>
             <h2>I am a MERN Stack Web Developer</h2>
             <p>I am Arif Hossain form Bangladesh. I am Learning Programming every single day.
                 I have some projects with MERN Stack.
                 I am a hard working person. I always learn new technologies everyday.</p>
                 <div className='communication'>
                    <div className='bio'>
                     <img src={bangladesh} alt=''></img>
                     <p>Bangladesh</p>
                    </div>
                    <div className='bio'>
                     <img src={Phone} alt=''></img>
                     <p>01922108258</p>
                    </div>
                    <div className='bio'>
                     <img src={Location} alt=''></img>
                     <p>Badda,Dhaka 1212.</p>
                    </div>
                    <div className='bio'>
                     <img src={Message} alt=''></img>
                     <p>arifhossain199257@gmail.com</p>
                    </div>

                 </div>
            </div>
            <div className='about-right'>
              <img src={image} alt=''></img>
            </div>
           </div>
        </div>
    );
};

export default About;