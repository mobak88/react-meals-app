import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meal from "./pages/meal/Meal";
import Category from "./pages/category/Category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meal/:mealId" element={<Meal />} />
      <Route path="/category/:foodCategory" element={<Category />} />
    </Routes>
  );
}

export default App;
