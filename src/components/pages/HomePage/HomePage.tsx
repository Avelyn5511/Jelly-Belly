import React from "react";
import homeGif from "../../../assets/image/main.gif";
import styles from "./styles.module.css";

const Home: React.FC = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.containerGif}>
          <img className={styles.gif} src={homeGif} alt="homeGif" />
          <div className={styles.containerTitle}>
            <h1>Welcome to the World of Jelly Belly:</h1>
            <p>A Rainbow of Flavors Awaits!</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
