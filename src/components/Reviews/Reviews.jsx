import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMoviesReviews } from "services/movieAPI";
import Loader from "components/Loader/Loader";
import s from "./Reviews.module.css"

const Reviews = () => {
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
        <div className={s.container}>
            {Boolean(Object.values(reviews).length) > 0 ? (
                <ul className={s.list}>
                    {reviews.map(({id, author, content}) => 
                    <li key={id} className = {s.item}>
                        <h2 className={s.author}>{author}</h2>
                        <p className={s.text}>{content}</p>
                    </li> 
                )}
                </ul>
            ) : (
                <p className={s.alternative}>We don't have any reviews for this movie</p>
            )
            }
        </div>
        </>
    )
}
export default Reviews