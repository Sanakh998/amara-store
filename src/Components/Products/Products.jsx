import React from "react";
import { cardStyle } from "../Styles/cardSize";
import { Link } from "react-router-dom";

const Products = ({products, category}) => {
  return (
    <div className="container-fluid px-5">
      <h2 className="bg-berkeley text-honeydew py-2 mt-2 rounded ps-3">
        {category}
      </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-">
        {products &&
          products.map((product) => (
            <div key={product.id} className="col">
              <Link to={'/products/' + product.id}>
              <div className="card product-card">
                <div className="card-image" >
                  <img
                    className="img-fluid card-img-top"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h6>{product.title}</h6>
                  <p className="card-text">Price: {product.price}$</p>
                </div>
              </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
