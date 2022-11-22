import { useState, useEffect } from "react";
import MealCard from "../cards/MealCard";
import styles from "./MealCategorySection.module.css";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS from "../../endpoints/endpoints";

const MealCategorySection = ({ mealCategory }) => {
  const [meals, setmeals] = useState([]);

  const { data } = useFetch(API_ENDPOINTS.filterCategory(mealCategory));

  useEffect(() => {
    if (data?.meals !== null && data?.meals !== undefined) {
      setmeals([...data.meals]);
    }
  }, [data]);

  if (data?.meals)
    return (
      <div className={styles["meal-section-container"]}>
        <div className={styles["meal-category-wrapper"]}>
          <h2>{mealCategory}</h2>
          <div className={styles["meal-card-container"]}>
            {data?.meals &&
              meals.slice(0, 5).map((meal) => {
                return (
                  <MealCard
                    key={meal.idMeal}
                    mealId={meal.idMeal}
                    mealName={meal.strMeal}
                    mealImg={meal.strMealThumb}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
};

export default MealCategorySection;
