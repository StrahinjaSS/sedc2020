const baseUrl3 = 'https://60642520f091970017785074.mockapi.io';
function getReviews(){
    let req = new Request( baseUrl3 + '/reviews', ({method: 'GET'}));
    fetch (req)
    .then(res => {
        console.log('res', res);
        if (res.ok){
            return res.json();
        } else {
            throw 'Greska';
        }
    })
    .then(arr => {
        console.log(arr);
    })
}
getReviews();