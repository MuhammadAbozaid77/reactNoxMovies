import { options } from "./movieDbConfig";

export async function getTVGenres() {
  const url = `https://api.themoviedb.org/3/genre/tv/list?language=en`;

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data?.genres;
  } catch (error) {
    throw new Error("Can't Get Geners Type ", error);
  }
}

export async function getMoviesGenres() {
  const url = `https://api.themoviedb.org/3/genre/movie/list?language=ar`;

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);

    return data?.genres;
  } catch (error) {
    throw new Error("Can't Get Geners Type ", error);
  }
}
