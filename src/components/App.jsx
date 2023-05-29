import { lazy } from 'react';
import { Routes, Route } from "react-router-dom"; 
import { ToastContainer } from 'react-toastify';

import SharedLayout from "./SharedLayout";
const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
export const App = () => {

  return (
   <>
    <Routes>
      <Route path="/" element={<SharedLayout/>} >
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId/" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
        </Route>
        <Route path="*" element={<Home/>} />
    </Routes>
      <ToastContainer />
  </>
  );
};
