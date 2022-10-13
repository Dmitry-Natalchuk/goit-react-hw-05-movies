import { useEffect,useState } from "react";
import { getMoviesDetails } from "services/movieAPI"
import { getPosterImg } from "services/defaultPoster";
import  Loader from "components/Loader/Loader";
import PropTypes from 'prop-types'; 
import s from "./Details.module.css"

export const Details = ({id}) => {
    const [movie, setMovie] = useState({
        content: {},
        loading: false
    });
    
    useEffect(() => {
        const fetchMovie = async () => {
            const data = await getMoviesDetails(id);
            setMovie(prevState => ({ 
                ...prevState,
                 loading: true }));
            try {
                setMovie(prevState => ({ 
                    ...prevState, 
                    content: { ...data},
                     loading: false }));;
            } catch (error) {
                setMovie(prevState => ({ 
                    ...prevState, 
                    loading: true}));
            }
        }
        fetchMovie();
    }, [id]);

    const { content, loading } = movie;
    const isMovie = Boolean(Object.values(content).length);

    const {poster_path,
        original_title,
        release_date,
        vote_average,
        overview,
        genres} = content

    return (
        <>
            {loading && <Loader />}
            {isMovie && ( 
                <div className={s.container}>
                    <div className={s.poster}>
                        <img src={getPosterImg(poster_path)} alt={original_title} />
                    </div>
                    <div className={s.desc}>
                        <h2>
                            {original_title} ({release_date.slice(0, 4)})
                        </h2>
                        <p className={s.text}>User Score: {Math.round((vote_average / 10) * 100)}%</p>
                        <h3 className={s.title}>Overview:</h3>
                        <p>{overview}</p>
                        <h3 className={s.title}>Genres:</h3>
                        <p>{genres.map(genre => genre.name).join(', ')}</p>
                    </div>
                </div>
            )}
        </>
    );

}
 Details.propTypes = {
    id:PropTypes.string.isRequired,
}; 