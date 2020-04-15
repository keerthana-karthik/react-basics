import React, { Component } from "react";
import indexclasses from "../../index.css";
import homeclasses from "./HomeComponent.css";
import { Route, NavLink } from "react-router-dom";
import CustomFormComponent from "../Forms/CustomFormComponent";
import BasicSyntaxComponent from "../BasicSyntax/BasicSyntaxComponent";
import ListsConditionalsComponent from "../ListsConditionals/ListsConditionalsComponent";

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <div className={homeclasses.ContentWrapper}>
          <NavLink to="/form" className={homeclasses.Content} activeClassName={homeclasses.active}>
            Form
          </NavLink>
          <NavLink to="/basicsyntax" className={homeclasses.Content} activeClassName={homeclasses.active}>
            Basic Syntax
          </NavLink>
          <NavLink to="/listsconditionals" className={homeclasses.Content} activeClassName={homeclasses.active}>
            Lists and Conditionals
          </NavLink>
          <NavLink to="/redux" className={homeclasses.Content} activeClassName={homeclasses.active}>
            Redux
          </NavLink>
        </div>

        <Route path="/form" exact component={CustomFormComponent} />
        <Route path="/basicsyntax" exact component={BasicSyntaxComponent} />
        <Route path="/listsconditionals" exact component={ListsConditionalsComponent} />
      </div>
    );
  }
}

export default HomeComponent;
