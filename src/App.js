import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProductDetail from "./pages/Store/ProductDetail";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/store" component={Store} />
        <Route path="/product/:id" component={ProductDetail} />
      </Switch>
    </main>
  );
}

export default App;
