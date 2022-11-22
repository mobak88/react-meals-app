import { useContext } from "react";
import CategoryContext from "../../contexts/categoryContext";
import styles from "./MealCategoryLink.module.css";

const MealCategoryLink = () => {
  const { mealCategories } = useContext(CategoryContext);

  return (
    <div className={styles["meal-categories-wrapper"]}>
      <div className={styles["meal-categories-container"]}>
        {mealCategories.map((category) => {
          return (
            <p
              className={styles["meal-category-link"]}
              key={category.strCategory}
            >
              {category.strCategory}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default MealCategoryLink;
