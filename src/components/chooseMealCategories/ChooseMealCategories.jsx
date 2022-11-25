import { useContext } from "react";
import MealCategoryLink from "./MealCategoryLink";
import CategoryContext from "../../contexts/categoryContext";
import styles from "./MealCategories.module.css";

const ChooseMealCategories = () => {
  const { mealCategories } = useContext(CategoryContext);

  return (
    <>
      {mealCategories.length > 0 && (
        <div className={styles["meal-categories-wrapper"]}>
          <h2>Choose category</h2>
          <div className={styles["meal-link-categories-wrapper"]}>
            <div className={styles["meal-link-categories-container"]}>
              {mealCategories.map((category) => {
                return (
                  <MealCategoryLink
                    key={category.strCategory}
                    foodCategory={category.strCategory}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChooseMealCategories;
