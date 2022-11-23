import styles from "./MealTable.module.css";

const MealTable = ({ ingredientsInfo }) => {
  return (
    <table className={styles["meal-table"]}>
      <thead>
        <tr>
          <th className={styles["table-data"]}>Ingredient</th>
          <th className={styles["table-data"]}>Measurement</th>
        </tr>
      </thead>
      <tbody>
        {ingredientsInfo &&
          ingredientsInfo.map((ingredientInfo, i) => {
            return (
              <tr
                className={styles["table-row"]}
                key={ingredientInfo.ingredient + i}
              >
                <td className={styles["table-data"]}>
                  {ingredientInfo.ingredient}
                </td>
                <td className={styles["table-data"]}>
                  {ingredientInfo.measurement}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default MealTable;
