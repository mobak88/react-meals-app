import styles from "./SearchForm.module.css";

const SearchForm = ({ onChange, value, onClick, searchErrMsg }) => {
  return (
    <form className={styles["search-form"]}>
      <div className={styles["form-elements-wrapper"]}>
        <label htmlFor="search-food">Search:</label>
        <input
          type="text"
          id="search-food"
          placeholder="Search for..."
          onChange={onChange}
          value={value}
        />
        <button onClick={onClick}>Search</button>
      </div>
      <div>{searchErrMsg && <p>{searchErrMsg}</p>}</div>
    </form>
  );
};

export default SearchForm;
