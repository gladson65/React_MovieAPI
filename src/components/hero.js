import React from 'react';

const Hero = function ({ text, search, backdrop, }) {
    return(
        <header className="bg-dark text-white p-5 hero-container">
            <h1 className="hero-text">{text} <span className='search'>{search}</span></h1>
            <div className="hero-backdrop" style={{ backgroundImage: `url(${backdrop})` }}></div>
           
        </header>
    )
}

export default Hero;