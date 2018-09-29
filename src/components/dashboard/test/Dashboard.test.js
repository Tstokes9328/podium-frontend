import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from '../Dashboard';

jest.mock('../../../api/podiumApi.js');

describe('Renders the dashboard componenet', () => {
    const wrapper = shallow(<Dashboard/>);

    describe('.getReviews', () => {
        afterEach(() => {
            wrapper.setState({
                reviews: [],
                edit: false,
                rating: 0
            })
        })
        
        it('getting back reviews', () => {
            wrapper.instance().getReviews();
            expect(wrapper.state().reviews.length).toBe(1)
        })

        it('rating on state should equal 0', () => {
            wrapper.setState({rating: 1});
            wrapper.instance().getReviews();
            expect(wrapper.state().rating).toBe(0);
        })
    })
})