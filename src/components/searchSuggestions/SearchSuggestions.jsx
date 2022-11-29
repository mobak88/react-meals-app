import styles from "./SearchSuggestions.module.css";

const SearchSuggestions = ({ suggestions, onSuggestionClick }) => {
  return (
    <ul className={styles["suggestions-list"]}>
      {suggestions.map((suggestion) => {
        return (
          <li
            className={styles["suggestions-list-item"]}
            onClick={() => onSuggestionClick(suggestion.strMeal, suggestion)}
            key={suggestion.idMeal}
          >
            {suggestion.strMeal}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchSuggestions;
