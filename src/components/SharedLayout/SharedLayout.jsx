import { Navbar } from "components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return(
        <div>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}