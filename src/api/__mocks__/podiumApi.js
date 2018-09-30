const podiumAPI = {
    getReviews: () => new Promise((resolve, reject) => resolve({
        data: {
            data: [{
                "rating": 0.8,
                "publish_date": "2016-09-05T23:25:47.642350Z",
                "id": "9783221620868",
                "author": "Kaley Schiller"
            }]
        }
    })),

    getReviewByID: () => new Promise((resolve, reject) => resolve({
        data: {
            "data": {
                "rating": 3.2,
                "publish_date": "2016-09-04T23:25:47.642388Z",
                "id": "9793364045824",
                "body": "Can one desire too much of a good thing?.",
                "author": "Fay Lemke"
            }
        }
    }))
};

export default podiumAPI;


