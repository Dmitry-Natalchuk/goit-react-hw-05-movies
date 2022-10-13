import { SearchMovies } from "components/SearchMovies/SearchMovies";
import s from "./Movie.module.css"

const Movies = () => {
    return (
        <>
        <h2 className={s.title}>Search movies</h2>
        <SearchMovies />
        </>
    )
}
export default Movies