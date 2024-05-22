import React, {useContext} from "react";
import { CartContext } from "../Contexts/CartContext";

const AddToCart = ({id}) => {
  const {addToCart} = useContext(CartContext)
  return (
    <div>
      <button
        className="btn btn-primary "
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
