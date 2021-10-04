import styles from "./OnlineRetailerCard.module.css";
import heb from "../../assets/img/heb.png";
import instacart from "../../assets/img/instacart.png";
import target from "../../assets/img/target.png";
import walmart from "../../assets/img/walmart.png";

const OnlineRetailerCard = (props) => {
  // Conditional rendering of stock stock text
  const stock = props.stock ? "In Stock" : "No Stock";

  // Conditional rendering of .online-retailer-card
  if (props.retailer === "") {
    return (
      <div className={styles["online-retailer-card"]}>
        <p className={styles["online-retailer-card__no-stock"]}>
          There are no online offers for this product.
        </p>
      </div>
    );
  }

  // Conditional rendering of retailer logo
  let logo;

  switch (props.retailer) {
    case "heb":
      logo = heb;
      break;
    case "instacart":
      logo = instacart;
      break;
    case "target":
      logo = target;
      break;
    default:
      logo = walmart;
  }

  return (
    <div className={styles["online-retailer-card"]}>
      <img
        src={logo}
        alt={props.retailer}
        className={styles["online-retailer-card__img"]}
      />
      <p className={styles["online-retailer-card__stock"]}>{stock}</p>
      <a
        href={props.cta}
        target="_blank"
        rel="noreferrer"
        className={styles["online-retailer-card_CTA"]}
      >
        Buy Now
      </a>
    </div>
  );
};

export default OnlineRetailerCard;
