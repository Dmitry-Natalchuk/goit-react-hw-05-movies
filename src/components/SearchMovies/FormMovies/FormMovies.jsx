import { useState } from "react";
import PropTypes from 'prop-types';
import s from "./FormMovies.module.css"


export const FormMovies = ({ onSubmit }) => {
    const [query,setQuery] = useState("")

    const changInput = (event) => {
        setQuery(event.target.value)
    }

    return (
        <div className={s.container}>
            <form className={s.form} onSubmit={(event) => {
                event.preventDefault()
                onSubmit(query)
                setQuery("")
            }}>
                <input
                    className={s.input}
                    value={query}
                    name="query"
                    onChange={changInput}
                    type="text"
                    placeholder="Search movies"
                    required
                />
            </form>
        </div>
    )
};

FormMovies.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};