import React, { useState, useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import PaymentModal from "./PaymentModal";

function ProductContent({ name, price, image }) {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="header">
        <div class="container">
          <Header />
        </div>
      </div>
      <div class="small-container single-product">
        <div class="row">
          <div class="col-2">
            <img src={image} width="100%" id="ProductImg" />
          </div>
          <div class="col-2">
            <p>Home / Product</p>
            <h2>{name}</h2>
            <h4>${price}</h4>
            <select name="" id="">
              <option value="">Select Size</option>
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
            <a
              class="btn buy-with-crypto"
              href="https://commerce.coinbase.com/checkout/155e93c5-bed9-4eb0-bc3f-d2ac735d853e"
            >
              Buy Now
            </a>
            <h3>
              Product Details<i class="fa fa-indent"></i>
            </h3>
            <br />
            <p>
              Thank you for browsing our products, I hope you enjoy shopping. We
              will be shipped within 24 hours after receipt of order.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductContent;
