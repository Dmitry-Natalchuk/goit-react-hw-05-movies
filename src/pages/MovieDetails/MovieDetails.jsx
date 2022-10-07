import { useEffect } from "react"
import { useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { getMoviesDetails } from "services/movieAPI"
import { DetailsMoviesList } from "components/MoviesList/DetailsMoviesList"


export const MovieDetails = () => {
    const [movieInfo,setMovieInfo] = useState(null)
    const {movieId} = useParams()
    const location = useLocation().state?.from ?? '/';

    useEffect(()=> {
        getMoviesDetails(movieId).then(res => {
            setMovieInfo(res.data)
        })
    },[movieId])

    return(
        <div>
            <Link to={location}>Back</Link>
            {movieInfo && (
                <div>
                    <DetailsMoviesList movies={movieInfo} />
                    <h2>Information</h2>
                    <ul>
                        <li>
                            <Link to="cast" state={{ from: location }}>Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews" state={{ from: location }}>Reviews</Link>
                        </li>
                    </ul>
                    <Outlet/>
                </div>
            )}
        </div>
    )
}