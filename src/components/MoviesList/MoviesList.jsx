import { useLocation,Link } from "react-router-dom"
import PropTypes from 'prop-types';



export const MoviesList = ({movies}) => {
    const location = useLocation
    return (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <img
                    src={
                      movie.poster_path
                        ? 'https://image.tmdb.org/t/p/w300' + movie.poster_path
                        : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                    }
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