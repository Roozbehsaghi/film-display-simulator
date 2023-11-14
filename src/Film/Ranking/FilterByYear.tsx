import { useState } from "react";
import { Movie } from "..";

type Props = {
  movie: Movie[];
  setSort: React.Dispatch<React.SetStateAction<Movie[]>>;
};

const FilterByYear = ({ setSort, movie }: Props) => {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(0);

  const filterByRate = () => {
    const filter = movie.filter(
      (value) => value.year >= minNumber && value.year <= maxNumber
    );

    setSort(filter);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        filterByRate();
      }}
    >
      <input
        value={minNumber}
        onChange={(e) => setMinNumber(Number(e.target.value))}
      />
      <input
        value={maxNumber}
        onChange={(e) => setMaxNumber(Number(e.target.value))}
      />
      <button
        onClick={filterByRate}
        style={{
          backgroundColor: "lightsteelblue",
          width: "100px",
          marginLeft: "10px",
        }}
      >
        Filter By Year
      </button>
    </form>
  );
};

export default FilterByYear;
