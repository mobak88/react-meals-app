import styles from "./MealsWrapper.module.css";

const MealsWrapper = ({ children }) => {
  return <div className={styles["meals-wrapper"]}>{children}</div>;
};

export default MealsWrapper;
