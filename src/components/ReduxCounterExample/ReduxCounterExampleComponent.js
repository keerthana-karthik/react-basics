import React, { Component } from "react";
import * as Actions from "../../store/actions";
import { connect } from "react-redux";
import reduxCounterExampleClasses from "./ReduxCounterExampleComponent.css";
import CounterInputComponent from "./CounterInput/CounterInputComponent";
import CounterOutputComponent from "./CounterOutput/CounterOutputComponent";

class ReduxCounterExampleComponent extends Component {

    render() {
        let SubtractSection = null;
        if (this.props.countervalue > 0) {
            SubtractSection = <div className={reduxCounterExampleClasses.Box}>
                <div className={reduxCounterExampleClasses.margin10}>
                    <CounterInputComponent actionTypeLabel="Subtract" updateTotal={(val) => this.props.onSubtractValue(val)}></CounterInputComponent>
                </div>
            </div>;
        }

        return (
            <div>
                <CounterOutputComponent></CounterOutputComponent>
                <div className={reduxCounterExampleClasses.Container}>
                    <div className={reduxCounterExampleClasses.ContainerCol25}>
                        <div className={reduxCounterExampleClasses.Box}>
                            <div className={reduxCounterExampleClasses.margin10}>
                                <CounterInputComponent actionTypeLabel="Add" updateTotal={(val) => { this.props.onAddValue(val) }}></CounterInputComponent>
                            </div>
                        </div>
                        {SubtractSection}
                        <div className={reduxCounterExampleClasses.Box}>
                            <div className={reduxCounterExampleClasses.margin10}>
                                <CounterInputComponent actionTypeLabel="Multiply" updateTotal={(val) => this.props.onMultiplyValue(val)}></CounterInputComponent>
                            </div>
                        </div>
                        <div className={reduxCounterExampleClasses.Box}>
                            <div className={reduxCounterExampleClasses.margin10}>
                                <CounterInputComponent actionTypeLabel="Reset" updateTotal={(val) => this.props.onResetValue(val)} ></CounterInputComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countervalue: state.counter
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onAddValue: (v) => dispatch({ type: Actions.ADD, value: v }),
        onSubtractValue: (v) => dispatch({ type: Actions.SUBTRACT, value: v }),
        onMultiplyValue: (v) => dispatch({ type: Actions.MULTIPLY, value: v }),
        onResetValue: (v) => dispatch({ type: Actions.RESET, value: v }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounterExampleComponent);
