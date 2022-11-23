import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SearchRecipes from "../pages/searchRecipes/SearchRecipes";
import Meal from "../pages/meal/Meal";
import Category from "../pages/category/Category";

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchRecipes />} />
      <Route path="/category/:foodCategory" element={<Category />} />
      <Route path="/category/:foodCategory/meal/:mealId" element={<Meal />} />
      <Route path="/meal/:mealId" element={<Meal />} />
    </Routes>
  );
};

export default SiteRoutes;
