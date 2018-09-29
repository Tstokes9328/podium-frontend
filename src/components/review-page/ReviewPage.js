import React, {Component} from 'react';

//Imported Packages
import axios from 'axios';

class ReviewPage extends Component {
    constructor(){
        super()

        this.state = {
            accessToken: 'koOheljmQX'
        }
    }

    //LifeCycle Hooks
    componentDidMount(){
        this.getReviewData();
    }

    //Methods
    getReviewData = () => {
        const accessToken = this.state.accessToken;
        const {id} = this.props.match.params;
        axios.get(`http://shakespeare.podium.co/api/reviews/${id}`, {'headers': {
            'Authorization': accessToken
            }}).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    };

    render(){
        return (
            <div>Hi, ReviewPage</div>
        )
    }
}

export default ReviewPage;