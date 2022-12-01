import { useContext, useEffect } from "react";
import IsLoggedInContext from "../../contexts/isLoggedInContext";
import Button from "../../components/ui/buttons/button/Button";
import CenterContainer from "../../components/ui/centerContainer/CenterContainer";

const Logout = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(IsLoggedInContext);

  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.setItem("loggedIn", JSON.stringify(isLoggedIn));
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <CenterContainer>
      {isLoggedIn && <Button onButtonClick={handleLogout}>Logout</Button>}
      {!isLoggedIn && <h1>You are not logged in</h1>}
    </CenterContainer>
  );
};

export default Logout;
