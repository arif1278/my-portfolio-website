import React from 'react';
import './ItroSection.css';
import Particles from "react-particles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

import Github from '../../assets/git hub image.png';
import linkedin from '../../assets/linkedin image.png';
import Instragram from '../../assets/instragram image.png';
import Arif2 from '../../assets/FB_IMG_1654190213746.jpg';
import crown from '../../assets/crawn image.jpg';
import thumb from '../../assets/thumb image.jpg';
import glasses from '../../assets/glasses.png'
import { themeContext } from './Toggle/Context';
import { useContext } from 'react';
import FlotingDiv from './FlotingDiv/FlotingDiv';
import {motion} from 'framer-motion'
import {Typewriter} from 'react-simple-typewriter'
import { Link } from 'react-scroll';



const IntroSection = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const transition={duration:2,type:'spring'}
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
        
        <div className='intro'>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 800,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
            <div className='i-left'>
            <div className='i-name'>
                <span style={{color:darkMode? 'white':''}}>Hey! I'm </span>
                <span>Arif Hossain</span>

                <span style={{ color:darkMode? 'white':'', fontWeight: 'bold' }}> I'm a {' '}
          {/* Style will be inherited from the parent element */}
           <Typewriter
            words={['Mern Stack Developer', ' Web Designer', 'Photographer', 'Lazy!']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
            </div>
            <button className=' button i-button'>
                <Link spy={true} to='Contact' smooth={true}>
                Hire me
                </Link>
            
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
                initial={{left:'-49%'}}
                whileInView={{left:'-23%'}}
                transition={transition}
                className='glasses' src={glasses} alt='' />

                <motion.div
                initial={{top:'-4%', left:'67%'}}
                whileInView={{left:'53%'}}
                transition={transition}
                
                style={{top:'-2%', left:'55%'}}
                className='floating-div'
                >
                    <FlotingDiv className='crown' image={crown} text1='Mern' text2='Stack' text3='Developer'/>
                </motion.div>
                <motion.div
                initial={{left:'9rem', bottom:'18rem'}}
                whileInView={{left:'2rem'}}
                transition={transition}
                
                style={{top:'22.5rem',left:'0rem'}}
                className='floating-div'
                >
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