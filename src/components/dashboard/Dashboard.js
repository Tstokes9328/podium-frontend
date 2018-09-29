import React, {Component} from 'react';

//Imported Packages
import axios from 'axios';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRatingComponent from 'react-star-rating-component';

//Style Sheets
import './dashboard.css';

//Components
import Review from '../review/Review';

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            reviews: [],
            accessToken: 'koOheljmQX',
            edit: false,
            rating: 1
        }
    }

    //LifeCycle Hooks
    componentDidMount(){
        this.getReviews();
    }

    //Methods
        //Retrieves reviews from Podium API
        getReviews = () => {
            const accessToken = this.state.accessToken;
            axios.get('http://shakespeare.podium.co/api/reviews', {'headers': {
            'Authorization': accessToken
            }}).then((response) => {
            let {data} = response.data;
            this.setState({reviews: data});
            }).catch((error) => {
            console.log(error);
            })
        };

        //Display filter settings
        handleEditChange = () => {
            this.setState({
                edit: !this.state.edit
            });
        };

        //Rating Filter method that fires when star is clicked
        onStarClick = (nextValue) => {
            this.setState({rating: nextValue});
            const accessToken = this.state.accessToken;
            axios.get('http://shakespeare.podium.co/api/reviews', {'headers': {
            'Authorization': accessToken
            }}).then((response) => {
                let filteredResults = response.data.data.filter((review) => {
                    return review.rating >= nextValue && review.rating < nextValue + 1;
                });
                this.setState({reviews: filteredResults});
            }).catch((error) => {
            console.log(error);
            })
        };

        


    render(){
        //Map through the reviews to display as a list
            //Display the Review component with props passed to component
        let reviews = this.state.reviews.map((review, index) => {
            return (
                <Link to={`/review/${review.id}`} key={index}><Review id={review.id} author={review.author} publish_date={review.publish_date} rating={review.rating}/></Link>
            )
        });

        return (
            <div className="dashboard-container">
                <div className="dashboard-filter-container">
                    <h1>Filter reviews</h1>
                    <span onClick={this.handleEditChange}>
                        {
                            this.state.edit ?
                            <FontAwesomeIcon icon="chevron-up"/>
                            :
                            <FontAwesomeIcon icon="chevron-down"/>
                        }
                    </span>
                </div>
                
                {
                    this.state.edit ?
                    <div className="dashboard-filter-open-container">
                        <h1>Rating:</h1>
                        <div>
                        <StarRatingComponent 
                            name="rating" 
                            starCount={5}
                            value={this.state.rating}
                            starColor="#0098e9"
                            onStarClick={this.onStarClick}
                        />
                        </div>
                    </div>
                    :
                    <div></div>
                }

                <div className="dashboard-reviews-container">
                    {this.state.reviews ? reviews : <div>Loading..</div>}
                </div>
            </div>
        )
    }
}

export default Dashboard;