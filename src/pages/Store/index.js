import React, { useState, useEffect } from "react";
import axios from "axios";
// Import Components
import Header from "../Header";
import Footer from "../Footer";
import Product from "./Product";
import Loader from "../../components/Loader";
import Sorting from "./Sorting";
import Error from "../../components/Error";

function Store() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.cryptozap.xyz/product")
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setIsLoaded(true);
        setItems(response.data.data);
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
          <Sorting />
          <Loader />
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <div class="header">
          <div class="container">
            <Header />
          </div>
        </div>
        <div class="small-container">
          <Sorting />
          <div class="row">
            {items.map((item) => (
              <Product
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Store;
