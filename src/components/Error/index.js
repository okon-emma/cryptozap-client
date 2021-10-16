import React from "react";
import Header from "../../pages/Header";
import Footer from "../../pages/Footer";
import "./error.css";

function Error({ message }) {
  return (
    <>
      <div class="header">
        <div class="container">
          <Header />
        </div>
      </div>
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>Oops!</h1>
            <h2>{message}</h2>
          </div>
          <a href="/">Go TO Homepage</a>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Error;
