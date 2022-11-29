import { useState, useEffect } from "react";
import styles from "./MealInstructions.module.css";

const MealInstructions = ({ mealInstrucions }) => {
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    if (mealInstrucions) {
      setInstructions(
        mealInstrucions.split(".").filter((el) => isNaN(parseInt(el)))
      );
    }
  }, []);

  return (
    <>
      {instructions &&
        instructions.map((instruction, i) => (
          <p key={i} className={styles["meal-text"]}>
            {instruction}.
          </p>
        ))}
    </>
  );
};

export default MealInstructions;
