import React from 'react';
import {shallow} from 'enzyme';
import ReviewPage from '../ReviewPage';

jest.mock('../../../api/podiumApi');

describe('Component: ReviewPage', () => {
    const match = {params: {id: '9793364045824'}};
    const wrapper = shallow(<ReviewPage match={match}/>);
    
    it('Should render without exploding', () => {
        expect(wrapper.length).toEqual(1);
    });

    //Test .getReviewData() method
    describe('.getReviewData()', () => {
        it('Should receive id from the url params', () => {
            wrapper.instance().getReviewData();
            expect(wrapper.state().review.id).toEqual('9793364045824');
        });

        it('review on state should have a rating prop', () => {
            wrapper.instance().getReviewData();
            expect(wrapper.state().review).toHaveProperty('rating');
        });

        it('review on state should have publish_date prop', () => {
            wrapper.instance().getReviewData();
            expect(wrapper.state().review).toHaveProperty('publish_date');
        });

        it('review on state should have prop id', () => {
            wrapper.instance().getReviewData();
            expect(wrapper.state().review).toHaveProperty('id');
        });

        it('review on state should have a body prop', () => {
            wrapper.instance().getReviewData();
            expect(wrapper.state().review).toHaveProperty('body');
        });

        it('review on state should have author prop', () => {
            wrapper.instance().getReviewData();
            expect(wrapper.state().review).toHaveProperty('author');
        });
    })
})