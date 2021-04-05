const baseUrl = 'https://60642520f091970017785074.mockapi.io';
function getSliders () {

  let req = new Request(baseUrl + '/slider', ({ method: 'GET'}));
  
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
    renderSliders(arr);
    startSlider(arr);
    // console.log('resolved second promise', arr);
  })
  .catch(err => {
    console.log(err);
  })
}
getSliders();

function renderSliders(arr){
    arr.forEach (slide => {
        const slider = document.createElement('img');
        slider.src = slide.image;
        slider.setAttribute('id', slide.id);
        slider.setAttribute('class', "slide");
        // s
        const sliderImage = document.querySelector('.slider-image');
        sliderImage.appendChild(slider);
        count = $(".slider-image > img").length;
    });
}
var sliderInt = 1;
var sliderNext = 2;
var count = $(".slider-image > img").length;
$(document).ready(function () {
    $(".slider-image > img#1").fadeIn(300);
    startSlider();
});
function startSlider() {
    
    loop = setInterval(function () {
        if (sliderNext > count) {
            sliderNext = 1;
            sliderInt = 1;
        }
        $(".slider-image > img").fadeOut(3000);
        $(".slider-image > img#" + sliderNext).fadeIn(3000);
        sliderInt = sliderNext;
        sliderNext = sliderNext + 1;
    }, 10000)
}
    
