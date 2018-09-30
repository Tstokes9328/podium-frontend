import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from '../Dashboard';

jest.mock('../../../api/podiumApi.js');

describe('Component: Dashboard', () => {
    const wrapper = shallow(<Dashboard/>);

    //Test component functionality
    it('Should render without exploding', () => {
        expect(wrapper.length).toEqual(1);
    });
    
    it('Should link to review page when a review is clicked', () => {
        expect(wrapper.find('Link').prop('to')).toEqual('/review/9783221620868');
    });

    //Test .fetchReviews method
    describe('.fetchReviews', () => {
        afterEach(() => {
            wrapper.setState({
                reviews: [],
                edit: false,
                rating: 0
            })
        });
        
        it('Should receive reviews', () => {
            wrapper.instance().fetchReviews();
            expect(wrapper.state().reviews.length).toBe(1)
        });

        it('rating on state should equal 0', () => {
            wrapper.setState({rating: 1});
            wrapper.instance().fetchReviews();
            expect(wrapper.state().rating).toBe(0);
        });
    }),

    //Test .handleEditChange method
    describe('.handleEditChange', () => {
        afterEach(() => {
            wrapper.setState({
                reviews: [],
                edit: false,
                rating: 0
            })
        })

        it('Should change `edit` on state to the opposite value', () => {
            wrapper.instance().handleEditChange();
            expect(wrapper.state().edit).toBe(!!wrapper.state().edit);
        })
    }),

    //Test .filterReview method
    describe('.filterReview', () => {
        afterEach(() => {
            wrapper.setState({
                reviews: [],
                edit: false,
                rating: 0
            })
        })

        it('Should change `rating` on state', () => {
            wrapper.instance().filterReviews(3);
            expect(wrapper.state().rating).toBe(3);
        })
    })
})