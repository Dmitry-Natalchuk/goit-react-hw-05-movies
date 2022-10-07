import { CastList } from "components/CastList/CastList";
import { useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { getMoviesCast } from "services/movieAPI";

export const Cast = () => {
    const [item,setItem] = useState([])
    const {movieId} = useParams()

    useEffect(()=> {
        getMoviesCast(movieId).then(res => {
            setItem(res.data.cast)
        })
    },[movieId])
    return (
        <>
        <CastList items={item}/>

        </>
    )
}