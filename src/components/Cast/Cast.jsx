import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMoviesCast } from "services/movieAPI"
import { getPosterImg } from "services/defaultPoster"
import Loader from "components/Loader/Loader";
import s from "./Cast.module.css"
const Cast = () => {
    const [cast,setCast] = useState([])
    const [loading,setLoading] = useState(false)

    const { id } = useParams();
useEffect(() => {
    const fetchItems = async () => {
        setLoading(true)
    const {cast} = await getMoviesCast(id)
    try{
        setCast(cast)
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
        {Boolean(Object.values(cast).length) > 0 ? (
                <ul className={s.list}>
                    {cast.map(({ id, name, profile_path, character }) =>
                        <li key={id} className={s.item}>
                        <div>
                           <img src={getPosterImg(profile_path)} alt="" />
                       </div>
                       <div className={s.actor}>
                           <p className={s.name}>{name}</p>
                           <p className={s.character}>{character}</p>
                       </div>
                       </li>
                    )}
                </ul>
            ) : (
                <p className={s.alternative}>We don't have any cast for this movie</p>
        )}
    </>
     )

}
export default Cast