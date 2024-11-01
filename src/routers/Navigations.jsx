import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import PageNotFound from "../components/ui/PageNotFound";
import Home from "../pages/home/Home";
// ------------------------------TV---------------------------
import Movies from "../pages/movies/Movies";
import MovieDetails from "../pages/movies/MovieDetails";
// ------------------------------TV---------------------------
import TvShow from "../pages/tvShow/TvShow";
import TvDetails from "../pages/tvShow/TvDetails";
import MovieVideos from "../pages/movies/MovieVideos";
import MovieDetailsLayout from "../pages/movies/MovieDetailsLayout";
import TVDetailsLayout from "../pages/tvShow/TVDetailsLayout";
import TvVideos from "../pages/tvShow/TvVideos";
import SeasonDetails from "../pages/tvShow/SeasonDetails";
import Anime from "../pages/anime/Anime";
import Departments from "../pages/departments/Departments";
// import TvDetails from "../pages/tvShow/TvDetails";

export default function Navigations() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        {/* ------------------- Movies -------------------------- */}
        <Route path="movies/:moviesTypeId" element={<Movies />} />
        <Route path="" element={<MovieDetailsLayout />}>
          <Route
            index
            element={<Navigate replace to="/movieDetails/:movieId" />}
          />
          <Route
            index
            path="movieDetails/:movieId"
            element={<MovieDetails />}
          />
          <Route path="movieVideos/:movieId" element={<MovieVideos />} />
        </Route>
        {/* ------------------- TV -------------------------- */}
        <Route path="tvShow" element={<TvShow />} />
        <Route path="" element={<TVDetailsLayout />}>
          <Route index element={<Navigate replace to="/tvDetails/:tvId" />} />
          <Route path="tvDetails/:tvId" element={<TvDetails />} />
          <Route path="tvVideos/:tvId" element={<TvVideos />} />
          <Route
            path="seasonDetails/:tvId/:seasonNumber"
            element={<SeasonDetails />}
          />
        </Route>
        {/* ------------------- anime -------------------------- */}
        <Route path="anime" element={<Anime />} />
      </Route>
      <Route />
    </Routes>
  );
}
