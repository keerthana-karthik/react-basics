import React, { Component } from "react";
const ListsConditionalsValidationComponent = (props) => {
    let validationText = null;
    if(props.inputLength == 5) {
        validationText = "Text long enough";
    }else if(props.inputLength > 0 && props.inputLength < 5) {
        validationText = "Text too short";
    }else {
        validationText = null;
    }
    return(<div>
        {validationText}
    </div>);
}
export default ListsConditionalsValidationComponent;