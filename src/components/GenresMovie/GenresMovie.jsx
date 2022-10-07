import PropTypes from 'prop-types';

export const GenresMovie = ({movies}) => {
    return (
        <ul>
            {movies.map(movie => {
                const {id,name} = movie
                return (
                <li key={id}>{name}</li> 
                )  
            })}
        </ul>
    )
}
GenresMovie.propTypes = {
    movies: PropTypes.array.isRequired,
  };