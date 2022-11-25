import { useContext, useEffect } from "react";
import IsLoggedInContext from "../../contexts/isLoggedInContext";
import Button from "../../components/buttons/button/Button";

const Logout = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(IsLoggedInContext);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.setItem("loggedIn", JSON.stringify(isLoggedIn));
    }
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn && <Button onClick={logoutHandler}>Logout</Button>}
      {!isLoggedIn && <h1>You are not logged in</h1>}
    </div>
  );
};

export default Logout;
