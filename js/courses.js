const baseUrl = 'https://60642520f091970017785074.mockapi.io/';
let getCourses = () =>{
    let getFrom = new Request (baseUrl + 'courses', ({
        method: 'GET'
    }))
    fetch(getFrom)
    .then(req => {
        return req.json();
    })
    .then(to =>{
        console.log(to);
    })
    .catch(er =>{
        console.log(er);
    })
}
getCourses();