import MealLink from "./mealCategoryLink/MealCategoryLink";
import styles from "./MealCategoryLinks.module.css";

const MealLinks = ({ mealArr, categoryType, mealKey }) => {
  return (
    <>
      {mealArr.length > 0 && (
        <div className={styles["meal-links-wrapper"]}>
          <h2>Choose food {categoryType}</h2>
          <div className={styles["meal-link-wrapper"]}>
            <div className={styles["meal-link-container"]}>
              {mealArr.map((obj, i) => {
                return (
                  <MealLink
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

export default MealLinks;
