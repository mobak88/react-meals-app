import styles from "./MealCardContainer.module.css";

const MealCardContainer = ({ children, meals }) => {
  return (
    <div
      className={
        meals.length < 5
          ? styles["meal-card-container-centered"]
          : styles["meal-card-container"]
      }
    >
      {children}
    </div>
  );
};

export default MealCardContainer;
