import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import RemoveFromCart from "../Buttons/RemoveFromCart";

const Cart = () => {
  let { cart, removeFromCart } = useContext(CartContext);
  let cartLen = cart.length;

  const truncateTitle = (title) => {
    let maxLength = 30;
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };

  return (
    cartLen && (
      <div className="container">
        <div className="row g-2">
          {cart.map((product) => (
            <div key={product.id} className="col d-flex justify-content-center">
              <div className="card  text-berkeley">
                <div className="card-image p-2">
                  <img
                    className="img-fluid card-img-top"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="card-body bg-honeydew">
                  <h6>{truncateTitle(product.title)}</h6>
                  <p className="card-text">Price: {product.price}$</p>
                  <RemoveFromCart id={product.id}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Cart;
