import { useState, useEffect } from "react";
import MealCategorySection from "../../components/sections/mealCategorySection/MealCategorySection";
import MealCategoryLinks from "../../components/mealCategoryLinks/MealCategoryLinks";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS from "../../endpoints/endpoints";
import findFilterMethod from "../../utils/findFilterMethod";
import ShowMoreBtn from "../../components/ui/buttons/showMoreBtn/ShowMoreBtn";

const Home = () => {
  const [mealCategories, setMealCategories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  const { loading, err, data } = useFetch(API_ENDPOINTS.categories);

  useEffect(() => {
    if (data?.meals !== null && data?.meals !== undefined) {
      setMealCategories([...data.meals]);
    }
  }, [data]);

  const handleShowMoreItems = () => {
    setVisibleCount((prev) => prev + 5);
  };

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
          {mealCategories.slice(0, visibleCount).map((category) => {
            return (
              <MealCategorySection
                key={category.strCategory}
                mealCategory={category.strCategory}
                filterType={findFilterMethod("filtercategory")}
              />
            );
          })}
          {visibleCount < mealCategories.length && (
            <ShowMoreBtn
              onShowMoreClick={handleShowMoreItems}
              visibleCount={visibleCount}
            />
          )}
        </>
      )}
    </>
  );
};

export default Home;
