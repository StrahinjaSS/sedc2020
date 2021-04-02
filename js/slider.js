const baseUrl = 'https://60642520f091970017785074.mockapi.io/';

const getSlider = () => {
    let getFrom = new Request(baseUrl + 'slider', ({
        method: 'GET',
    }))
    fetch(getFrom)
    .then(req => {
        return req.json()
    })
    .then(arr =>{
        console.log(arr)
    })
    .catch(err =>{
        console.log(err)
    })
}
getSlider();
