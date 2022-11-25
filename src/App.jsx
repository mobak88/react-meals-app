import { useState } from "react";
import IsLoggedInContext from "./contexts/isLoggedInContext";
import Header from "./components/header/Header";
import SiteRoutes from "./routes/SiteRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn")) || false
  );

  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Header />
      <main>
        <SiteRoutes />
      </main>
    </IsLoggedInContext.Provider>
  );
}

export default App;
