import { useLocation,Link } from "react-router-dom"
import PropTypes from 'prop-types';



export const MoviesList = ({movies}) => {
    const location = useLocation()
    return (
        <ul>
          {movies.map(movie => {
            const {id,poster_path} = movie
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    src={"https://image.tmdb.org/t/p/w300" + poster_path}
                    alt=""
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      );
    };
MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
  }; 