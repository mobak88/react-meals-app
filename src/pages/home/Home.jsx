import { useState, useEffect } from "react";
import MealCategorySection from "../../components/sections/MealCategorySection";
import MealCategoryLinks from "../../components/mealCategoryLinks/MealCategoryLinks";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS from "../../endpoints/endpoints";
import findFilterMethod from "../../utils/findFilterMethod";
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
    <>
      {mealCategories.length > 0 && (
        <>
          <MealCategoryLinks
            mealArr={mealCategories}
            mealObjKey={Object.keys(mealCategories[0])[0]}
            categoryType="category"
          />
          <div className={styles["category-section-wrapper"]}>
            {mealCategories.map((category) => {
              return (
                <MealCategorySection
                  key={category.strCategory}
                  mealCategory={category.strCategory}
                  filterType={findFilterMethod("filtercategory")}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
