import React from 'react';
import {shallow} from 'enzyme';
import Error from '../Error';

describe('Component: Error', () => {
    const wrapper = shallow(<Error />);

    it('Should render without exploding', () => {
        expect(wrapper.length).toEqual(1);
    })
});