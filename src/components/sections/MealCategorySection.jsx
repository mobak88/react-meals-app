import { useState, useEffect } from "react";
import MealCards from "../cards/MealCards";
import styles from "./MealCategorySection.module.css";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS from "../../endpoints/endpoints";

const MealCategorySection = ({ mealCategory }) => {
  const [meals, setmeals] = useState([]);

  const { data } = useFetch(API_ENDPOINTS.filterCategory(mealCategory));

  useEffect(() => {
    if (data?.meals !== null && data?.meals !== undefined) {
      setmeals([...data.meals.slice(0, 5)]);
    }
  }, [data]);

  return (
    <div className={styles["meal-section-container"]}>
      <div className={styles["meal-category-wrapper"]}>
        <h2>{mealCategory}</h2>
        <p>Sample from {mealCategory.toLowerCase()} recipes</p>
        <MealCards meals={meals} />
      </div>
    </div>
  );
};

export default MealCategorySection;
