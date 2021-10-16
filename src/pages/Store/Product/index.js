import React from "react";
import { Link } from "react-router-dom";

function Product({ id, name, price, image }) {
  return (
    <>
      <div class="col-4">
        <Link to={`product/${id}`}>
          <img src={image} alt="" />
        </Link>
        <h4>{name}</h4>

        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-o"></i>
        </div>
        <p>${price}</p>
      </div>
    </>
  );
}

export default Product;
