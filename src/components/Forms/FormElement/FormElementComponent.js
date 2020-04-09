import React from "react";
import indexclasses from "../../../index.css";
import elementclasses from "./FormElementComponent.css";

const FormElementComponent = props => {
  let formElement = null;
  const inputClasses = [elementclasses.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(elementclasses.Invalid);
  }
  switch (props.elementType) {
    case "input":
      formElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      formElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "checkbox":
      formElement = (
        <div className={indexclasses.ContainerCol1090}>
          <input type="checkbox" value={props.value} onChange={props.changed} />
          <label className={indexclasses.textAlignLeft}>
            {props.elementConfig.label}
          </label>
        </div>
      );
      break;
    case "radiobutton":
      let radioname = props.elementConfig.elementName;
      formElement = props.elementConfig.options.map(option => (
        <div className={indexclasses.ContainerCol1090}>
          <input
            type="radio"
            name={radioname}
            value={option.value}
            onChange={props.changed}
          />
          <label className={indexclasses.textAlignLeft}>
            {option.displayValue}
          </label>
        </div>
      ));
      break;
    case "select":
      formElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      break;
  }
  return <div className={indexclasses.margin15}>{formElement}</div>;
};
export default FormElementComponent;
