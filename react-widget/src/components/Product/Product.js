import "./Product.css";
import ProductOption from "./ProductOption";

const Product = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeProductOption(event.target.value);
  };

  return (
    <div className="product">
      <p className="product__parent-title">{props.parentTitle}</p>
      <p className="product__child-title">{props.childTitle}</p>

      <select className="product__select" onChange={dropdownChangeHandler}>
        {props.variants.map((variant) => (
          <ProductOption key={variant} variant={variant} />
        ))}
      </select>
    </div>
  );
};

export default Product;
