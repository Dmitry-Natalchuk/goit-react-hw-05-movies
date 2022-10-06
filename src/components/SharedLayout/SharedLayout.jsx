import { Navbar } from "components/Navbar/Navbar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return(
        <>
            <Navbar/>
            <Suspense>
                <Outlet/>
            </Suspense>
            {/* <footer>Copyright 2022 &copy;</footer> */}
        
        </>
    )
}