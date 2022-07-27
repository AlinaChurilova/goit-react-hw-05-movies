import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { ApiReviews } from 'services/Api';
import s from './Reviews.module.css'


const Reviews = () => {
    
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        ApiReviews(movieId).then(data => setReviews(data.results)) 
    }, [movieId])
    return (
        <>
        <div>
            {reviews.length ? reviews.map(({id, author, content}) => (
            <div key={id}>
                    <p className={s.Title}>Author: {author}</p>
                    <p className={s.Content} >{content}</p>
            </div>)) : <p className={s.Title} >We don`t have any reviews for this movie</p>      
        }
        </div>  
        </>
    );
}

export default Reviews;