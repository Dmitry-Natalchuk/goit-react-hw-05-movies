import { ReviewsList } from "components/ReviewsList/ReviewsList";
import { getMoviesReviews } from "services/movieAPI";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(()=> {
        getMoviesReviews(movieId).then(res => {
            setReviews(res.data.results)
        })
    },[movieId])
    
    return(
        <div>
            <ReviewsList reviews={reviews} />
        </div>
    )
}