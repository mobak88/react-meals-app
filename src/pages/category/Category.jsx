import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MealCards from "../../components/cards/MealCards";
import API_ENDPOINTS from "../../endpoints/endpoints";
import useFetch from "../../hooks/useFetch";
import styles from "./Category.module.css";

const Category = () => {
  const [meals, setmeals] = useState([]);
  const { foodCategory } = useParams();

  const { loading, err, data } = useFetch(
    API_ENDPOINTS.filterCategory(foodCategory)
  );

  useEffect(() => {
    if (data?.meals !== null && data?.meals !== undefined) {
      setmeals([...data.meals]);
    }
  }, [data]);

  if (err) return `Error: ${err}`;

  if (loading) return `...Loading`;

  return (
    <div className={styles["category-wrapper"]}>
      <h1>All {foodCategory.toLowerCase()} meals</h1>
      <div className={styles["meal-category-wrapper"]}>
        <MealCards meals={meals} />
      </div>
    </div>
  );
};

export default Category;
