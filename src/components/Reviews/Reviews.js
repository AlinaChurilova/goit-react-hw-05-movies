import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { ApiReviews } from 'services/Api';


const Reviews = () => {
    
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        ApiReviews(movieId).then(data => setReviews(data.results)) 
    }, [])

    //  const poster = cast?.profile_path && `https://image.tmdb.org/t/p/w500/${cast?.profile_path}`;
    return (
        <>
            
            <div>
             {reviews.map(({id, author, content}) => (
                <div key={id}>
                     <p>Author: {author}</p>
                     <p>{content}</p>
                </div>
                        
                    ))}
            </div>  
         
        </>
        
    );
}

export default Reviews;