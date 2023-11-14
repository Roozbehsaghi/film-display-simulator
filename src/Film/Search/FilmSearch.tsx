import { useState } from "react";
import { Movie } from "..";

type Props = {
  movie: Movie[];

  setSort: React.Dispatch<React.SetStateAction<Movie[]>>;
};

const FilmSearch = ({ setSort, movie }: Props) => {
  const [search, setSearch] = useState("");

  const filterMe = () => {
    const result = movie.filter((str) =>
      str.title.toLowerCase().includes(search.toLowerCase())
    );
    setSort(result);
  };

  return (
    <div>
      <form
        style={{
          width: "20rem",
          backgroundColor: "lightseagreen",
          color: "darkmagenta",
          marginTop: "40px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          filterMe();
        }}
      >
        <label htmlFor="search">Search</label>
        <div style={{ marginLeft: "2px" }}>
          <input
            id="search"
            type="text"
            role="searchbox"
            placeholder="Search Title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "darkseagreen", width: "100px" }}
        >
          Search Me
        </button>
      </form>
    </div>
  );
};

export default FilmSearch;
