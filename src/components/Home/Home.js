import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Api } from 'services/Api';

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        Api().then(movies => setMovies(movies.results))
    }, [])
    

    return (
        <ul>
            {movies?.map(({ id, title }) => (
                <li key={id}>
                    <Link to={`/movies/${id}`}>{ title}</Link>  
                 </li>
            ))}
        </ul>
    )
}