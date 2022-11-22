import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS from "../../endpoints/endpoints";
import styles from "./Meal.module.css";

const Meal = () => {
  const [meal, setMeal] = useState({});
  let { mealId } = useParams();

  const { loading, err, data } = useFetch(API_ENDPOINTS.fullMeal(mealId));

  useEffect(() => {
    if (data?.meals !== null && data?.meals !== undefined) {
      setMeal(data.meals[0]);
      console.log(meal);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <>
      {meal && (
        <div className={styles["meal-container"]}>
          <h1>{meal.strMeal}</h1>
          <p>Meal instructions: {meal.strInstructions}</p>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
      )}
    </>
  );
};

export default Meal;
