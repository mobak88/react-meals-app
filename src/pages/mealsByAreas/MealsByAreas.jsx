import { useState, useEffect } from "react";
import MealCategoryLinks from "../../components/mealCategoryLinks/MealCategoryLinks";
import MealCategorySection from "../../components/sections/mealCategorySection/MealCategorySection";
import API_ENDPOINTS from "../../endpoints/endpoints";
import findFilterMethod from "../../utils/findFilterMethod";
import useFetch from "../../hooks/useFetch";
import ShowMoreBtn from "../../components/ui/buttons/showMoreBtn/ShowMoreBtn";
import useShowMore from "../../hooks/useShowMore";

const MealsByAreas = () => {
  const [mealAreas, setMealAreas] = useState([]);

  const { loading, err, data } = useFetch(API_ENDPOINTS.areas);
  const [visibleCount, incrementVisibleCount] = useShowMore(5);

  useEffect(() => {
    if (data?.meals !== null && data?.meals !== undefined) {
      setMealAreas([...data.meals]);
    }
  }, [data]);

  if (err) return `Error: ${err}`;

  if (loading) return `...Loading`;

  return (
    <>
      {mealAreas.length > 0 && (
        <>
          <MealCategoryLinks
            mealArr={mealAreas}
            mealObjKey={Object.keys(mealAreas[0])[0]}
            categoryType="area"
          />
          {mealAreas.slice(0, visibleCount).map((area) => {
            return (
              <MealCategorySection
                key={area.strArea}
                mealCategory={area.strArea}
                filterType={findFilterMethod("filterarea")}
              />
            );
          })}
          {visibleCount < mealAreas.length && (
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

export default MealsByAreas;
