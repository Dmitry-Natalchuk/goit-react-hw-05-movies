import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMoviesReviews } from "services/movieAPI";
import { Loader } from "components/Loader/Loader";

export const Reviews = () => {
    const [reviews,setReviews] = useState([])
    const [loading,setLoading] = useState(false)

    const { id } = useParams();
    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true)
        const {results} = await getMoviesReviews(id)
        try{
            setReviews(results)
            setLoading(false)
        }catch(error) {
            console.log(error.message);
            setLoading(false)
         }
        }
        fetchItems()
    },[id])

    return (
        <>
        {loading && <Loader />}
            {Boolean(Object.values(reviews).length) > 0 ? (
                <ul>
                    {reviews.map(({id, author, content}) => 
                    <li key={id}>
                        <h2>{author}</h2>
                        <p>{content}</p>
                    </li> 
                )}
                </ul>
            ) : (
                <p>We don't have any reviews for this movie</p>
            )
            }
        </>
    )
}