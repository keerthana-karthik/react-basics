import React, { Component } from "react";
import userInputClasses from "./UserInputComponent.css";
class UserInputComponent extends Component {
    render() {
        return(
            <div className={userInputClasses.margin10}>
                <label>Input: </label>
                <input type="text"
                    className = {userInputClasses.inputBox}
                    onChange={this.props.changed}
                    value={this.props.currentUserName}></input>
            </div>
        );
    }
}
export default UserInputComponent