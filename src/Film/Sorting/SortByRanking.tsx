import { Movie } from "..";

type Props = {
  sort: Movie[];
  setSort: React.Dispatch<React.SetStateAction<Movie[]>>;
};

const SortByRanking = ({ sort, setSort }: Props) => {
  const sortMeByRate = () => {
    const sorted = [...sort.sort((a, b) => a.rating - b.rating)];
    setSort(sorted);
  };

  const sortHighToLow = () => {
    const sorted = [...sort.sort((a, b) => b.rating - a.rating)];
    setSort(sorted);
  };

  return (
    <div>
      <h5 style={{ color: "darkgreen" }}>
        Sort by{" "}
        <button
          onClick={sortMeByRate}
          style={{ backgroundColor: "goldenrod", width: "80px" }}
        >
          Low to High
        </button>{" "}
        or
        <button
          onClick={sortHighToLow}
          style={{
            backgroundColor: "goldenrod",
            marginLeft: "10px",
            width: "80px",
          }}
        >
          High to Low
        </button>{" "}
        Ranking
      </h5>
    </div>
  );
};

export default SortByRanking;
