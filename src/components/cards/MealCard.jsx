import { Link } from "react-router-dom";
import styles from "./MealCard.module.css";

const MealCard = ({ mealId, mealName, mealImg }) => {
  const getMealId = () => {
    console.log(mealId);
  };

  return (
    <div className={styles["meal-container"]}>
      <p>{mealName}</p>
      <img className={styles["meal-image"]} src={mealImg} alt={mealName} />
      <Link to={`meal/${mealId}`}>
        <button onClick={getMealId}>Read more</button>
      </Link>
    </div>
  );
};

export default MealCard;
