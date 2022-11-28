import { useContext } from "react";
import IsLoggedInContext from "../../../contexts/isLoggedInContext";
import HeartOutlined from "../../../assets/heart-outline.svg";
import HeartFilled from "../../../assets/heart-filled.svg";
import styles from "./LikeBtn.module.css";

const LikeBtn = ({ onClick, mealId }) => {
  const { isLoggedIn, likedRecipes } = useContext(IsLoggedInContext);

  const likedRecipe = likedRecipes.find((recipe) => {
    if (recipe.idMeal === mealId) {
      return true;
    }
  });

  return (
    <>
      {!likedRecipe && isLoggedIn && (
        <img
          onClick={onClick}
          className={styles["meal-img"]}
          src={HeartOutlined}
          alt="Add to liked recipes button"
        />
      )}
      {likedRecipe && isLoggedIn && (
        <img
          onClick={onClick}
          className={styles["meal-img"]}
          src={HeartFilled}
          alt="Remove from liked recipes button"
        />
      )}
    </>
  );
};

export default LikeBtn;
