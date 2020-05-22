import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { findByTestAtrr } from '../../testHelpers/testHelper';
import CustomFormComponent from "./CustomFormComponent";
import ButtonComponent from "./Button/ButtonComponent";
import CustomFormState from "./CustomFormState";

configure({adapter: new Adapter()});
const setUp = (props={}) => {
    const component = mount(<CustomFormComponent {...props} />);
    return component;
};
let wrapper;
beforeEach(() => {
    wrapper = setUp();
    wrapper.setState(CustomFormState);
    wrapper.update();
});
describe("CustomFormComponent Tests", () => {
    it('FormElementComponent radio renders', () => {
        expect(wrapper.find('input[type="radio"]').length).toBe(3);
        // console.log(wrapper.debug());
    });
    it('ButtonComponent renders four time', () => {
        const ButtonComponentDiv = wrapper.find(ButtonComponent);
        expect(ButtonComponentDiv.is('[disabled]')).toBeTruthy();
    });
    it('FormElementComponent Input renders', () => {
        console.log(wrapper.debug());
        const userInputElement = findByTestAtrr(wrapper, 'textbox_1');
        userInputElement.simulate('change', {target: {value: 'Test input value'}});
        const ButtonComponentDiv = wrapper.find(ButtonComponent);
        setTimeout(() => {
            expect(ButtonComponentDiv.is('[disabled]')).not.toBeTruthy();
        console.log(wrapper.debug());
        },500)
    });
});