import { useParams, useNavigate, Link,Outlet,useLocation } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs"

import { Details } from "components/Details/Details";
import s from "./MovieDetails.module.css"

 const MovieDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || '/';

    const backPage = () => navigate(from);
    return (
        <div>
            <button 
            type="button" 
            className={s.btn} 
            onClick={backPage}> 
            <BsFillArrowLeftCircleFill />
            </button>
                <Details id={id}/>
            <div className={s.container}>
                <h2 className={s.title}>Additional information:</h2>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Link state={{from}} to={`/movies/${id}/cast`}>Cast</Link>
                    </li>
                    <li className={s.item}>
                        <Link state={{from}} to={`/movies/${id}/reviews`}>Reviews</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
}
export default MovieDetails