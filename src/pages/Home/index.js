import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import HomeCategory from "./HomeCategory";
import HomeOffer from "./HomeOffer";

function Home() {
  return (
    <>
      <div class="header">
        <div class="container">
          <Header />
          <div class="row">
            <div class="col-2">
              <h1>Crypto Payment Gateway</h1>
              <p>
                Sell your products online, Get paid in crypto
                <br />
                and get settled in your local fiat currency
              </p>
              <a href="/store" class="btn">
                Visit Store &#8594;
              </a>
            </div>
            <div class="col-2">
              <img style={{height: '100'}} src="images/image1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <HomeCategory />
      <HomeOffer />
      <Footer />
    </>
  );
}

export default Home;
