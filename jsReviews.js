//const baseUrl = 'https://60642520f091970017785074.mockapi.io';
function getReviwes() {
  let req = new Request(baseUrl + '/reviews', ({ method: 'GET' }));

  fetch(req)
  .then(resp => {
    console.log('resp', resp)
    if (resp.ok) {
      return resp.json();
    } else {
      throw 'Doslo je do greske';
    }
  })
  .then(arrR => {
    console.log('resolved second promise', arrR);
    renderReviwes(arrR);
  })
  .catch(error => {
    console.log(error);
  })
}
getReviwes();

function renderReviwes(arrR) {
    arrR.forEach(function(el, index) {
    document.querySelectorAll('.rev-img')[index].src = el.image;
    document.querySelectorAll('.rev-name')[index].textContent = el.name;
    document.querySelectorAll('.rev-position')[index].textContent = el.position;
    document.querySelectorAll('.rev-text')[index].textContent = el.review_text;
    });
}

const carRewItems = document.querySelector('.carousel-rev-items');
const indicators = document.querySelectorAll('.reviwes-slide-icon i');

indexR = 0;


indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    indicator.classList.add('active');
    carRewItems.style.transform = 'translateX(' + (i) * -25 + '%)';  
    indexR = i;
  });
});
