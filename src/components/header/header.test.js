import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setUp = (props={}) => {
    return shallow(<Header {...props} />);
};

const findByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
};

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    });

});