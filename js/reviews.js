const baseUrl = 'https://60642520f091970017785074.mockapi.io/';
const getReviews = () => {
    let request = new Request(baseUrl + 'reviews', ({
        method: 'GET'
    }))
    fetch(request)
    .then(req =>{
        return req.json();
    })
    .then(to =>{
        console.log(to);
    })
    .catch(er =>{
        console.log(er);
    })
}
