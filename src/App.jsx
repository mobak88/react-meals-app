import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meal from "./components/meal/Meal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meal/:mealId" element={<Meal />} />
    </Routes>
  );
}

export default App;
