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
      renderTeachers(arr);
  });
}
getTeachers()
function renderTeachers(arr) { 
  arr.forEach(element => {      
  let teacherItem = document.createElement ('div');
  $(teacherItem).addClass('teachers-info');
  $('.teachers-section').append ($(teacherItem));
  
  let teacherRewiev = document.createElement ('div');
  $(teacherRewiev).addClass('teachers-rewiev');
  $(teacherItem).append($(teacherRewiev));
  
  let teacherImg = document.createElement ('div');
  $(teacherImg).addClass('teachers-img');
  $(teacherRewiev).append($(teacherImg));
  
  let teacherImgImg = document.createElement ('img');
  teacherImgImg.src = element.image;
  $(teacherImg).append($(teacherImgImg));
  
  let teacherName = document.createElement ('div');
  $(teacherName).addClass('teachers-name');
  $(teacherRewiev).append($(teacherName));
  
  let teacherNameTitle = document.createElement ('h3');
  teacherNameTitle.textContent = element.name;  
  $(teacherName).append($(teacherNameTitle));
  
 let teacherNameQuote = document.createElement ('h4');
  $(teacherNameQuote).text(element.quote);
  $(teacherName).append($(teacherNameQuote));
  
  
  let teacherIcon = document.createElement ('div');
  $(teacherIcon).addClass('teachers-icon');
  $(teacherRewiev).append($(teacherIcon));
  
  $(teacherIcon).append (
          `<div class="icon"> <i class="fab fa-twitter"></i></div>
          <div class="icon"><i class="fab fa-google"></i></div>
          <div class="icon"> <i class="fab fa-behance"></i></div>`)
    /*let teacherSocial = document.createElement('div');
    let teacherSocialImg = document.createElement('img');
    teacherSocialImg.src = el;
    teacherSocialItem.appendChild(teacherSocial);
    teacherSocial.appendChild(teacherSocialImg);*/

    /*behance: "https://www.behance.net"
    google: "https://google.com"
    twitter: "https://twitter.com"*/


});
}
