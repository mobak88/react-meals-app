import { useState } from "react";
import IsLoggedInContext from "./contexts/isLoggedInContext";
import Header from "./components/header/Header";
import SiteRoutes from "./routes/SiteRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn")) || false
  );

  const [likedRecipes, setLikedRecipes] = useState([]);

  console.log(likedRecipes);

  return (
    <IsLoggedInContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, likedRecipes, setLikedRecipes }}
    >
      <Header />
      <main>
        <SiteRoutes />
      </main>
    </IsLoggedInContext.Provider>
  );
}

export default App;
