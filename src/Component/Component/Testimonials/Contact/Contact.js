import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './Contact.css'
import { themeContext } from '../../Toggle/Context';
import { useContext } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    const form=useRef();

    const [done,setDone] =useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_k8njoeo', 'template_6nxwrfx', form.current, 'gudU4cLMGq7Ciy280')
          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
      };


    return (
        <div className='contact-form' id='Contact' data-aos="zoom-in-up"
        data-aos-duration='3000'>
            <div className='w-left'>
             <div className='awesome'>
             <span style={{color:darkMode?'white':''}}>Get in touch</span>
             <span>Contact me</span>
             <div className='blur s-blur1'
             style={{background:"#ABF1FF94"}}
             >
             </div>
             </div>
            </div>

            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Name'/>
                    <input type='email' name='user_email' className='user' placeholder='Email'/>
                    <textarea name='message' className='user' placeholder='Message'/>
                    <input type='submit' value='Send' className='button'/>
                    <span>{done && "Thanks for contacting me!"}</span>
                    <div className='blue c-blur1'
                    style={{background:"var(--purple)"}}
                    >

                    </div>
                </form>

            </div>
        
        </div>
    );
};

export default Contact;