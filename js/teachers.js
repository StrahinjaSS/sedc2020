const baseUrl = 'https://60642520f091970017785074.mockapi.io/';
const getTeachers = () => {
    let getFrom = new Request(baseUrl + 'teachers', ({
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
getTeachers()