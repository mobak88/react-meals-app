import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles["nav-list"]}>
        <li className={styles["nav-list-item"]}>
          <Link className={styles["nav-link"]} to="/">
            Home
          </Link>
        </li>
        <li className={styles["nav-list-item"]}>
          <Link className={styles["nav-link"]} to="/search">
            Search recipes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
