import { useContext } from "react";
import IsLoggedInContext from "../../contexts/isLoggedInContext";
import MealCard from "../../components/cards/MealCard";
import MealCardContainer from "../../components/ui/mealCardContainer/MealCardContainer";
import MealsWrapper from "../../components/ui/mealsWrapper/MealsWrapper";

const LikedMeals = () => {
  const { isLoggedIn, likedRecipes } = useContext(IsLoggedInContext);
  return (
    <MealsWrapper>
      <h1>Your liked meals</h1>
      <MealCardContainer meals={likedRecipes}>
        {likedRecipes.length > 0 &&
          likedRecipes.map((recipe) => {
            return (
              <MealCard
                key={recipe.idMeal}
                mealId={recipe.idMeal}
                mealName={recipe.strMeal}
                mealImg={recipe.strMealThumb}
                meals={likedRecipes}
              />
            );
          })}
      </MealCardContainer>
    </MealsWrapper>
  );
};

export default LikedMeals;
