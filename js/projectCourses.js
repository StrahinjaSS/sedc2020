const baseUrl2 = 'https://60642520f091970017785074.mockapi.io';
function getCourses(){
    let req = new Request( baseUrl2 + '/courses', ({method: 'GET'}));
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
getCourses();