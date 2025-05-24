import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import useThrottle from "../hooks/useThrottle";

const Search = () => {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 300);
  const throttleSearch = useThrottle(search, 2000);

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1>Debounce and Throttle</h1>
      <label>
        Search
        <input type="text" name="" onChange={onInputChange} />
      </label>
      <div>
        <p>Normal Search: {search}</p>
        <p>Debounced Search: {debouncedSearch}</p>
        <p>Throttled Search: {throttleSearch}</p>
      </div>
    </div>
  );
};

export default Search;
