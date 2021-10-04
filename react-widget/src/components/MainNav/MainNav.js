import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <ul className={styles["main-nav"]}>
      <li className={styles["main-nav__item"]}>
        <a href="#" className={styles["main-nav__link"]}>
          Buy Online
        </a>
      </li>
      <li className={styles["main-nav__item"]}>
        <a href="#" className={styles["main-nav__link"]}>
          Buy Local
        </a>
      </li>
    </ul>
  );
};

export default MainNav;
