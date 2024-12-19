import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <nav className={styles.navContainer}>
        <div className={styles.container}>
          <Link to="/Jelly-Belly/home" className={styles.logo}>
            <img src={logo} alt="logo" />
            <span>Jelly Belly</span>
          </Link>
        </div>
        <div className={styles.navBar}>
          <Link to="/Jelly-Belly/beans">Beans</Link>

          <Link to="/Jelly-Belly/facts">Facts</Link>

          <Link to="/Jelly-Belly/recipes">Recipes</Link>

          <Link to="/Jelly-Belly/combinations">Combinations</Link>

          <Link to="/Jelly-Belly/history">History</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
