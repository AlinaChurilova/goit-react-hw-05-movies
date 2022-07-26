// import PropTypes from 'prop-types';
// const BASE_URL= 'https://api.themoviedb.org/3/trending/movie/day';
const KEY = '42bcf6d6624bc25b6cac8209269cf32f';

export function Api() {
  const BASE_URL= 'https://api.themoviedb.org/3/trending/movie/day'; 
  return fetch(`${BASE_URL}?api_key=${KEY}`)
    .then(response => response.json());
}

export function ApiDetails(movieID) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${KEY}&language=en-US`)
    .then(response => response.json());
}


export function ApiCast(movieID) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${KEY}&language=en-US`)
    .then(response => response.json());
}

export function ApiReviews(movieID) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${KEY}&language=en-US&page=1`)
    .then(response => response.json());
}

//   Api.propTypes = {
//     searchQuery: PropTypes.string.isRequired,    
//     currentPage: PropTypes.number.isRequired,    
//   };

// export default Api;