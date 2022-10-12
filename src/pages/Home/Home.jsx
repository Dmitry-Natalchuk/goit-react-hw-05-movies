import { useState, useEffect } from "react";
import { MovieGallery } from "components/MoviesGallery/MoviesGallery";
import { getTrendingMovies } from "services/movieAPI";
import { Loader } from "components/Loader/Loader";


export const Home = () => {
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
                    <h2>Today's Trending Movies</h2>
                    {loading && <Loader />}
                    <MovieGallery items={movies}/>
                </div>
            )}
        </>
    )
}