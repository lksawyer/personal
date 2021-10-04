import styles from "./Online.module.css";

import OnlineRetailerCard from "../OnlineRetailer/OnlineRetailerCard";

const Online = (props) => {
  // Conditional logic for rendering onlineRetailer Cards
  if (props.onlineResults.children[props.childProduct].offers.length === 0) {
    return (
      <div className={styles.online}>
        <OnlineRetailerCard retailer={""} />
      </div>
    );
  }

  return (
    <div className={styles.online}>
      {props.onlineResults.children[props.childProduct].offers.map((offer) => (
        <OnlineRetailerCard
          key={offer.id}
          retailer={offer.retailer}
          stock={offer.stock}
          cta={offer.cta}
        />
      ))}
    </div>
  );
};

export default Online;
