import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="container bg-honeydew rounded border p-3 mb-3">
      <div className="row">
        <div className="col col-md-4 col-12">
          <img className="img-fluid" src={product.image} alt="" />
        </div>
        <div className="col ps-3 mt-2 m-md-0 d-flex flex-column">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div className="d-flex justify-content-between mx-4 px-3">
            <h5>Price: {product.price}$</h5>
            <h5>Rating: {product.rating.rate} </h5>
          </div>
          <div className="my-2 col-8 col-md-5 mt-md-auto mb-md-4 d-grid mx-auto">
            <button className="btn btn-primary ">Add to cart</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetails;
