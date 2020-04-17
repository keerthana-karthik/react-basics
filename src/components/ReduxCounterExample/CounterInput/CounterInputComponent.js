import React, { useState } from "react";
import reduxCounterExampleClasses from "../ReduxCounterExampleComponent.css";
const CounterInputComponent = (props) => {

    const [inputValue, setInputValue] = useState(0);
    const [disableBtnProps, setDisableBtnProps] = useState({ 'disabled': true });

    const userChangeHandler = (event) => {
        let value = parseInt(event.target.value);
        setInputValue(value);
        if (value > 0) {
            setDisableBtnProps({});
        } else {
            setDisableBtnProps({ 'disabled': true });
        }
    }

    return (
        <div className={reduxCounterExampleClasses.Container}>
            <div className={reduxCounterExampleClasses.margin10}>
                <input type="number"
                    className={reduxCounterExampleClasses.inputBox}
                    onChange={userChangeHandler}></input>
                <button {...disableBtnProps} onClick={() => props.updateTotal(inputValue)}>{props.actionTypeLabel}</button>
            </div>
        </div>
    );
}
export default CounterInputComponent;