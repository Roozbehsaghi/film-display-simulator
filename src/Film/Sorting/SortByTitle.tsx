import { Movie } from "..";

type Props = {
  sort: Movie[];
  setSort: React.Dispatch<React.SetStateAction<Movie[]>>;
};

const SortByTitle = ({ sort, setSort }: Props) => {
  const sortTitleAtoZ = () => {
    const sorted = [...sort.sort((a, b) => (a.title > b.title ? 1 : -1))];
    setSort(sorted);
  };
  const sortTitleZtoA = () => {
    const sorted = [...sort.sort((a, b) => (b.title > a.title ? 1 : -1))];
    setSort(sorted);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h5 style={{ color: "darkgreen" }}>
        Sort by{" "}
        <button
          onClick={sortTitleAtoZ}
          style={{ backgroundColor: "goldenrod", width: "80px" }}
        >
          A to Z
        </button>{" "}
        or
        <button
          onClick={sortTitleZtoA}
          style={{
            backgroundColor: "goldenrod",
            marginLeft: "10px",
            width: "80px",
          }}
        >
          Z to A
        </button>{" "}
        Title
      </h5>
    </div>
  );
};

export default SortByTitle;
