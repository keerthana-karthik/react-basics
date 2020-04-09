import React, { Component } from "react";
import logo from "./logo.svg";
import appclasses from "./App.css";
import indexclasses from "./index.css";
import CustomFormComponent from "./components/Forms/CustomFormComponent";

class App extends Component {
  render() {
    return (
      <div className={appclasses.App}>
        <header className={appclasses.AppHeader}>
          <img src={logo} className={appclasses.AppLogo} alt="logo" />
          <h1 className={appclasses.AppTitle}>Welcome to React</h1>
        </header>
        <div className={indexclasses.ContainerCol2}>
          <div className={indexclasses.Box}>
            <CustomFormComponent></CustomFormComponent>
          </div>
          <div className={indexclasses.Box}></div>
        </div>
      </div>
    );
  }
}

export default App;
