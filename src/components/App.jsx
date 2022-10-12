import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./Loader/Loader";
import { Home } from "pages/Home/Home"; 
import { Navbar } from "./Navbar/Navbar";
import { Movies } from "pages/Movies/Movies";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

/*  const HomePage = lazy(() => import("../pages/Home/Home"))  */



export const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback = {<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>


    </div>
   )
  };