import React, { Component } from 'react';
import listsConditionalsClasses from './ListsConditionalsComponent.css';
import ListsConditionalsValidationComponent from "./ListsConditionalsValidation/ListsConditionalsValidationComponent";
import CharComponent from "./CharComponent/CharComponent"

class ListsConditionalsComponent extends Component {
    state = {
        inputText: "",
        inputLength: 0
    }
    onInputChange = (event) => {
        this.setState({ inputText: event.target.value, inputLength: event.target.value.length });
    }
    deleteOnClick = (index) => {
        const text = this.state.inputText.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({
            inputText: updatedText,
            inputLength: updatedText.length
        })
    }
    render() {
        let lengthInfo = null;
        let clickText = null;
        if (this.state.inputLength > 0) {
            lengthInfo = <p>Length: {this.state.inputLength}</p>;
            clickText = <h5>Click to delete</h5>;
        }
        const charList = this.state.inputText.split('').map((txt, index) => {
            return <CharComponent charValue={txt} clicked={() => { this.deleteOnClick(index) }}></CharComponent>;
        });
        return (
            <div className={listsConditionalsClasses.Container}>
                <div className={listsConditionalsClasses.ContainerCol303040}>
                    <div className={listsConditionalsClasses.Box}>
                        <div className={listsConditionalsClasses.margin10}>
                            <h5>Type text below</h5>
                            <label>Text: </label>
                            <input type="text"
                                maxLength="5"
                                value={this.state.inputText}
                                className={listsConditionalsClasses.inputBox}
                                onChange={this.onInputChange}></input>

                            {lengthInfo}
                            <ListsConditionalsValidationComponent inputLength={this.state.inputLength}></ListsConditionalsValidationComponent>
                        </div>
                    </div>
                    <div className={listsConditionalsClasses.Box}>
                        <div className={listsConditionalsClasses.margin10}>
                            {clickText}
                            {charList}
                        </div>
                    </div>
                    <div className={listsConditionalsClasses.Box}>
                        <ol>
                            <li>Create an input field (in ListsConditionalsComponent) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
                            <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                            <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
                            <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
                            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
                            <li>When you click a CharComponent, it should be removed from the entered text.</li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListsConditionalsComponent;
