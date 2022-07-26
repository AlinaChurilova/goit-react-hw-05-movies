import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { ApiCast } from 'services/Api';


const Cast = () => {
    
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        ApiCast(movieId).then(data => setCast(data.cast)) 
    }, [])

    //  const poster = cast?.profile_path && `https://image.tmdb.org/t/p/w500/${cast?.profile_path}`;
    return (
        <>
            { cast && (
            <div>
                    {/* <img src={poster} alt="" />   */}
                    {cast.map(({id, name, profile_path, character}) => (
                        <div key={id}>
                            <p>{name}</p>
                        <img src={profile_path && `https://image.tmdb.org/t/p/w500/${profile_path}`} alt="" width={150} /> 
                            <p>Charecter: {character}</p>
                        </div>
                        
                    ))}
            </div>  
         )}
        </>
        
    );
}

export default Cast;