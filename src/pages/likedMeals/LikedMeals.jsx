import { useContext } from "react";
import IsLoggedInContext from "../../contexts/isLoggedInContext";
import MealsWrapper from "../../components/ui/mealsWrapper/MealsWrapper";
import CenterContainer from "../../components/ui/centerContainer/CenterContainer";
import MealCards from "../../components/cards/MealCards";

const LikedMeals = () => {
  const { isLoggedIn, likedRecipes } = useContext(IsLoggedInContext);
  return (
    <>
      {isLoggedIn && (
        <>
          {likedRecipes.length > 0 && (
            <MealsWrapper>
              <h1>Your liked meals</h1>
              <MealCards meals={likedRecipes} />
            </MealsWrapper>
          )}
          {likedRecipes.length < 1 && (
            <MealsWrapper>
              <h1>No liked meals</h1>
            </MealsWrapper>
          )}
        </>
      )}
      {!isLoggedIn && (
        <CenterContainer>
          <h1>You are not logged in</h1>
        </CenterContainer>
      )}
    </>
  );
};

export default LikedMeals;
