import styles from "./Product.module.css";
import ProductOption from "./ProductOption";

const Product = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeProductOption(event.target.value);
  };

  return (
    <div className={styles.product}>
      <p className={styles["product__parent-title"]}>{props.parentTitle}</p>
      <p className={styles["product__child-title"]}>{props.childTitle}</p>

      <select
        className={styles["product__select"]}
        onChange={dropdownChangeHandler}
      >
        {props.variants.map((variant) => (
          <ProductOption key={variant} variant={variant} />
        ))}
      </select>
    </div>
  );
};

export default Product;
