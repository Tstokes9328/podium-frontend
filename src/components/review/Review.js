import React from 'react';

//Style Sheet
import './review.css';

const Review = (props) => {
    
    //Converting props publish date to time
    let time = new Date(props.publish_date);
    let month = time.getMonth();
    let day = time.getDate();
    let year = time.getFullYear();

    return (
        <div className="review-container">
            <div className="review-profile-icon">
                {/* Profile picture icone */}
            </div>
            <div className="review-info-container">
                <h1>{props.author}</h1>
                <h2>{`${month}/${day}/${year}`}</h2>
            </div>
            <div className="review-rating-container">
                <h1>{props.rating}</h1>
                <h2>Rating</h2>
            </div>
        </div>
    )
}

export default Review;