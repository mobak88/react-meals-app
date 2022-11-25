import { useState, useEffect } from "react";
import MealCategorySection from "../../components/sections/MealCategorySection";
import ChooseMealCategories from "../../components/chooseMealCategories/ChooseMealCategories";
import useFetch from "../../hooks/useFetch";
import CategoryContext from "../../contexts/categoryContext";
import API_ENDPOINTS from "../../endpoints/endpoints";
import styles from "./Home.module.css";

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
      <ChooseMealCategories />
      <div className={styles["category-section-wrapper"]}>
        {data?.meals &&
          mealCategories.map((category) => {
            return (
              <MealCategorySection
                key={category.strCategory}
                mealCategory={category.strCategory}
              />
            );
          })}
      </div>
    </CategoryContext.Provider>
  );
};

export default Home;
