import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS from "../../endpoints/endpoints";

const Meal = () => {
  let { mealId } = useParams();

  const { loading, err, data } = useFetch(API_ENDPOINTS.fullMeal(mealId));

  useEffect(() => {
    console.log(data);
    console.log(API_ENDPOINTS.fullMeal(mealId));
  }, [data]);

  console.log(mealId);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error...</p>;

  return <div>Meal id: {mealId}</div>;
};

export default Meal;
