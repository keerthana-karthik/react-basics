import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import routingExampleClasses from "../RoutingExample/RoutingExampleComponent.css";
import CoursesComponent from './Courses/CoursesComponent';
import UsersComponent from './Users/UsersComponent';
import PageNotFoundComponent from "../PageNotFound/PageNotFoundComponent";

class RoutingExampleComponent extends Component {
  render() {
    return (
      <div className={routingExampleClasses.Container}>
        <div className={routingExampleClasses.ContainerCol105040}>
          <div className={routingExampleClasses.Box}>
            <div className={routingExampleClasses.margin10}>
              <ul className={routingExampleClasses.UlAsSideBar}>
                <li>
                  <Link to={{ pathname: "/routingexample/courses" }}>Courses</Link>
                </li>
                <li>&nbsp;</li>
                <li>
                  <Link to={{ pathname: "/routingexample/users" }}>Users</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={routingExampleClasses.Box}>
            <div className={routingExampleClasses.margin10}>
              <Switch>
                <Route path="/routingexample/courses" component={CoursesComponent}></Route>
                <Route path="/routingexample/users" component={UsersComponent}></Route>
                <Route component={PageNotFoundComponent} />
              </Switch>
            </div>
          </div>
          <div className={routingExampleClasses.Box}>
            <div className={routingExampleClasses.margin10}>
              <ol style={{ textAlign: 'left' }}>
                <h4>Nested Routing:</h4>
                <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
                <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses"</li>
                <li>Pass the course ID to the "Course" page and output it there</li>
                <li>Pass the course title to the "Course" page - pass it as a param</li>
                <li>Load the "Course" component as a nested component of "Courses"</li>
                
                <h4>General Routing:</h4>
                <li>Route to different pages for top items Form, Basic Syntax, Lists and Conditionals, Routing Example, etc</li>
                <li>Add a 404 error page and render it for any unknown routes</li>
                <li>Redirect requests to /home to /basicsyntax</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoutingExampleComponent;
