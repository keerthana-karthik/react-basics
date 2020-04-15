import React, { Component } from "react";
import charClasses from "../CharComponent/CharComponent.css";
const CharComponent = (props) => {
    return(
    <div className={charClasses.CharBox} onClick={props.clicked}>
        {props.charValue}
    </div>
    );
}
export default CharComponent;