import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

const activeLink = ({isActive}) => {
    return isActive ? `${s.link} ${s.linkActive}` : `${s.link}`
}
 
const Navbar = () => {
    return (
        <ul className={s.list}>
            <li>
                <NavLink className={activeLink} to="/" end>Home</NavLink>
            </li>
            <li>
                <NavLink className={activeLink} to="/movies">Movies</NavLink>
            </li>
        </ul>
    )
}
export default Navbar