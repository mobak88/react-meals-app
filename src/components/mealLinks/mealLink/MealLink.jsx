import { Link } from "react-router-dom";
import styles from "./MealLink.module.css";

const MealLink = ({ categoryType, category }) => {
  return (
    <Link
      to={`${categoryType}/${category.toLowerCase()}`}
      className={styles["meal-link"]}
    >
      {category}
    </Link>
  );
};

export default MealLink;
