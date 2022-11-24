import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles["not-found-container"]}>
      <h1>Not found 404</h1>
      <Link className={styles["not-found-link"]} to={"/"}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
