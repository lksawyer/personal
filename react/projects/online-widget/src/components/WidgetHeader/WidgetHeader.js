import styles from "./WidgetHeader.module.css";
import logo from "../../assets/img/logo.png";
import background from "../../assets/img/header-bg.png";

const WidgetHeader = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={styles.header}
    >
      <img src={logo} alt="brand logo" className={styles.header__img} />
    </div>
  );
};

export default WidgetHeader;
