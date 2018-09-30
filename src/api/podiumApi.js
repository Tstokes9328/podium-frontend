import axios from 'axios';

const accessToken = 'koOheljmQX';
axios.defaults.headers.common['Authorization'] = accessToken;

//Podium API Services
const podiumAPI = {
    getReviews: () => {
        return axios.get('http://shakespeare.podium.co/api/reviews')
    },

    getReviewByID: (id) => {
        return axios.get(`http://shakespeare.podium.co/api/reviews/${id}`)
    }
};


export default podiumAPI;