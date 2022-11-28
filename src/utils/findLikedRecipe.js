const findLikedRecipe = (arr, mealId) => {
    return arr.find((recipe) => {
        if (recipe.idMeal === mealId) {
            return true;
        }
    });
};

export default findLikedRecipe;