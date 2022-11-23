import { useState, useEffect } from "react";
import SearchForm from "../../components/forms/searchForm/SearchForm";
import MealCards from "../../components/cards/MealCards";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS from "../../endpoints/endpoints";
import styles from "./SearchRecipes.module.css";

const SearchRecipes = () => {
  const [searchVal, setSearchVal] = useState("");
  const [searched, setSearched] = useState(false);
  const [clickedSuggestion, setClickedSuggestion] = useState(false);
  const [searchedMeals, setSearchedMeals] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

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

  useEffect(() => {
    if (
      data?.meals !== null &&
      data?.meals !== undefined &&
      searchVal.length > 0 &&
      !clickedSuggestion
    ) {
      console.log();
      setSuggestions([...data.meals]);
    }
  }, [searchVal, data]);

  const onInputChange = (e) => {
    setSearchVal(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    setSearched((prev) => !prev);
  };

  const sugestionVal = (sugestedMeal, suggestionObj) => {
    setSearchVal(sugestedMeal);
    setSearchedMeals([{ ...suggestionObj }]);
    setClickedSuggestion((prev) => !prev);
    setSuggestions([]);
  };

  return (
    <div className={styles["search-container"]}>
      <h1>Search</h1>
      <SearchForm
        onChange={onInputChange}
        value={searchVal}
        onClick={onSearch}
      />
      {searchVal.length > 0 &&
        suggestions.map((suggestion) => {
          return (
            <p
              onClick={() => sugestionVal(suggestion.strMeal, suggestion)}
              key={suggestion.idMeal}
            >
              {suggestion.strMeal}
            </p>
          );
        })}
      <MealCards meals={searchedMeals} />
    </div>
  );
};

export default SearchRecipes;
