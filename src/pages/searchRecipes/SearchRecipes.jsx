import { useState, useEffect } from "react";
import SearchForm from "../../components/ui/forms/searchForm/SearchForm";
import MealCards from "../../components/cards/MealCards";
import SearchSuggestions from "../../components/searchSuggestions/SearchSuggestions";
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
  const [focus, setFocus] = useState(false);

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

  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchVal.length < 1) {
      setSearchErrMsg("Please type a search string");
      return;
    }

    if (data.meals.length < 1) {
      setSearchErrMsg("Please try a different search string");
      return;
    }

    setSearched((prev) => !prev);
    setSearchErrMsg(null);
  };

  const handleClickSuggestion = (sugestedMeal, suggestionObj) => {
    setSearchVal(sugestedMeal);
    setSearchedMeals([{ ...suggestionObj }]);
    setClickedSuggestion((prev) => !prev);
    setSuggestions([]);
    setSearchErrMsg(null);
  };

  return (
    <div className={styles["search-container"]}>
      <h1>Search</h1>
      <p>Search for reicpes, it will suggest results from available recipes</p>
      <div
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        className={styles["suggestions-container"]}
      >
        <SearchForm
          onInputChange={handleInputChange}
          value={searchVal}
          onButtonClick={handleSearch}
          searchErrMsg={searchErrMsg}
        />
        {searchVal.length > 0 && focus && (
          <SearchSuggestions
            suggestions={suggestions}
            onSuggestionClick={handleClickSuggestion}
          />
        )}
      </div>
      <MealCards meals={searchedMeals} />
    </div>
  );
};

export default SearchRecipes;
