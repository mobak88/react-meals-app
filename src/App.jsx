import { useState } from "react";
import Header from "./components/header/Header";
import SiteRoutes from "./routes/SiteRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Header />
      <main>
        <SiteRoutes />
      </main>
    </>
  );
}

export default App;
