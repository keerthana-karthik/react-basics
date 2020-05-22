import React, { Component } from 'react';
import UserInputComponent from "./UserInput/UserInputComponent";
import UserOutputComponent from "./UserOutput/UserOutputComponent";
import basicSyntaxClasses from './BasicSyntaxComponent.css';

class BasicSyntaxComponent extends Component {
  state = {
    username: "userfromparent"
  }
  userChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }
  render() {
    return (
      <div className={basicSyntaxClasses.Container}>
        <div className={basicSyntaxClasses.ContainerCol303040}>
          <div className={basicSyntaxClasses.Box}>
            <UserInputComponent changed={this.userChangeHandler} currentUserName={this.state.username}></UserInputComponent>
          </div>
          <div className={basicSyntaxClasses.Box} test-attr="UserOutputComponentWrapper">
            <UserOutputComponent username={this.state.username}></UserOutputComponent>
            <UserOutputComponent username={this.state.username}></UserOutputComponent>
            <UserOutputComponent username="Hard Coded Value 1"></UserOutputComponent>
            <UserOutputComponent username="Hard Coded Value 2"></UserOutputComponent>
          </div>
          <div className={basicSyntaxClasses.Box}>
            <ol>
              <li>Create TWO new components: UserInputComponent and UserOutputComponent</li>
              <li>UserInput should hold an input element, UserOutputComponent two paragraphs</li>
              <li>Output multiple UserOutputComponent components in the BasicSyntax component (any paragraph texts of your choice)</li>
              <li>Pass a username (of your choice) to UserOutputComponent via props and display it there</li>
              <li>Add state to the BasicSyntax component (=> the username) and pass the username to the UserOutputComponent component</li>
              <li>Add a method to manipulate the state (=> an event-handler method)</li>
              <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
              <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutputComponent</li>
              <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
              <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
            </ol>
          </div>
        </div>
        
      </div>
    );
  }
}

export default BasicSyntaxComponent;
