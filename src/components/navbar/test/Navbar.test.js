import React from 'react';
import {shallow} from 'enzyme';
import Navbar from '../Navbar';

describe('Component: Navbar', () => {
    const wrapper = shallow(<Navbar />);

    it('Should render without exploding', () => {
        expect(wrapper.length).toEqual(1);
    })
})