import React from 'react';
import {shallow} from 'enzyme';
import Review from '../Review';

describe('Component: Review', () => {
    const wrapper = shallow(<Review />)

    it('Should render without exploding', () => {
        expect(wrapper.length).toEqual(1);
    })
})