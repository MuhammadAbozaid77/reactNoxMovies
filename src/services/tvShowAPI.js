import { options } from "./movieDbConfig";

export async function getPopularTvShow(currentPage) {
  const url = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${currentPage}`;

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data?.results;
  } catch (error) {
    throw new Error("Can't Get Movies ", error);
  }
}

export async function getTvDetails(tvId) {
  const url = `https://api.themoviedb.org/3/tv/${tvId}?language=en-US`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Can't Get Movie Details ", error);
  }
}

export async function getTvSeasonDetails(seasonNumber, tvId) {
  const url = `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?language=en-US`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Can't Get Movie Details ", error);
  }
}
