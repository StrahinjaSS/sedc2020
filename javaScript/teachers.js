// const baseUrl = 'https://60642520f091970017785074.mockapi.io';
function getTeachers () {

  let req = new Request(baseUrl + '/teachers', ({ method: 'GET'}));
  
  fetch(req)
  .then(res => {
    // console.log('res', res)
    if (res.ok) {
      return res.json();
    } else {
      throw 'Doslo je do greske';
    }
  })
  .then(arr => {
    renderTeachers(arr);
    var social = arr.map(object => object.social)
    console.log(social);
    console.log('resolved second promise', arr);
  })
  .catch(err => {
    console.log(err);
  })
}
getTeachers();

function renderTeachers (arr){
    arr.forEach ( teacher => {
        $('.teachers-box').append(`
        <a class="teacher" href="html/Teacher.html" id="${teacher.id}">
<div class="teacher-box"> 
     <div><img src="${teacher.image}"></div>
     <div class="teacher-box-text">
         <h2>${teacher.name}</h2>
         <p>${teacher.quote}</p>
     </div>
     <div class="teacher-box-icons">   
      <a  href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
      <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
      <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>   
     </div>
 </div>
</a>`)

})}





    