import react from "react";
import "./loader.css";

function Loader() {
  return (
    <>
      <div class="animationLoading">
        <div id="container">
          <div id="one"></div>
          <div id="two"></div>
          <div id="three"></div>
        </div>
        <div id="four"></div>
        <div id="five"></div>
        <div id="six"></div>
      </div>
    </>
  );
}

export default Loader;
