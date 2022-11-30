const BASE_URL = import.meta.env.VITE_BASE_URL;

const API_ENDPOINTS = {
    categories: `${BASE_URL}/list.php?c=list`,
    areas: `${BASE_URL}/list.php?a=list`,
    filterCategory: (category) => {
        return `${BASE_URL}/filter.php?c=${category}`;
    },
    filterArea: (area) => {
        return `${BASE_URL}/filter.php?a=${area}`;
    },
    fullMeal: (mealId) => {
        return `${BASE_URL}/lookup.php?i=${mealId}`;
    },
    search: (searchString) => {
        return `${BASE_URL}/search.php?s=${searchString}`;
    }
};

export default API_ENDPOINTS;