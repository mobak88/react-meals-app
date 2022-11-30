import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import NavLi from "./navLi/NavLi";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles["nav-list"]}>
        <NavLi toPage="/" pageName="Home" />
        <NavLi toPage="/search" pageName="Search recipes" />
        <NavLi toPage="/liked-meals" pageName="Liked meals" />
        <NavLi toPage="/areas" pageName="Food areas" />
        <NavLi toPage="/login" pageName="Login" />
        <NavLi toPage="/logout" pageName="Logout" />
      </ul>
    </nav>
  );
};

export default Navigation;
