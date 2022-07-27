import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ApiSearch } from 'services/Api';
import { ImSearch } from 'react-icons/im'
import s from './Movies.module.css';


const Movies = () => {
    const [movie, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams('');
    const query = searchParams?.get("query") || '';
  
  useEffect(() => {
    if (query === '') {
        return
      }
        ApiSearch(query).then(data => setMovies(data.results)); 
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        if (query.trim() === '') {
            return;
        }
      ApiSearch(query).then(data => setMovies(data.results)); 
      const form = event.currentTarget;
      form.reset();
    } 
    
  const location = useLocation();

  return (
    <>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
       <input
            className={s.SearchFormInput}
            type="text"
            name="query"
            onChange={e => setSearchParams({ query: e.target.value })}
            placeholder="Search movies"
              />
            <button type="submit" className={s.SearchButton}>
            <span>
            <ImSearch style={{marginRight: 8}} />
            </span>
            </button>  
          </form>
          <ul>
            {movie.map(({ id, title }) => (
                <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>{ title}</Link>  
                 </li>
            ))}
        </ul>
    </>
  );
};

export default Movies;