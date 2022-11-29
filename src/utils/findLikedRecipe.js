const findLikedRecipe = (arr, mealId) => arr.find((recipe) => recipe.idMeal === mealId);

export default findLikedRecipe;