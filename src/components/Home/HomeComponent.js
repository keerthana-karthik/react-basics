import React, { Component } from "react";
import indexclasses from "../../index.css";
import homeclasses from "./HomeComponent.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import CustomFormComponent from "../Forms/CustomFormComponent";
import BasicSyntaxComponent from "../BasicSyntax/BasicSyntaxComponent";
import ListsConditionalsComponent from "../ListsConditionals/ListsConditionalsComponent";
import RoutingExampleComponent from "../RoutingExample/RoutingExampleComponent";
import PageNotFoundComponent from "../PageNotFound/PageNotFoundComponent";

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <div className={homeclasses.ContentWrapper}>
          <NavLink to="/basicsyntax" className={homeclasses.Content} activeClassName={homeclasses.active}>
            Basic Syntax
          </NavLink>
          <NavLink to="/listsconditionals" className={homeclasses.Content} activeClassName={homeclasses.active}>
            Lists and Conditionals
          </NavLink>
          <NavLink to="/routingexample/courses" className={homeclasses.Content} activeClassName={homeclasses.active}>
            Routing Example
          </NavLink>
          <NavLink to="/form" className={homeclasses.Content} activeClassName={homeclasses.active}>
            Form
          </NavLink>
        </div>

        <Switch>
          <Route path="/form" exact component={CustomFormComponent} />
          <Route path="/basicsyntax" exact component={BasicSyntaxComponent} />
          <Route path="/listsconditionals" exact component={ListsConditionalsComponent} />
          <Route path="/routingexample" component={RoutingExampleComponent} />
          <Redirect from="/home" to="/basicsyntax" />
          <Route component={PageNotFoundComponent} />
        </Switch>
      </div>
    );
  }
}

export default HomeComponent;
