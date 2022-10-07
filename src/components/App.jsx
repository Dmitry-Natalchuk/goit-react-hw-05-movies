import { Suspense } from "react";
import { Routes, Route } from "react-router-dom"
import { Home } from "pages/Home/Home"; 
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Loader } from "./Loader/Loader";
import { Movies } from "pages/Movies/Movies";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Cast } from "pages/Cast/Cast";
import { Reviews } from "pages/Reviews/Reviews";

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element = {<SharedLayout />}>
              <Route index element= {<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
