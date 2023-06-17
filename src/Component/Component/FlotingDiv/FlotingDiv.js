import React from 'react';
import './FlotingDiv.css'

const FlotingDiv = ({image,text1,text2,text3}) => {
    return (
        <div className='floatingdiv'>
            <img style={{width:150,height:150}} src={image} alt='' />
            <span>
            {text1} {text2}
            <br/>
            {text3}
            </span>
            
        </div>
    );
};

export default FlotingDiv;