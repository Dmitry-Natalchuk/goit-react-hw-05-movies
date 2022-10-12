import { useState } from "react";
import PropTypes from 'prop-types';


export const FormMovies = ({ onSubmit }) => {
    const [query,setQuery] = useState("")

    const changInput = (event) => {
        setQuery(event.target.value)
    }

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
                onSubmit(query)
                setQuery("")
            }}>
                <input
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