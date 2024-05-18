import React from "react";
import { Link } from "react-router-dom";

const Products = ({products, category}) => {
  const truncateTitle = (title) => {
    let maxLength = 30;
    if(title.length > maxLength){
      return title.slice(0, maxLength) + "...";
    }
    return title;
  }

  return (
    <div className="container-fluid px-5">
      <h2 className="sticky-top bg-photoblue text-pantone py-2 mt-3 rounded ps-3">
        {category}
      </h2>
      <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2">
        {products &&
          products.map((product) => (
            <div key={product.id} className="col d-flex justify-content-center">
              <Link to={'/products/' + product.id}>
              <div className="card product-card text-berkeley">
                <div className="card-image p-2" >
                  <img
                    className="img-fluid card-img-top"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="card-body bg-honeydew">
                  <h6>{truncateTitle(product.title)}</h6>
                  <p className="card-text">Price: {product.price}$</p>
                </div>
              </div>
              </Link>
            </div>
          ))}
      </div>
      <hr className="text-danger" />
    </div>
  );
};

export default Products;
