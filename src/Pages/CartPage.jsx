import React, { useContext, useEffect } from "react";
import { CartContext } from "../Components/Contexts/CartContext";
import { Link } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import BackButton from "../Components/Buttons/BackButton";

const CartPage = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container-fluid">
      <BackButton />
      <div className="container">
        <h2 className="sticky-top bg-photoblue text-pantone py-2 rounded text-center">
          Your Cart
        </h2>
      </div>
      <div className="container cart-container text-center bg-honeydew rounded my-3 text-pantone">
        {cart.length !== 0 && (
          <h5 className="bg-berkeley py-2 px-5 text-honeydew rounded">
            You Have Added {cart.length} {cart.length === 1 ? "item" : "items"}{" "}
            to Cart.
          </h5>
        )}

        {cart.length === 0 ? <NoCart /> : <Cart />}
      </div>
    </div>
  );
};

export default CartPage;

const NoCart = () => {
  return (
    <div className="container-fluid">
      <h2>There is No Product in Your Cart.</h2>
      <Link to={"/"}>
        <button className="btn btn-primary my-4 btn-lg px-4 fw-bold">
          Shop Now
        </button>
      </Link>
    </div>
  );
};
