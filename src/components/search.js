import React from 'react';
import Hero from './hero.js';
import {Link} from 'react-router-dom';
// import $ from 'jquery';
// import {useState} from 'react';
// import BeatLoader from 'react-spinners/BeatLoader';

const Moviecard = function({movie}) {

    if (movie) {
        const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        const detailUrl = `/movies/${movie.id}`
        
       
        return(
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 p-2 my-4">
                <div className="card shadow-lg cardshow ">
                    <img src={posterUrl} className="card-img-top" alt={movie.original_title} onError= {({currentTarget}) => {
                        currentTarget.onerror = null;
                        currentTarget.src ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                    }}/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.original_title}</h5>
                        <p className="card-text">g: {movie["genres"]}</p>
                        <Link to={detailUrl} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        )
    } 
    
    
    
}

const Error = function() {
    return (
        <div className="error">
            <h1 className="text-center">No Match Found!</h1>
        </div>
    )
}



const SearchView = function ({ Keyword, serachResult, }) {
    const title = `You are searching`
    const search = `${Keyword}`
    
    const resultHtml = serachResult.map((obj, i) => {
        
        return <Moviecard movie={obj} key={i} /> 
             
    })
    
    const R = () => {
        if (resultHtml.length === 0) {
            return <Error />
        }
    }
    
    // const Loader = ()=> {
    //     setTimeout(()=> {
    //         if (resultHtml) {
    //             setIsLoad(false)
    //         }
    //     },2000)
        
    //     if (isLoad) {
    //         return (
    //             <BeatLoader color="#36d7b7" size="30px" />
    //         )
    //     }   
    // }
    

    return (
        <>
            <Hero text={title} search={search}/>

            {resultHtml &&
                <div className="container container-fluid d-flex justify-content-around search">
                    <div className="row">
                       {resultHtml}
                    </div>
                </div>
            }
        
            {/* <Loader /> */}
            {/* if search text not matched */}
            <R />
        </>
    )
}

export default SearchView;