import { useEffect,useState } from "react";
import { getMoviesDetails } from "services/movieAPI"
import { getPosterImg } from "services/defaultPoster";
import { Loader } from "components/Loader/Loader";
import PropTypes from 'prop-types'; 
import { Outlet } from "react-router-dom";

export const Details = ({id}) => {
    const [movies,setMovies] = useState({});
    const [loading,setLoading] = useState(false)

    useEffect(()=> {
        const fetchItems = async () => {
        const data = getMoviesDetails(id)
        setLoading(true)
        try{
            setMovies({...data})
            setLoading(false)
        }catch(error) {
            console.log(error.message);
            setLoading(false)
         }
        }
        fetchItems()
    },[id])

    const {poster_path,
        original_title,
        release_date,
        vote_average,
        overview,
        genres} = movies 

        const isMovie = Boolean(Object.values(movies).length);
    return (
        <div>
            {loading && <Loader />}
            {isMovie && ( 
                <div>
                    <div>
                        <img src={getPosterImg(poster_path)} alt={original_title}/>
                    </div>
                    <div>
                        <h2>
                            {original_title} ({release_date.slice(0, 4)})
                        </h2>
                        <p>User Score: {Math.round((vote_average / 10) * 100)}%</p>
                        <h3>Overview:</h3>
                        <p>{overview}</p>
                        <h3>Genres:</h3>
                        <p>{genres.map(genre => genre.name).join(', ')}</p>
                    </div>
                </div>
            )}
            <Outlet />
        </div>
    );

}
 Details.propTypes = {
    id:PropTypes.string.isRequired,
}; 