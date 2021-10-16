import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

function ProductContent({ name, price, image }) {
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
            <a href="" class="btn">
              Buy Now
            </a>
            <h3>
              Product Details<i class="fa fa-indent"></i>
            </h3>
            <br />
            <p>
              Thank you for browsing our products, I hope you can enjoy
              shopping. We will be shipped within 24 hours after receipt of
              order.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductContent;
