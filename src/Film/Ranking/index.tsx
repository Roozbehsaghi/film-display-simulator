import FilterByRanking from "./FilterByRanking";
import FilterByYear from "./FilterByYear";
import { Movie } from "..";

type Props = {
  movies: Movie[];
  setSort: React.Dispatch<React.SetStateAction<Movie[]>>;
};

const index = ({ setSort, movies }: Props) => {
  return (
    <div>
      <FilterByRanking movie={movies} setSort={setSort} />
      <FilterByYear movie={movies} setSort={setSort} />
    </div>
  );
};

export default index;
