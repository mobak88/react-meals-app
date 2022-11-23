import styles from "./SearchForm.module.css";

const SearchForm = ({ onChange, value, onClick }) => {
  return (
    <form className={styles["search-form"]}>
      <label htmlFor="search-food">Search:</label>
      <input
        type="text"
        id="search-food"
        placeholder="Search for..."
        onChange={onChange}
        value={value}
      />
      <button onClick={onClick}>Search</button>
    </form>
  );
};

export default SearchForm;
