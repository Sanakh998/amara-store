import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetails from "../Components/Products/ProductDetails";
import Loading from '../Components/Loading/Loading'

const ProductPage = () => {
  let { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      let res = await fetch("https://fakestoreapi.com/products/" + id);
      if (res.ok) {
        let product = await res.json();
        setProduct(product);
        console.log(product);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {

  } else {
    return (
      <div className="container-fluid">
        <Link to={-1} className="btn btn-danger my-3 ms-2 px-3">
          Back
        </Link>
        {loading && <Loading/>}
        {product && <ProductDetails product={product} />}
      </div>
    );
  }
};

export default ProductPage;
