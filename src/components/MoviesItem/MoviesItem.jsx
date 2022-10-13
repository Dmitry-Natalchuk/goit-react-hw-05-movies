import { Link, useLocation } from "react-router-dom";
import s from "./MoviesItem.module.css"

import { getPosterImg } from "services/defaultPoster";

export const MoviesItem = ({id, original_title, poster_path, vote_average}) => {
    const location = useLocation();

    return (
        <div className={s.item}>
        <li>
        <Link state={{ from: location }} to={`/movies/${id}`}>
            <div className={s.container}>
                <img src={getPosterImg(poster_path)} alt={original_title} />
                <div className={s.infoMovie}>
                    <h2 className={s.title}>{original_title}</h2>
                    <p className={s.score}>{(vote_average).toFixed(1)}</p>
                </div>
            </div>
        
        </Link>
        </li>
        </div>
       )
}
