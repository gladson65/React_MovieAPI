import React from 'react';
import Hero from './hero.js';

const Home = function() {
    return(
        <>
            <Hero text="Welcome to MoviBrows"/>
           <div className="home bg-primary bg-opacity-10 m-5 p-2 rounded">
                <h2>This is Home page</h2>
           </div>
            
        </>
    )
}

export default Home;