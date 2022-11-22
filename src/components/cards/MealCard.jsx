import { Link } from "react-router-dom";
import styles from "./MealCard.module.css";

const MealCard = ({ mealId, mealName, mealImg }) => {
  return (
    <Link className={styles["meal-button"]} to={`meal/${mealId}`}>
      <div className={styles["meal-container"]}>
        <p>{mealName}</p>
        <img className={styles["meal-image"]} src={mealImg} alt={mealName} />
      </div>
    </Link>
  );
};

export default MealCard;
