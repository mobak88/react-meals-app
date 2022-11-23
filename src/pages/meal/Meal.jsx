import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  const filterMealInfo = (argm) => {
    const newState = Object.entries(meal).filter((el) => {
      if (el[0].includes(argm) && el[1].trim().length > 0) {
        return true;
      }
    });
    return [...newState];
  };

  useEffect(() => {
    if (Object.keys(meal).length > 0) {
      const ingredientString = "strIngredient";
      const measurementString = "strMeasure";

      const newIngredients = filterMealInfo(ingredientString);
      const newMeasurements = filterMealInfo(measurementString);

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
          <table className={styles["meal-table"]}>
            <thead>
              <tr>
                <th className={styles["table-data"]}>Ingredient</th>
                <th className={styles["table-data"]}>Measurement</th>
              </tr>
            </thead>
            <tbody>
              {ingredientsInfo &&
                ingredientsInfo.map((ingredientInfo, i) => {
                  return (
                    <tr
                      className={styles["table-row"]}
                      key={ingredientInfo.ingredient + i}
                    >
                      <td className={styles["table-data"]}>
                        {ingredientInfo.ingredient}
                      </td>
                      <td className={styles["table-data"]}>
                        {ingredientInfo.measurement}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Meal;
