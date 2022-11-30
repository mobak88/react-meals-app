import MealCategoryLink from "./mealCategoryLink/MealCategoryLink";
import styles from "./MealCategoryLinks.module.css";

const MealCategoryLinks = ({ mealArr, categoryType, mealKey }) => {
  return (
    <>
      {mealArr.length > 0 && (
        <div className={styles["meal-links-wrapper"]}>
          <h2>Choose food {categoryType}</h2>
          <div className={styles["meal-link-wrapper"]}>
            <div className={styles["meal-link-container"]}>
              {mealArr.map((obj, i) => {
                return (
                  <MealCategoryLink
                    key={obj[mealKey] + i}
                    categoryType={categoryType}
                    category={obj[mealKey]}
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

export default MealCategoryLinks;
