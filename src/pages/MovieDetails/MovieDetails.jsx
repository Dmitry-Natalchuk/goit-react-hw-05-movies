import { useParams, useNavigate, Link,Outlet,useLocation } from "react-router-dom";

import { Details } from "components/Details/Details";

export const MovieDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || '/';

    const backPage = () => navigate(from);
    return (
        <div>
            <button type="button" onClick={backPage}>Go Back</button>
                <Details id={id}/>
            <div>
                <h2>Additional information:</h2>
                <ul>
                    <li>
                        <Link state={{from}} to={`/movies/${id}/cast`}>Cast</Link>
                    </li>
                    <li>
                        <Link state={{from}} to={`/movies/${id}/reviews`}>Reviews</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
}