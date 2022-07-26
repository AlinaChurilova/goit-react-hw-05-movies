// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Api } from 'services/Api';
// import { Outlet }  from 'react-router-dom';

export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
       Api().then(movies => setMovies(movies.results)) 
    }, [])
    

    return (
        <ul>
            {movies.map(({ id, title }) => (
                <li key={id}>
                    <Link to={`/movies/${id}`}>{ title}</Link>  
                 </li>
            ))}
        </ul>
    )

}


// class Home extends Component {

//     state = {
//         movies: []
//     };

//     componentDidMount (){
//         fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=42bcf6d6624bc25b6cac8209269cf32f`)
//            .then(response => response.json()).then(data => data.results.map(item => console.log(item.title)));
//         // this.setState({ movies: item });
        
        
//     }

//     render() {
//         return (
//            <h1>Homepage</h1>
//         )
//     }
// }



// export default Home;

// const Home = () => {
//     return(
//         <h1>Homepage</h1>
      
//     );
// }

// export default Home;