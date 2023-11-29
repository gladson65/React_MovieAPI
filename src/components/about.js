import React from 'react';
import Hero from './hero.js';

const AboutView = function() {
    return(
        <>
            <Hero text="About Section"/>
            <div className='about m-5 p-2'>
                <h1>This is AboutView</h1>
            </div>
            
        </>
    )
}

export default AboutView;