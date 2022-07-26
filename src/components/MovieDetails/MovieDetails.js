import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from "react-router-dom";
// import { Link } from 'react-router-dom';
import { ApiDetails } from 'services/Api';
import s from './MovieDetails.module.css'
// import { Outlet }  from 'react-router-dom';

export default function MovieDetails() {
    const { movieId } = useParams();
    const [film, setFilm] = useState([]);

    useEffect(() => {
        ApiDetails(movieId).then(data => setFilm(data)) 
    }, [movieId])
    
  


    // const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //    Api().then(movies => setMovies(movies.results)) 
    // }, [])
    const poster = film?.poster_path && `https://image.tmdb.org/t/p/w500/${film?.poster_path}`;

    return (
        <>
        {film && (  
        <div>
            <div className={s.Location}>
                <img src={poster} alt="" width={300} />
                    <div>
                        <h2>{film.title}</h2>
                        <p>Overview {film.overview}</p>
                        <span>User Score: { Math.round(film.vote_average*10)} %</span>        
                        <ul> Genres {film?.genres?.map(({id, name}) => (
                            <li key={id}>{name}</li>
                            ))} 
                        </ul>
                    </div>     
            </div>
            
            <ul>Additional information
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>    
            </ul>
                 <Outlet />   
        </div>
    )}
            
    </>
    );

}

//   <div>
//             <img src={poster} alt="" width={100} />
                    
//             <h2>{film.title}</h2>
//             <p>Overview {film.overview}</p>
//             <span>User Score: { Math.round(film.vote_average*10)} %</span>        
//             <ul> Genres {film?.genres?.map(({id, name}) => (
//                     <li key={id}>{name}</li>
//                ))} 
//             </ul>
//             <ul>Additional information
//                     <li>
//                         <Link to="cast">Cast</Link>
//                     </li>
//                     <li>
//                         <Link to="reviews">Reviews</Link>
//                     </li>    
//             </ul>
//                  <Outlet />   
//         </div>