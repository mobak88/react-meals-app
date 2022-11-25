import { useContext, useRef, useEffect } from "react";
import LoginForm from "../../components/forms/loginForm/LoginForm";
import IsLoggedInContext from "../../contexts/isLoggedInContext";
import styles from "./Login.module.css";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(IsLoggedInContext);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("loggedIn", JSON.stringify(isLoggedIn));
    }
  }, [isLoggedIn]);

  const submitHandler = (e) => {
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
    <div className={styles["login-container"]}>
      <LoginForm
        emailInputRef={emailInputRef}
        passwordInputRef={passwordInputRef}
        onSubmit={submitHandler}
      />
    </div>
  );
};

export default Login;
