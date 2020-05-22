import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
import { findByTestAtrr } from '../../../testHelpers/testHelper';
import UserInputComponent from './UserInputComponent';


configure({ adapter: new Adapter() });
const setUp = (props={}) => {
    const component = shallow(<UserInputComponent {...props} />);
    return component;
};

// Nested details with respective beforeEach
describe('UserInputComponent', () => {

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                changed: ()=> {},
                currentUserName: 'Test Name'
            };
            wrapper = setUp(props);
        });
        it('Should render input element', () => {
            const userInputElement = findByTestAtrr(wrapper, 'userInputElement');
            expect(userInputElement.length).toBe(1);
        });
    });

    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });
        it('Should render error message', () => {
            const renderErrorDiv = findByTestAtrr(wrapper, 'renderError');
            expect(renderErrorDiv.length).toBe(1);
        });
    });
});
