import MealCategoryLink from "./mealCategoryLink/MealCategoryLink";
import styles from "./MealCategoryLinks.module.css";

const MealCategoryLinks = ({ mealArr, categoryType, mealObjKey }) => {
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
                    key={obj[mealObjKey] + i}
                    categoryType={categoryType}
                    category={obj[mealObjKey]}
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
