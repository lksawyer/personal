import "./OnlineRetailerCard.css";

const OnlineRetailerCard = (props) => {
  const stock = props.stock ? "In Stock" : "No Stock";

  return (
    <div className="online-retailer-card">
      <img src="#" alt={props.retailer} className="online-retailer-card__img" />
      <p className="online-retailer-card__stock">{stock}</p>
      <a
        href={props.cta}
        target="_blank"
        rel="noreferrer"
        className="online-retailer-card_CTA"
      >
        Buy Now
      </a>
    </div>
  );
};

export default OnlineRetailerCard;
