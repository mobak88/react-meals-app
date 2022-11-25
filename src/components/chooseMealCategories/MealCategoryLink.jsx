import { Link } from "react-router-dom";
import styles from "./MealCategoryLink.module.css";

const MealCategoryLink = ({ foodCategory }) => {
  return (
    <Link
      to={`category/${foodCategory.toLowerCase()}`}
      className={styles["meal-category-link"]}
    >
      {foodCategory}
    </Link>
  );
};

export default MealCategoryLink;
