import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles["footer__text"]}>Powered by: </p>
    </div>
  );
};

export default Footer;
