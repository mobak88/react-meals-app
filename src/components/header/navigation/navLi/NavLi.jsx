import { NavLink } from "react-router-dom";
import styles from "./NavLi.module.css";

const NavLi = ({ toPage, pageName }) => {
  return (
    <li className={styles["nav-list-item"]}>
      <NavLink
        className={(navData) =>
          navData.isActive
            ? `${styles["nav-link"]} ${styles.active}`
            : styles["nav-link"]
        }
        to={toPage}
      >
        {pageName}
      </NavLink>
    </li>
  );
};

export default NavLi;
