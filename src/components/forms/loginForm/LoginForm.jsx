import styles from "./LoginForm.module.css";

const LoginForm = ({ emailInputRef, passwordInputRef, onSubmit }) => {
  return (
    <form className={styles["login-form"]} onSubmit={onSubmit}>
      <div className={styles["input-container"]}>
        <label htmlFor="username">Username:</label>
        <input required id="username" type="email" ref={emailInputRef} />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="password">Password:</label>
        <input
          required
          id="password"
          type="password"
          minLength="4"
          ref={passwordInputRef}
        />
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
