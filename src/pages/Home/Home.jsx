import { useState, useEffect } from "react";
import { MovieGallery } from "components/MoviesGallery/MoviesGallery";
import { getTrendingMovies } from "services/movieAPI";
import Loader from "components/Loader/Loader";
import s from "./Home.module.css"


const Home = () => {
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true)
        const {results} = await getTrendingMovies()
        try {
            setMovies(results)
            setLoading(false)
        }catch(error) {
            console.log(error.message);
            setLoading(false)
         }
        }
        fetchItems()
    },[])

    return (
        <>
         {Boolean(movies.length) && (
                <div>
                    <h2 className={s.title}>Today's Trending Movies</h2>
                    {loading && <Loader />}
                    <MovieGallery items={movies}/>
                </div>
            )}
        </>
    )
}
export default Home