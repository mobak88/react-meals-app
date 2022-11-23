import { useState, useEffect } from "react";
import MealCards from "../../components/cards/MealCards";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS from "../../endpoints/endpoints";
import styles from "./SearchRecipes.module.css";

const SearchRecipes = () => {
  const [searchVal, setSearchVal] = useState("");
  const [searched, setSearched] = useState(false);
  const [searchedMeals, setSearchedMeals] = useState([]);

  const { data } = useFetch(API_ENDPOINTS.search(searchVal));

  useEffect(() => {
    if (data?.meals !== null && data?.meals !== undefined && searched) {
      setSearchedMeals([...data.meals]);
      setSearchVal("");
    }
  }, [searched]);

  useEffect(() => {
    if (searched) {
      setSearched((prev) => !prev);
    }
  }, [searchedMeals]);

  const onInputChange = (e) => {
    setSearchVal(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    setSearched((prev) => !prev);
  };

  return (
    <div className={styles["search-container"]}>
      <h1>Search</h1>
      <form>
        <label htmlFor="search-food">Search</label>
        <input
          type="text"
          id="search-food"
          placeholder="Search for..."
          onChange={onInputChange}
          value={searchVal}
        />
        <button onClick={onSearch}>Search</button>
      </form>
      <MealCards meals={searchedMeals} />
    </div>
  );
};

export default SearchRecipes;
