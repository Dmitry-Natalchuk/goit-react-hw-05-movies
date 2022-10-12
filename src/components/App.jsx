import { Suspense,lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Navbar = lazy(() => import("./Navbar/Navbar"))
const Home = lazy(() => import("../pages/Home/Home"))
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"))
const Movies = lazy(() => import("../pages/Movies/Movies"))
const Loader = lazy(() => import("./Loader/Loader"))
const Cast = lazy(() => import("./Cast/Cast"))
const Reviews = lazy(() => import("./Reviews/Reviews"))

export const App = () => {
  return (
    <>
      <Navbar />
       <Suspense fallback = {<Loader/>}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
       </Suspense> 
    </>
   )
  };