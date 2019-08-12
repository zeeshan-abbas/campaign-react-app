import React from 'react';
import {createStore} from 'redux';
import campaign from '../redux/reducers/campaignReducer'
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import App from './app';

const initStore = () => {
    const initialState = [
        {
            id:1,
            name:"Divavu",
            startDate:"8/10/2019",
            endDate:"8/20/2019",
            Budget:88377
        }
    ];
    return createStore(campaign, {
        campaign: initialState
    });
};

const findByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
};

describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
        const store = initStore();
        wrapper = mount( <Provider store={store}><App/></Provider>);
        return wrapper;
    });
    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);

    });
    it('Should have Header', () => {
        const component = findByTestAttr(wrapper, 'header');
        expect(component.length).toBe(1);

    });
    it('Should have content layout', () => {
        const component = findByTestAttr(wrapper, 'mainContent');
        expect(component.length).not.toBe(0);

    });
});

