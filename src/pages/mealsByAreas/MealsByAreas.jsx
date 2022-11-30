import { useState, useEffect } from "react";
import MealLinks from "../../components/mealLinks/MealLinks";
import MealCategorySection from "../../components/sections/MealCategorySection";
import API_ENDPOINTS from "../../endpoints/endpoints";
import useFetch from "../../hooks/useFetch";

const MealsByAreas = () => {
  const [mealAreas, setMealAreas] = useState([]);

  const { loading, err, data } = useFetch(API_ENDPOINTS.areas);

  useEffect(() => {
    if (data?.meals !== null && data?.meals !== undefined) {
      setMealAreas([...data.meals]);
    }
  }, [data]);

  if (err) return `Error: ${err}`;

  if (loading) return `...Loading`;

  return (
    <>
      <MealLinks
        mealArr={mealAreas}
        mealKey={"strArea"}
        categoryType={"area"}
      />
      {mealAreas &&
        mealAreas.map((area) => {
          return (
            <MealCategorySection
              key={area.strArea}
              mealCategory={area.strArea}
              filterType="filterArea"
            />
          );
        })}
    </>
  );
};

export default MealsByAreas;
