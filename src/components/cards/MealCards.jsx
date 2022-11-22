import MealCard from "./MealCard";
import styles from "./MealCards.module.css";

const MealCards = ({ meals }) => {
  return (
    <div className={styles["meal-card-container"]}>
      {meals &&
        meals.map((meal) => {
          return (
            <MealCard
              key={meal.idMeal}
              mealId={meal.idMeal}
              mealName={meal.strMeal}
              mealImg={meal.strMealThumb}
            />
          );
        })}
    </div>
  );
};

export default MealCards;
