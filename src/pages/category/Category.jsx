import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MealCard from "../../components/cards/MealCard";
import API_ENDPOINTS from "../../endpoints/endpoints";
import useFetch from "../../hooks/useFetch";

const Category = () => {
  const [meals, setmeals] = useState([]);
  const { foodCategory } = useParams();

  const { data } = useFetch(API_ENDPOINTS.filterCategory(foodCategory));

  useEffect(() => {
    if (data?.meals !== null && data?.meals !== undefined) {
      setmeals([...data.meals]);
    }
  }, [data]);

  return <div>Category: {foodCategory}</div>;
};

export default Category;
