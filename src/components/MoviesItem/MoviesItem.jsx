import { Link, useLocation } from "react-router-dom";

import { getPosterImg } from "services/defaultPoster";

export const MoviesItem = ({id, original_title, poster_path, vote_average}) => {
    const location = useLocation();

    return (
        <li>
        <Link state={{ from: location }} to={`/movies/${id}`}>
            <div>
                <img src={getPosterImg(poster_path)} alt={original_title} width={250}/>
                <div>
                    <h2>{original_title}</h2>
                    <p>{vote_average}</p>
                </div>
            </div>
        </Link>
        </li>
       )
}
