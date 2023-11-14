import { useState } from "react";
import { Movie } from "..";

type Props = {
  movie: Movie[];
  setSort: React.Dispatch<React.SetStateAction<Movie[]>>;
};

const FilterByRanking = ({ setSort, movie }: Props) => {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(0);

  const filterByRate = () => {
    const filter = movie.filter(
      (value) => value.rating >= minNumber && value.rating <= maxNumber
    );

    setSort(filter);
  };

  return (
    <form
      style={{ marginTop: "20px" }}
      onSubmit={(e) => {
        e.preventDefault();
        filterByRate();
      }}
    >
      <input
        autoFocus
        value={minNumber}
        onChange={(e) => {
          if (e.target.validity.valid) {
            setMinNumber(Number(e.target.value));
          }
        }}
      />

      <input
        value={maxNumber}
        onChange={(e) => {
          if (e.target.validity.valid) {
            setMaxNumber(Number(e.target.value));
          }
        }}
      />

      <button
        onClick={filterByRate}
        style={{
          marginLeft: "10px",
          backgroundColor: "goldenrod",
          width: "100px",
        }}
      >
        Filter By Rating
      </button>
    </form>
  );
};

export default FilterByRanking;
