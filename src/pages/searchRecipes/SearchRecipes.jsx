import { useState, useEffect } from "react";
import SearchForm from "../../components/forms/searchForm/SearchForm";
import MealCards from "../../components/cards/MealCards";
import SearchSuggestions from "./searchSuggestions/SearchSuggestions";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS from "../../endpoints/endpoints";
import styles from "./SearchRecipes.module.css";

const SearchRecipes = () => {
  const [searchVal, setSearchVal] = useState("");
  const [searched, setSearched] = useState(false);
  const [clickedSuggestion, setClickedSuggestion] = useState(false);
  const [searchedMeals, setSearchedMeals] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchErrMsg, setSearchErrMsg] = useState(null);

  const { data } = useFetch(API_ENDPOINTS.search(searchVal));

  useEffect(() => {
    if (
      data?.meals !== null &&
      data?.meals !== undefined &&
      searched &&
      searchVal.length > 0
    ) {
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
    if (clickedSuggestion) {
      setClickedSuggestion((prev) => !prev);
      setSearchVal("");
    }
  }, [suggestions]);

  useEffect(() => {
    if (
      data?.meals !== null &&
      data?.meals !== undefined &&
      searchVal.length > 0 &&
      !clickedSuggestion
    ) {
      setSuggestions([...data.meals]);
    }
  }, [searchVal, data]);

  const onInputChange = (e) => {
    setSearchVal(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();

    if (searchVal.length < 1) {
      console.log(searchVal.length);
      setSearchErrMsg("Please type a search string");
      return;
    }

    if (data.meals.length < 1) {
      console.log(searchedMeals.length);
      setSearchErrMsg("Please try a different search string");
      return;
    }

    setSearched((prev) => !prev);
    setSearchErrMsg(null);
  };

  const onClickSuggestion = (sugestedMeal, suggestionObj) => {
    setSearchVal(sugestedMeal);
    setSearchedMeals([{ ...suggestionObj }]);
    setClickedSuggestion((prev) => !prev);
    setSuggestions([]);
    setSearchErrMsg(null);
  };

  return (
    <div className={styles["search-container"]}>
      <h1>Search</h1>
      <div className={styles["suggestions-container"]}>
        <SearchForm
          onChange={onInputChange}
          value={searchVal}
          onClick={onSearch}
          searchErrMsg={searchErrMsg}
        />
        {searchVal.length > 0 && (
          <SearchSuggestions
            suggestions={suggestions}
            onClick={onClickSuggestion}
          />
        )}
      </div>
      <MealCards meals={searchedMeals} />
    </div>
  );
};

export default SearchRecipes;
