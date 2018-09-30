import React, {Component} from 'react';

//Imported Packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRatingComponent from 'react-star-rating-component';

//Style Sheet
import './reviewpage.css';

//API Services
import podiumAPI from '../../api/podiumApi';

class ReviewPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            review: {}
        }
    }

    //LifeCycle Hooks
    componentDidMount(){
        this.getReviewData();
    }

    //Methods
    getReviewData = () => {
        const {id} = this.props.match.params;
        podiumAPI.getReviewByID(id)
        .then((response) => {
                this.setState({
                    review: response.data.data
                })
            }).catch((error) => {
                console.log(error);
            })
    };

    returnToPreviousPage = () => {
        this.props.history.goBack();
    }

    render(){
        //Timestamp for published date
        let time = new Date(this.state.review.publish_date);
        let month = time.getMonth();
        let day = time.getDate();
        let year = time.getFullYear();

        return (
            <div className="review-page-container">
                <div className="return-container">
                    <div className="return-arrow-container" onClick={this.returnToPreviousPage}>
                        <FontAwesomeIcon icon='arrow-left'/>
                    </div>
                    <p>Reviews</p>
                </div>

                { this.state.review.author ?
                <div className="reviewpage-review-container">
                    <div className="reviewpage-review-header">
                        <div className="review-header-info">
                            <h1>{this.state.review.author}</h1>
                            <p>{`${month}/${day}/${year}`}</p>
                        </div>
                        <div className="review-header-pic">
                            {/* User profile pic */}
                        </div>
                    </div>

                    <div className="reviewpage-rating-container">
                        <div className="review-star-rating">
                            <StarRatingComponent 
                            name="review-rating" 
                            editing={false}
                            starCount={5}
                            value={Math.round(this.state.review.rating)}
                            starColor="#0098e9"
                            />
                        </div>
                        <div className="review-rating">
                            <p>{`${this.state.review.rating}/5`}</p>
                        </div>
                    </div>
                    <div className="review-message">
                            <p>{`"${this.state.review.body}"`}</p>
                    </div>
                </div>
                :
                <div className="review-loading">
                    <span>{/* Loading Dot*/}</span>
                    <span>{/* Loading Dot*/}</span>
                    <span>{/* Loading Dot*/}</span>
                </div>
                }
            </div>
        )
    }
}

export default ReviewPage;