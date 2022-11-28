import { useNavigate } from "react-router-dom";
import styles from "./NavigateBtn.module.css";

const NavigateBtn = ({ navigateSteps, children }) => {
  const navigate = useNavigate();

  return (
    <button
      className={styles["navigate-btn"]}
      onClick={() => navigate(navigateSteps)}
    >
      {children}
    </button>
  );
};

export default NavigateBtn;
