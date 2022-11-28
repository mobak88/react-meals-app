import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles["nav-list"]}>
        <li className={styles["nav-list-item"]}>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? `${styles["nav-link"]} ${styles.active}`
                : styles["nav-link"]
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={styles["nav-list-item"]}>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? `${styles["nav-link"]} ${styles.active}`
                : styles["nav-link"]
            }
            to="/search"
          >
            Search recipes
          </NavLink>
        </li>
        <li className={styles["nav-list-item"]}>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? `${styles["nav-link"]} ${styles.active}`
                : styles["nav-link"]
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li className={styles["nav-list-item"]}>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? `${styles["nav-link"]} ${styles.active}`
                : styles["nav-link"]
            }
            to="/logout"
          >
            Logout
          </NavLink>
        </li>
        <li className={styles["nav-list-item"]}>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? `${styles["nav-link"]} ${styles.active}`
                : styles["nav-link"]
            }
            to="/liked-meals"
          >
            Liked meals
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
