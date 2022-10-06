import { Routes, Route } from "react-router-dom"
/* import { Home } from "pages/Home/Home"; */
import { SharedLayout } from "./SharedLayout/SharedLayout";

export const App = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element = {<SharedLayout />}/>
       {/*  <Route path="/movies" element = {<Movies />}/>
        <Route path="/movies/:movieId" element = {<MovieDetails />}>
           <Route path="/movies/:movieId/cast" element = {<Cast />}/>
           <Route path="/movies/:movieId/reviews" element = {<Reviews/>}/>
        </Route> 
        <Route path="*" element={<NotFound />} />  */}
      </Routes>
      
    </div>
  );
};
