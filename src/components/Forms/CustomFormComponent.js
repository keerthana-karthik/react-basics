import React, { Component } from "react";
import FormElementComponent from "./FormElement/FormElementComponent";
import ButtonComponent from "./Button/ButtonComponent";
import CustomFormState from "./CustomFormState";
import FormsHelper from "./FormsHelper";
import indexclasses from "../../index.css";

class CustomFormComponent extends Component {
  state = CustomFormState;

  /* Update state for 
      value, valid and touched fields for modified form element 
      and entire form validity status */
  formElementChangedHandler = (event, inputIdentifier) => {
    const updatedCustomForm = {
      ...this.state.customFormData
    };
    const updatedFormElement = {
      ...updatedCustomForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = FormsHelper.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    if (updatedFormElement.elementType === "checkbox") {
      updatedFormElement.checked = event.target.checked;
    }
    if (
      updatedFormElement.elementType === "radiobutton" &&
      event.target.checked
    ) {
      updatedFormElement.selectedValue = event.target.value;
    }
    updatedCustomForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedCustomForm) {
      formIsValid = updatedCustomForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      customFormData: updatedCustomForm,
      formIsValid: formIsValid,
      formTouched: true
    });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state.customFormData);
  };

  render() {
    let formElementsArray = [];
    for (let key in this.state.customFormData) {
      formElementsArray.push({
        id: key,
        config: this.state.customFormData[key]
      });
    }
    let form = (
      <form onSubmit={this.submitHandler}>
        {formElementsArray.map(formElement => (
          <FormElementComponent
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event =>
              this.formElementChangedHandler(event, formElement.id)
            }
          />
        ))}
        <ButtonComponent
          btnType="Success"
          disabled={!this.state.formIsValid || !this.state.formTouched}
        >
          Submit
        </ButtonComponent>
      </form>
    );
    return (
      <div className={indexclasses.ContainerCol2}>
        <div className={indexclasses.Box}>
          <h4>Enter your Data</h4>
          {form}
        </div>
        <div className={indexclasses.Box}></div>
      </div>

    );
  }
}

export default CustomFormComponent;
