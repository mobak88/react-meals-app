import { useContext, useEffect } from "react";
import IsLoggedInContext from "../../contexts/isLoggedInContext";
import Button from "../../components/ui/buttons/button/Button";
import CenterContainer from "../../components/ui/centerContainer/CenterContainer";

const Logout = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(IsLoggedInContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.setItem("loggedIn", JSON.stringify(isLoggedIn));
    }
  }, [isLoggedIn]);

  return (
    <CenterContainer>
      {isLoggedIn && <Button onButtonClick={handleLogout}>Logout</Button>}
      {!isLoggedIn && <h1>You are not logged in</h1>}
    </CenterContainer>
  );
};

export default Logout;
