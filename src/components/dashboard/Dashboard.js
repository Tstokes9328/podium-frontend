import React, {Component} from 'react';

//Imported Packages
import axios from 'axios';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Style Sheets
import './dashboard.css';

//Components
import Review from '../review/Review';

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            reviews: [],
            edit: false
        }
    }

    //LifeCycle Hooks
    componentDidMount(){
        this.getReviews();
    }

    //Methods
        //Retrieves reviews from Podium API
        getReviews = () => {
            const accessToken = 'koOheljmQX';
            axios.get('http://shakespeare.podium.co/api/reviews', {'headers': {
            'Authorization': accessToken
            }}).then((response) => {
            let {data} = response.data;
            this.setState({reviews: data});
            }).catch((error) => {
            console.log(error);
            })
        };


    render(){
        //Map through the reviews to display as a list
            //Display the Review component with props passed to component
        const reviews = this.state.reviews.map((review, index) => {
            return (
                <Link to={`/review/${review.id}`} key={index}><Review id={review.id} author={review.author} publish_date={review.publish_date} rating={review.rating}/></Link>
            )
        });

        return (
            <div className="dashboard-container">
                <div className="dashboard-filter-container">
                    <h1>Filter reviews</h1>
                    <span>
                        {
                            this.state.edit ?
                            <FontAwesomeIcon icon="chevron-up"/>
                            :
                            <FontAwesomeIcon icon="chevron-down"/>
                        }
                    </span>
                    {/* 
                    <div className="filter-star-container">
                        <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={1.5}
                        starColor="blue"
                        emptyStarColor="#dddddd"
                        />
                    </div> */}
                </div> 

                <div className="dashboard-reviews-container">
                    {this.state.reviews ? reviews : <div>Loading..</div>}
                </div>
            </div>
        )
    }
}

export default Dashboard;