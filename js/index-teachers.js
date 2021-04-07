const baseUrl = 'https://60642520f091970017785074.mockapi.io/';

function getTeacher () {
    let req = new Request(baseUrl + '/teachers', ({ method: 'GET'}));
  
    fetch(req)
    .then(res => {
      console.log('res', res)
      if (res.ok) {
        return res.json();
      } else {
        throw 'Doslo je do greske';
      }
    })
    .then(arr => {
     // renderList(arr);
      console.log(arr);
    })
    .catch(err => {
      console.log(err);
    })
  }
  getTeacher();