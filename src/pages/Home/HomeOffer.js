import React from "react";

function HomeOffer() {
  return (
    <>
      <div class="offer">
        <div class="small-container">
          <div class="row">
            <div class="col-2">
              <img src="images/exclusive.png" class="offer-img" alt="" />
            </div>
            <div class="col-2">
              <p>Exclusively available on CryptoZap</p>
              <h1>Tesla Smart Watch</h1>
              <small>
                Based on your heart rate, time asleep and restlessness, our band
                helps you better understand your sleep quality each night; also
                track your time in light, deep and REM sleep stages and get
                personal insights.
              </small>
              <br />
              <a
                class="buy-with-crypto"
                href="https://commerce.coinbase.com/checkout/155e93c5-bed9-4eb0-bc3f-d2ac735d853e"
                class="btn"
              >
                Buy Now &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeOffer;
