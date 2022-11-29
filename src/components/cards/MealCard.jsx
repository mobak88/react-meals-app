import { useContext, useEffect } from "react";
import IsLoggedInContext from "../../contexts/isLoggedInContext";
import { Link } from "react-router-dom";
import LikeBtn from "../ui/likeBtns/LikeBtn";
import findLikedRecipe from "../../utils/findLikedRecipe";
import styles from "./MealCard.module.css";

const MealCard = ({ mealId, mealName, mealImg, meals }) => {
  const { isLoggedIn, likedRecipes, setLikedRecipes } =
    useContext(IsLoggedInContext);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("likedMeals", JSON.stringify(likedRecipes));
    }
  }, [likedRecipes]);

  const handleLikedMeal = () => {
    const likedRecipe = findLikedRecipe(likedRecipes, mealId);

    if (likedRecipe) {
      setLikedRecipes((prev) =>
        prev.filter((recipe) => recipe.idMeal !== mealId)
      );
      /* setLikedRecipes((prev) => {
        const newRecipes = prev.filter((recipe) => {
          if (recipe.idMeal !== mealId) {
            return true;
          }
        });
        return newRecipes;
      }); */
    } else {
      const newMeal = meals.find((meal) => meal.idMeal === mealId);
      setLikedRecipes((prev) => [...prev, { ...newMeal }]);
    }
  };

  return (
    <div className={styles["meal-wrapper"]}>
      <Link className={styles["meal-button"]} to={`meal/${mealId}`}>
        <div className={styles["meal-container"]}>
          <img className={styles["meal-image"]} src={mealImg} alt={mealName} />
          <p className={styles["meal-name"]}>{mealName}</p>
        </div>
      </Link>
      {isLoggedIn && (
        <div className={styles["like-meal-wrapper"]}>
          <LikeBtn onClick={handleLikedMeal} mealId={mealId} />
        </div>
      )}
    </div>
  );
};

export default MealCard;
