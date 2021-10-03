import "./ProductOption.css";

const ProductOption = (props) => {
  return (
    <option value={props.variant} className="product__option">
      {props.variant}
    </option>
  );
};

export default ProductOption;
