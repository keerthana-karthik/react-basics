import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { findByTestAtrr } from '../../testHelpers/testHelper';
import BasicSyntaxComponent from "./BasicSyntaxComponent";
import UserInputComponent from "./UserInput/UserInputComponent";
import UserOutputComponent from "./UserOutput/UserOutputComponent";

configure({adapter: new Adapter()});

const setUp = (props={}) => {
    const component = mount(<BasicSyntaxComponent {...props} />);
    return component;
};
let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

describe("BasicSyntaxComponent Tests", () => {
    it('UserInputComponent renders one time', () => {
        const UserInputComponentTag = wrapper.find(UserInputComponent);
        expect(UserInputComponentTag.length).toBe(1);
    });
    it('UserOutputComponent renders four time', () => {
        const UserOutputComponentDiv = wrapper.find(UserOutputComponent);
        expect(UserOutputComponentDiv.length).toBe(4);
    });
    it('Change Input in UserInputComponent and test if it updates in UserOutputComponent', () => {
        const userInputElement = findByTestAtrr(wrapper, 'userInputElement');
        userInputElement.simulate('change', {target: {value: 'Test input value'}});
        const outputUsername = findByTestAtrr(wrapper, 'outputUsername');
        expect(outputUsername.first().text()).toMatch('Test input value');
    });
});