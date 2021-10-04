import styles from "./OnlineRetailerCard.module.css";

const OnlineRetailerCard = (props) => {
  const stock = props.stock ? "In Stock" : "No Stock";

  if (props.retailer === "") {
    return (
      <div className={styles["online-retailer-card"]}>
        <p className={styles["online-retailer-card__no-stock"]}>
          There are no online offers for this product.
        </p>
      </div>
    );
  }

  return (
    <div className={styles["online-retailer-card"]}>
      <img
        src="#"
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
