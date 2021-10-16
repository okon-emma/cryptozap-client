import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// Import Components
import Error from "../../../components/Error";
import Loader from "../../../components/Loader";
import Header from "../../Header";
import Footer from "../../Footer";
import ProductContent from "./ProductContent";

function ProductDetail() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://api.cryptozap.xyz/product/" + id)
      .then(function (response) {
        // handle success
        // console.log(response.data.data);
        setIsLoaded(true);
        setProduct(response.data.data);
      })
      .catch(function (error) {
        // handle error
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <>
        <Error message={error.message} />
      </>
    );
  } else if (!isLoaded) {
    return (
      <>
        <div class="header">
          <div class="container">
            <Header />
          </div>
        </div>
        <div class="small-container">
          <Loader />
        </div>
      </>
    );
  } else if (product != null) {
    return (
      <>
        <ProductContent
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      </>
    );
  } else {
    return (
      <>
        <Error message="No Product Found" />
      </>
    );
  }
}

export default ProductDetail;
