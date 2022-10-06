import { Suspense } from "react";
import { Routes, Route } from "react-router-dom"
import { Home } from "pages/Home/Home"; 
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Loader } from "./Loader/Loader";
import { Movies } from "pages/Movies/Movies";

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element = {<SharedLayout />}>
              <Route path="/home" element= {<Home />} />
              <Route path="movies" element={<Movies />} /> 
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
