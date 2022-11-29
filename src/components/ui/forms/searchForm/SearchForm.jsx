import Button from "../../buttons/button/Button";
import styles from "./SearchForm.module.css";

const SearchForm = ({ onInputChange, value, onButtonClick, searchErrMsg }) => {
  return (
    <form className={styles["search-form"]}>
      <div className={styles["form-elements-wrapper"]}>
        <label htmlFor="search-food">Search:</label>
        <input
          autoComplete="off"
          type="text"
          id="search-food"
          placeholder="Search for..."
          onChange={onInputChange}
          value={value}
        />
        <Button onButtonClick={onButtonClick}>Search</Button>
      </div>
      <div>{searchErrMsg && <p>{searchErrMsg}</p>}</div>
    </form>
  );
};

export default SearchForm;
