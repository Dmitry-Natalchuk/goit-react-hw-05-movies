import { useState,useEffect} from "react"
import { getTrendingMovies } from "services/movieAPI";
import { MoviesList } from "components/MoviesList/MoviesList";


export const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

 useEffect(() => {
  getTrendingMovies().then(result => {
       const { results } = result; 
    setTrendingMovies(results);
 });
}, []);
    return (
        <div>
            <h1>Trending movies</h1>
            <MoviesList movies={trendingMovies} />
            
        </div>
    )
}