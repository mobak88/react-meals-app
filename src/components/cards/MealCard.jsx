import { useContext } from "react";
import IsLoggedInContext from "../../contexts/isLoggedInContext";
import { Link } from "react-router-dom";
import styles from "./MealCard.module.css";

const MealCard = ({ mealId, mealName, mealImg }) => {
  const { isLoggedIn } = useContext(IsLoggedInContext);

  return (
    <Link className={styles["meal-button"]} to={`meal/${mealId}`}>
      <div className={styles["meal-container"]}>
        <img className={styles["meal-image"]} src={mealImg} alt={mealName} />
        <p className={styles["meal-name"]}>{mealName}</p>
        {isLoggedIn && <p>LIKE</p>}
      </div>
    </Link>
  );
};

export default MealCard;
