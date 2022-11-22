import { useState, useEffect } from "react";
import MealCategorySection from "../components/sections/MealCategorySection";
import MealCategories from "../components/mealCategoryLink/MealCategories";
import useFetch from "../hooks/useFetch";
import CategoryContext from "../contexts/categoryContext";
import API_ENDPOINTS from "../endpoints/endpoints";

const Home = () => {
  const [mealCategories, setMealCategories] = useState([]);

  const { loading, err, data } = useFetch(API_ENDPOINTS.categories);

  useEffect(() => {
    if (data?.meals !== null && data?.meals !== undefined) {
      setMealCategories([...data.meals]);
    }
  }, [data]);

  if (err) return `Error: ${err}`;

  if (loading) return `...Loading`;

  return (
    <CategoryContext.Provider value={{ mealCategories, setMealCategories }}>
      <MealCategories />
      {data?.meals &&
        mealCategories.map((category) => {
          return (
            <MealCategorySection
              key={category.strCategory}
              mealCategory={category.strCategory}
            />
          );
        })}
    </CategoryContext.Provider>
  );
};

export default Home;
