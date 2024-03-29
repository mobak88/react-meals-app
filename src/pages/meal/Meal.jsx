import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import IsLoggedInContext from "../../contexts/isLoggedInContext";
import MealIngredientsTable from "../../components/ui/table/MealIngredientsTable";
import NavigateBtn from "../../components/ui/buttons/navigateButton/NavigateBtn";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS from "../../endpoints/endpoints";
import styles from "./Meal.module.css";
import LikeBtn from "../../components/ui/buttons/likeBtn/LikeBtn";
import findLikedRecipe from "../../utils/findLikedRecipe";
import MealInstructions from "../../components/mealInstructions/MealInstructions";

const Meal = () => {
  const [meal, setMeal] = useState(null);
  const [ingredientsInfo, setIngredientsInfo] = useState([]);
  const { mealId } = useParams();

  const { isLoggedIn, likedRecipes, setLikedRecipes } =
    useContext(IsLoggedInContext);

  const { loading, err, data } = useFetch(API_ENDPOINTS.fullMeal(mealId));

  useEffect(() => {
    if (data?.meals !== null && data?.meals !== undefined) {
      setMeal(data.meals[0]);
    }
  }, [data]);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("likedMeals", JSON.stringify(likedRecipes));
    }
  }, [likedRecipes]);

  useEffect(() => {
    if (meal) {
      const ingredientString = "strIngredient";
      const measurementString = "strMeasure";

      const newIngredients = filterIngredients(ingredientString);
      const newMeasurements = filterMeasurements(
        measurementString,
        newIngredients
      );

      const newIngredientsInfo = newIngredients.map((ingredient, i) => {
        return {
          ingredient: ingredient[1],
          measurement: newMeasurements[i][1],
        };
      });

      setIngredientsInfo([...newIngredientsInfo]);
    }
  }, [meal]);

  const handleLikedMeal = () => {
    const likedRecipe = findLikedRecipe(likedRecipes, mealId);

    if (likedRecipe) {
      setLikedRecipes((prev) =>
        prev.filter((recipe) => recipe.idMeal !== mealId)
      );
    } else {
      setLikedRecipes((prev) => [...prev, { ...meal }]);
    }
  };

  const filterIngredients = (compareString) => {
    const newArray = Object.entries(meal).filter((el) => {
      if (el[1] === null || el[1] === undefined) {
        return false;
      } else if (el[0].includes(compareString) && el[1].trim().length > 0) {
        return true;
      }
    });
    return newArray;
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
          <LikeBtn onLikeClick={handleLikedMeal} mealId={mealId} large={true} />
          <div className={styles["meal-info-container"]}>
            <h2>Meal instructions</h2>
            <MealInstructions mealInstrucions={meal.strInstructions} />
          </div>
          <div className={styles["meal-info-container"]}>
            <h3>Ingredients</h3>
            <MealIngredientsTable ingredientsInfo={ingredientsInfo} />
          </div>
          <NavigateBtn navigateSteps={-1}>Go back</NavigateBtn>
        </div>
      )}
      {!meal && (
        <div className={styles["meal-container"]}>
          <h1>Server problem</h1>
        </div>
      )}
    </>
  );
};

export default Meal;
