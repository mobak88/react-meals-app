import styles from "./Button.module.css";

const Button = ({ onButtonClick, children }) => {
  return (
    <button className={styles.button} onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;
