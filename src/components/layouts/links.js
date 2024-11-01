export const links = [
  {
    name: "navbar.home",
    path: "home",
  },
  {
    name: "navbar.departments",
    path: "departments",
  },
  {
    name: "navbar.movies",
    dropdown: [
      { name: "navbar.movies", path: "" },
      { name: "navbar.moviesSeries", path: "" },
    ],
  },
  {
    name: "navbar.series",
    dropdown: [
      { name:"navbar.tvLast", path: "" },
      { name:"navbar.tvLists", path: "" },
      { name: "navbar.tvshow", path: "" },
    ],
  },
  {
    name: "navbar.anime",
    dropdown: [
      { name: "navbar.animeMovies", path: "" },
      { name: "navbar.animeSeries", path: "" },
    ],
  },
  {
    name: "navbar.kids",
    dropdown: [
      { name: "navbar.kidsMovies", path: "" },
      { name: "navbar.kidsSeries", path: "" },
    ],
  },
];
