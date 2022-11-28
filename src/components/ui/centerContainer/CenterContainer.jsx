import styles from "./CenterContainer.module.css";

const CenterContainer = ({ children }) => {
  return <div className={styles["center-container"]}>{children}</div>;
};

export default CenterContainer;
