import React, { Component } from "react";
import logo from "./logo.svg";
import appclasses from "./App.css";
import HomeComponent from "./components/Home/HomeComponent";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={appclasses.App}>
          <header className={appclasses.AppHeader}>
            <img src={logo} className={appclasses.AppLogo} alt="logo" />
            <h1 className={appclasses.AppTitle}>Welcome to React</h1>
          </header>
          {
          <HomeComponent></HomeComponent>}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
