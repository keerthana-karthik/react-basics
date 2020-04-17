import React, { Component } from "react";
import { connect } from "react-redux";
import reduxCounterExampleClasses from "../ReduxCounterExampleComponent.css";
const CounterOutputComponent = (props) => {
    return (
        <div className={reduxCounterExampleClasses.Container} style={{'textAlign': 'center'}}>
            <div className={reduxCounterExampleClasses.Box}>
                <div className={reduxCounterExampleClasses.margin10}>
                    Total: {props.countervalue}
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        countervalue: state.counter
    };
}
export default connect(mapStateToProps)(CounterOutputComponent);