import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { FormMovies } from "./FormMovies/FormMovies";
import { getSearchMovies } from "services/movieAPI";
import { MovieGallery } from "components/MoviesGallery/MoviesGallery";
import { Loader } from "components/Loader/Loader";


export const SearchMovies = () => {
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true)
        try {
            const result = await getSearchMovies(query)
            setMovies(result)
            setLoading(false)
        }catch(error) {
            console.log(error.message);
            setLoading(false)
         }
        }
        if(query) {
            fetchItems()
         }

    },[query])

    const submitForm = (query) => setSearchParams({query});

    
    return (
        <>
            <FormMovies onSubmit={submitForm} />
            {loading && <Loader />}
            {Boolean(movies.length) &&
                <MovieGallery items={movies} />
            }
        </>
    )

}