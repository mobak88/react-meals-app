import { useState, useEffect } from "react";
import MealCategorySection from "../../components/sections/mealCategorySection/MealCategorySection";
import MealCategoryLinks from "../../components/mealCategoryLinks/MealCategoryLinks";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS from "../../endpoints/endpoints";
import findFilterMethod from "../../utils/findFilterMethod";
import ShowMoreBtn from "../../components/ui/buttons/showMoreBtn/ShowMoreBtn";
import useShowMore from "../../hooks/useShowMore";

const Home = () => {
  const [mealCategories, setMealCategories] = useState([]);

  const { loading, err, data } = useFetch(API_ENDPOINTS.categories);

  const [visibleCount, incrementVisibleCount] = useShowMore(5);

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
              onShowMoreClick={incrementVisibleCount}
              visibleCount={visibleCount}
            />
          )}
        </>
      )}
    </>
  );
};

export default Home;
