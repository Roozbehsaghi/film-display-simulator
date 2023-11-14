import { useState } from "react";
import Ranking from "./Ranking/index";
import FilmSearch from "./Search/FilmSearch";
import SortByRanking from "./Sorting/SortByRanking";
import SortByTitle from "./Sorting/SortByTitle";

export type Movie = {
  title: string;
  year: number;
  rating: number;
};

const movies: Movie[] = [
  {
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
  },
  {
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
  },
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "The Green Mile",
    year: 1999,
    rating: 8.6,
  },
  {
    title: "Gladiator",
    year: 2000,
    rating: 8.5,
  },
];

const FilmShow = () => {
  const [sort, setSort] = useState(movies);

  return (
    <div>
      <SortByTitle sort={sort} setSort={setSort} />
      <SortByRanking sort={sort} setSort={setSort} />
      <div style={{ marginTop: "20px" }}>
        {sort.map((movie) => (
          <div key={movie.title}>
            <h4 style={{ color: "darkmagenta" }}>{movie.title}</h4>
            <p>{movie.year}</p>
            <p>{movie.rating}</p>
          </div>
        ))}
      </div>
      <Ranking setSort={setSort} movies={movies} />
      <FilmSearch movie={movies} setSort={setSort} />
    </div>
  );
};

export default FilmShow;
