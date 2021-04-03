const baseUrl1 = 'https://60642520f091970017785074.mockapi.io';
function getTeachers(){
    let req = new Request( baseUrl1 + '/teachers', ({method: 'GET'}));
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
getTeachers();