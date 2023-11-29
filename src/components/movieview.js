import {React, useEffect} from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import Hero from './hero.js';
import BeatLoader from 'react-spinners/BeatLoader';

const MovieView = function() {

    const { id } = useParams() 

    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fbb9959b2a03262d7a211c51e5f2a8b7&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                setIsLoading(false)
            })
    }, [id])

    function renderMovieDetails() {
        if (isLoading) {
            return (
                <>
                    <Hero text={<BeatLoader color="#36d7b7" size="30px"/>} />
                     
                </>
               
            )       
        }
        if (movieDetails) {

            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl} />

                    <div className="container bg-primary bg-opacity-10 vh-full moviedetail">
                        <div className="row my-2 p-2">
                            <div className="col-lg-4 col-md-3 col-4">
                                <img src={posterPath} className="img-fluid shadow rounded" alt={movieDetails.original_title} onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                                }} />
                            </div>
                            <div className="col-lg-8 col-md-9 col-8 text-center">
                                <h2 className="text-warning">{movieDetails.original_title}</h2>
                                <p>{movieDetails.overview}</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
    console.log(movieDetails)
    return renderMovieDetails();
}

export default MovieView;