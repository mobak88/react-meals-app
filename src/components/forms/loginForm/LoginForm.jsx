const LoginForm = () => {
  return (
    <form>
      <label htmlFor="username"></label>
      <input id="username" type="text" />
      <label htmlFor="password"></label>
      <input id="password" type="text" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
