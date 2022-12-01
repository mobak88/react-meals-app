import { Link } from "react-router-dom";
import styles from "./MealCategoryLink.module.css";

const MealCategoryLink = ({ categoryType, category }) => {
  return (
    <Link
      to={`${categoryType.trim().toLowerCase()}/${category
        .trim()
        .toLowerCase()}`}
      className={styles["meal-link"]}
    >
      {category}
    </Link>
  );
};

export default MealCategoryLink;
