import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <nav className={styles.navContainer}>
        <div className={styles.container}>
          <Link to="/BeansHomeWork/home" className={styles.logo}>
            <img src={logo} alt="logo" />
            <span>Jelly Belly</span>
          </Link>
        </div>
        <div className={styles.navBar}>
          <Link to="/BeansHomeWork/beans">Beans</Link>

          <Link to="/BeansHomeWork/facts">Facts</Link>

          <Link to="/BeansHomeWork/recipes">Recipes</Link>

          <Link to="/BeansHomeWork/combinations">Combinations</Link>

          <Link to="/BeansHomeWork/history">History</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
