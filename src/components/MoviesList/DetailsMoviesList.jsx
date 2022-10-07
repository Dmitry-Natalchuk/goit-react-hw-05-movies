import PropTypes from 'prop-types';
import { GenresMovie } from 'components/GenresMovie/GenresMovie';

const yearNumber = year => {
    const value = year.slice(0, 4);
    return value;
  };
  
  const ratingNumber = rating => {
    const value = rating * 10;
    return value.toFixed(1) + '%';
  };

export const DetailsMoviesList = ({movies}) => {
    const {release_date,vote_average,overview,poster_path,genres,title} = movies
    return (
        <div>
            <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt=""/>
            <div>
                <h2>{title}</h2>
                <span>({yearNumber(release_date)})</span>
                <p>Rating: <span>{ratingNumber(vote_average)}</span></p>
                <p>Overview: <span>{overview}</span></p>
            </div>
            <div>
                <h3>Genres:</h3>
                {<GenresMovie movies={genres} />}
            </div>
        </div>
    )
}
DetailsMoviesList.propTypes = {
    movies: PropTypes.object,
  };