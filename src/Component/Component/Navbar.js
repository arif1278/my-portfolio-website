import React, { useState } from 'react';
import './Navbar.css';
import Toggle from './Toggle/Toggle';
import { Link } from 'react-scroll';
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'

const Navbar = () => {

 const [Mobile,setMobile]=useState(true)

    return (
        <div className='n-wrapper'>
            <div className='n-left'>
             <div className='n-name'>Arif</div>
             <Toggle/>
            </div>
            <div className='n-right'>
                <div className=  {Mobile? "n-list" : 'n-list-mobile'}onClick={()=>setMobile(true)}>
                    <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Navbar' smooth={true}>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='About' smooth={true}>
                    <li>About</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                    <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true}>
                    <li>Testimonials</li>
                    </Link>
                    </ul>

                </div>
               <button className='button'>
                <Link spy={true} to='Contact' smooth={true}>Contact</Link>
                      
               </button>
               
            <button className='mobile-meno-icon' onClick={()=>setMobile(!Mobile)}>
                {Mobile? <ImCross/> : <FaBars/>}
            <FaBars/>
            </button>
            
            </div>
        </div>
    );
};

export default Navbar;