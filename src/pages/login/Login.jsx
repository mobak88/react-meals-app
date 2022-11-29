import { useContext, useRef, useEffect } from "react";
import LoginForm from "../../components/ui/forms/loginForm/LoginForm";
import CenterContainer from "../../components/ui/centerContainer/CenterContainer";
import IsLoggedInContext from "../../contexts/isLoggedInContext";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(IsLoggedInContext);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("loggedIn", JSON.stringify(isLoggedIn));
    }
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    const userEmail = "test@test.com";
    const userPassword = "1234";

    e.preventDefault();
    if (
      emailInputRef.current.value === userEmail &&
      passwordInputRef.current.value === userPassword
    ) {
      setIsLoggedIn(true);
      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
    }
  };

  return (
    <CenterContainer>
      {!isLoggedIn && (
        <LoginForm
          emailInputRef={emailInputRef}
          passwordInputRef={passwordInputRef}
          onSubmitForm={handleSubmit}
        />
      )}
      {isLoggedIn && <h1>You are logged in</h1>}
    </CenterContainer>
  );
};

export default Login;
