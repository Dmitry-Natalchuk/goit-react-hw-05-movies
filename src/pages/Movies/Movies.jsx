import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "services/movieAPI";
import { MoviesList } from "components/MoviesList/MoviesList";
import { MoviesForm } from "components/MoviesForm/MoviesForm";


export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchState,setSearchState] = useState([])

    useEffect(()=> {
        const name = searchParams.get("name") ?? "";
        if(!name) {
          return
        }getSearchMovies({
            query : name
        }).then(res => {
            setSearchState(res.data.results)
        })
    },[searchParams])

    const submitForm = value => {
        if (value.query.trim() === '') {
          return;
        }
          const nextParams = value.query !== '' ? { name: value.query } : {};
          setSearchParams(nextParams);
      };



    return (
        <div>
            <MoviesForm onSubmit={submitForm} value={searchParams.get("name")} />
            <MoviesList movies={searchState} />
        </div>
    )
}