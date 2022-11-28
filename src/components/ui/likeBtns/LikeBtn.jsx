import { useContext } from "react";
import IsLoggedInContext from "../../../contexts/isLoggedInContext";
import HeartOutlined from "../../../assets/heart-outline.svg";
import HeartFilled from "../../../assets/heart-filled.svg";
import findLikedRecipe from "../../../utils/findLikedRecipe";
import styles from "./LikeBtn.module.css";

const LikeBtn = ({ onClick, mealId }) => {
  const { isLoggedIn, likedRecipes } = useContext(IsLoggedInContext);

  const likedRecipe = findLikedRecipe(likedRecipes, mealId);

  return (
    <button className={styles["like-btn"]}>
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
    </button>
  );
};

export default LikeBtn;
