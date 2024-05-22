import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const RemoveFromCart = ({ id }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div>
      <button
        className="btn btn-danger "
        onClick={() => {
          removeFromCart(id);
        }}
      >
        Remove from Cart
      </button>
    </div>
  );
};

export default RemoveFromCart;
