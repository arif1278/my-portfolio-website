import React from 'react';
import './Navbar.css';
import Toggle from './Toggle/Toggle';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
             <div className='n-name'>Arif</div>
             <Toggle/>
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Navbar' smooth={true}>
                    <li>Home</li>
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
                      Contact
               </button>
            </div>
        </div>
    );
};

export default Navbar;