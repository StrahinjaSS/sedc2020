//const baseUrl = 'https://60642520f091970017785074.mockapi.io';
function getTeachers() {
  let req = new Request(baseUrl + '/teachers', ({ method: 'GET' }));

  fetch(req)
  .then(resp => {
    console.log('respT', resp)
    if (resp.ok) {
      return resp.json();
    } else {
      throw 'Doslo je do greske';
    }
  })
  .then(arrT => {
    console.log('resolved second promise', arrT);
    renderTeachers(arrT);
  })
  .catch(error => {
    console.log(error);
  })
}
getTeachers();

function renderTeachers(arrT) {
    arrT.forEach(function(el, index) {
    document.querySelectorAll('.teach-data-img')[index].src = el.image;
    document.querySelectorAll('.teach-data-name')[index].textContent = el.name;
    document.querySelectorAll('.teach-quote')[index].textContent = el.quote;
    });
}

