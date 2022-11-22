import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meal from "./pages/meal/Meal";
import Category from "./pages/category/Category";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:foodCategory" element={<Category />} />
        <Route path="/category/:foodCategory/meal/:mealId" element={<Meal />} />
        <Route path="/meal/:mealId" element={<Meal />} />
      </Routes>
    </main>
  );
}

export default App;
