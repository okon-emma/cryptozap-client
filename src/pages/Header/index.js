import React, { Component } from "react";

function Header() {
  return (
    <div class="navbar">
      <div class="logo">
        <a href="/">
          <img src="/images/logo.png" alt="Logo" width="170px" />
        </a>
      </div>
      <nav></nav>
      <a href="/store">
        <img src="/images/cart.png" alt="" width="30px" height="30px" />
      </a>
      <img src="/images/menu.png" alt="" class="menu-icon" />
    </div>
  );
}

export default Header;
