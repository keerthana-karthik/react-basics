import React, { Component } from "react";
import indexclasses from "../../index.css";
import homeclasses from "./HomeComponent.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import CustomFormComponent from "../Forms/CustomFormComponent";
import BasicSyntaxComponent from "../BasicSyntax/BasicSyntaxComponent";
import ListsConditionalsComponent from "../ListsConditionals/ListsConditionalsComponent";
import RoutingExampleComponent from "../RoutingExample/RoutingExampleComponent";
import ReduxCounterExampleComponent from "../ReduxCounterExample/ReduxCounterExampleComponent";
import PageNotFoundComponent from "../PageNotFound/PageNotFoundComponent";
import navBarClasses from "./NavBarComponent.css";
import { withRouter } from 'react-router-dom';

class HomeComponent extends Component {
  collapsed = true;
  state = {

    sideNavbarClasses: [navBarClasses.SideNavbar, navBarClasses.Close]
  }
  componentWillUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.collapsed = true;
      this.setState({
        sideNavbarClasses: [navBarClasses.SideNavbar, navBarClasses.Close]
      });
    }
  }
  componentDidUpdate(prevProps) {
    // this.collapsed = (this.collapsed) ? false : true;
  }
  onToggleButtonClick = () => {

    if (this.collapsed) {
      this.setState({
        sideNavbarClasses: [navBarClasses.SideNavbar, navBarClasses.Open]
      });
    } else {
      this.setState({
        sideNavbarClasses: [navBarClasses.SideNavbar, navBarClasses.Close]
      });
    }
    this.collapsed = (this.collapsed) ? false : true;

  }
  onPageBodyClick = () => {
    this.collapsed = true;
    this.setState({
      sideNavbarClasses: [navBarClasses.SideNavbar, navBarClasses.Close]
    });
  }
  render() {
    return (
      <div>
        <header className={navBarClasses.Navbar}>
          <div>
            <button className={navBarClasses.ToggleButton} onClick={this.onToggleButtonClick}>
              <span className={navBarClasses.ToggleBar}></span>
              <span className={navBarClasses.ToggleBar}></span>
              <span className={navBarClasses.ToggleBar}></span>
            </button>
            React
          </div>
          <div className={navBarClasses.TopNavbar}>
            <ul className={navBarClasses.NavUl}>
              <li className={navBarClasses.NavLi}>
                <NavLink to="/basicsyntax" className={homeclasses.Content} activeClassName={homeclasses.active}>
                  Basic Syntax
                            </NavLink>
              </li>
              <li className={navBarClasses.NavLi}>
                <NavLink to="/listsconditionals" className={homeclasses.Content} activeClassName={homeclasses.active}>
                  Lists and Conditionals
                            </NavLink>
              </li>
              <li className={navBarClasses.NavLi}>
                <NavLink to="/routingexample/courses" className={homeclasses.Content} activeClassName={homeclasses.active}>
                  Routing Example
                            </NavLink>
              </li>
              <li className={navBarClasses.NavLi}>
                <NavLink to="/form" className={homeclasses.Content} activeClassName={homeclasses.active}>
                  Form
                            </NavLink>
              </li>
              <li className={navBarClasses.NavLi}>
                <NavLink to="/reduxexample" className={homeclasses.Content} activeClassName={homeclasses.active}>
                  Redux Example
                            </NavLink>
              </li>

            </ul>
          </div>
          <div className={this.state.sideNavbarClasses.join(" ")}>
            <div className={navBarClasses.SideNavUl}>
              <div className={navBarClasses.SideNavLi}><NavLink to="/basicsyntax" className={navBarClasses.SideNavContent} activeClassName={navBarClasses.active}>
                Basic Syntax
                            </NavLink></div>
              <div className={navBarClasses.SideNavLi}><NavLink to="/listsconditionals" className={navBarClasses.SideNavContent} activeClassName={navBarClasses.active}>
                Lists and Conditionals
                            </NavLink></div>
              <div className={navBarClasses.SideNavLi}><NavLink to="/routingexample/courses" className={navBarClasses.SideNavContent} activeClassName={navBarClasses.active}>
                  Routing Example
                            </NavLink></div>
              <div className={navBarClasses.SideNavLi}><NavLink to="/form" className={navBarClasses.SideNavContent} activeClassName={navBarClasses.active}>
                  Form
                            </NavLink></div>
              <div className={navBarClasses.SideNavLi}><NavLink to="/reduxexample" className={navBarClasses.SideNavContent} activeClassName={navBarClasses.active}>
                  Redux Example
                            </NavLink></div>
            </div>
          </div>
        </header>

        <div className={navBarClasses.PageBody} onClick={this.onPageBodyClick}>
          <Switch>
            <Route path="/form" exact component={CustomFormComponent} />
            <Route path="/basicsyntax" exact component={BasicSyntaxComponent} />
            <Route path="/listsconditionals" exact component={ListsConditionalsComponent} />
            <Route path="/routingexample" component={RoutingExampleComponent} />
            <Route path="/reduxexample" component={ReduxCounterExampleComponent} />
            <Redirect from="/" to="/basicsyntax" />
            <Route component={BasicSyntaxComponent} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(props => <HomeComponent {...props} />);
