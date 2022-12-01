import { useState } from "react";
import IsLoggedInContext from "./contexts/isLoggedInContext";
import Header from "./components/header/Header";
import SiteRoutes from "./routes/SiteRoutes";
import Footer from "./components/footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn")) || false
  );

  const [likedRecipes, setLikedRecipes] = useState(
    JSON.parse(localStorage.getItem("likedMeals")) || []
  );

  return (
    <IsLoggedInContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, likedRecipes, setLikedRecipes }}
    >
      <Header />
      <main>
        <SiteRoutes />
      </main>
      <Footer />
    </IsLoggedInContext.Provider>
  );
}

export default App;
