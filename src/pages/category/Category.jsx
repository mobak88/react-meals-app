import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MealCards from "../../components/cards/MealCards";
import MealsWrapper from "../../components/ui/mealsWrapper/MealsWrapper";
import API_ENDPOINTS from "../../endpoints/endpoints";
import useFetch from "../../hooks/useFetch";
import styles from "./Category.module.css";

const Category = ({ filterType }) => {
  const [meals, setmeals] = useState([]);
  const { categoryType } = useParams();

  const { loading, err, data } = useFetch(
    API_ENDPOINTS[filterType](categoryType)
  );

  useEffect(() => {
    if (data?.meals !== null && data?.meals !== undefined) {
      setmeals([...data.meals]);
    }
  }, [data]);

  if (err) return `Error: ${err}`;

  if (loading) return `...Loading`;

  return (
    <MealsWrapper>
      <h1>All {categoryType.toLowerCase()} meals</h1>
      <div className={styles["meal-category-wrapper"]}>
        <MealCards meals={meals} />
      </div>
    </MealsWrapper>
  );
};

export default Category;
