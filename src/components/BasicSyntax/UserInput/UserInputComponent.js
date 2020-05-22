import React, { Component } from "react";
import userInputClasses from "./UserInputComponent.css";
import commonClasses from "../../../index.css";
class UserInputComponent extends Component {
    render() {
        const {changed, currentUserName} = this.props;
        // onChangeHandler is not passed, don't render this component
        if(!changed) {
            return(<div className={commonClasses.renderError} test-attr="renderError">Pass onChange handler as 'changed' attribute</div>);
        }
        return(
            <div className={userInputClasses.margin10}>
                <label>Input: </label>
                <input type="text"
                    className = {userInputClasses.inputBox}
                    onChange={changed}
                    value={currentUserName}
                    test-attr="userInputElement"></input>
            </div>
        );
    }
}
export default UserInputComponent