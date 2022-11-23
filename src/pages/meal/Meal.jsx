import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealTable from "../../table/MealTable";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS from "../../endpoints/endpoints";
import styles from "./Meal.module.css";

const Meal = () => {
  const [meal, setMeal] = useState({});
  const [ingredientsInfo, setIngredientsInfo] = useState([]);
  const { mealId } = useParams();

  const { loading, err, data } = useFetch(API_ENDPOINTS.fullMeal(mealId));

  useEffect(() => {
    if (data?.meals !== null && data?.meals !== undefined) {
      setMeal(data.meals[0]);
    }
  }, [data]);

  /* Had to create two functions because not all ingredients have measurements */
  const filterIngredients = (compareString) => {
    const newArray = Object.entries(meal).filter((el) => {
      if (el[0].includes(compareString) && el[1].trim().length > 0) {
        return true;
      }
    });
    return [...newArray];
  };

  const filterMeasurements = (compareString, compareArray) => {
    const newArray = Object.entries(meal)
      .filter((el) => {
        if (el[0].includes(compareString)) {
          return true;
        }
      })
      .slice(0, compareArray.length);
    return newArray;
  };

  useEffect(() => {
    if (Object.keys(meal).length > 0) {
      const ingredientString = "strIngredient";
      const measurementString = "strMeasure";

      const newIngredients = filterIngredients(ingredientString);
      const newMeasurements = filterMeasurements(
        measurementString,
        newIngredients
      );

      console.log(newMeasurements);
      console.log(newIngredients);

      const newIngredientsInfo = newIngredients.map((ingredient, i) => {
        return {
          ingredient: ingredient[1],
          measurement: newMeasurements[i][1],
        };
      });

      setIngredientsInfo([...newIngredientsInfo]);
    }
  }, [meal]);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return (
    <>
      {meal && (
        <div className={styles["meal-container"]}>
          <img
            className={styles["meal-image"]}
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <h1>{meal.strMeal}</h1>
          <p className={styles["meal-text"]}>
            Meal instructions: {meal.strInstructions}
          </p>
          <h3>Ingredients</h3>
          <MealTable ingredientsInfo={ingredientsInfo} />
        </div>
      )}
    </>
  );
};

export default Meal;
