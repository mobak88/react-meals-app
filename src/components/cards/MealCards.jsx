import MealCard from "./MealCard";
import MealCardContainer from "../ui/mealCardContainer/MealCardContainer";

const MealCards = ({ meals }) => {
  return (
    <MealCardContainer meals={meals}>
      {meals &&
        meals.map((meal) => {
          return (
            <MealCard
              key={meal.idMeal}
              mealId={meal.idMeal}
              mealName={meal.strMeal}
              mealImg={meal.strMealThumb}
              meals={meals}
            />
          );
        })}
    </MealCardContainer>
  );
};

export default MealCards;
