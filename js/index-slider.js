const baseUrl = 'https://60642520f091970017785074.mockapi.io';

function getSlider () {
    let req = new Request(baseUrl + '/slider', ({ method: 'GET'}));
  
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
      render(arr);
      console.log(arr);
    })
    .catch(err => {
      console.log(err);
    })
  }
  getSlider();

  // function render(arr){
  //   let sliderCont = document.getElementsByClassName('slider');
  //   let cont = '';
  //   arr.forEach(function (el) {

  //     cont += '<div class="slider-img">';
  //     cont += '<img' + el.image + '>';
  //     cont += '<div class="text-on-slider-mobile">';
  //     cont += '<h1 class="slider-heading">'+ el.title + '</h1>';
  //     cont += '<p class="slider-text">' + el.description + '</p>';
  //     cont += '<button class="slider-button">' + '<b>' + 
  //             el.link_text + '</b>' + '</button>';
  //     cont +='</div>';
  //     cont += '<div class="text-on-slider-other-devices">';
  //     cont += '<h1 class="slider-heading">'+ el.title + '</h1>';
  //     cont += '<p class="slider-text">' + el.description + '</p>';
  //     cont += '<button class="slider-button">' + '<b>' + 
  //             el.link_text + '</b>' + '</button>';
  //     cont +='</div>';
  //     cont += '</div>';

  //     sliderCont.appendChild(cont);
  //   })
    
  //   carousel();
  // }
  

  function render(arr){
    arr.forEach(function (el) {
      let slider = document.querySelector('.slider');
      let sliderImg= document.createElement('div');
      sliderImg.classList.add('slider-img');
      let cauroselImages = document.createElement('img');
      cauroselImages.classList.add('cauroselImg')
      cauroselImages.src = el.image;
      let text = document.createElement('div');
      text.classList.add('text-on-slider');
      let heading = document.createElement('h1');
      heading.textContent = el.title;
      let textOnPic = document.createElement('p');
      textOnPic.textContent = el.description;
      let btn = document.createElement('button');
      btn.classList.add('slider-button');
      let textInBtn = document.createElement('b');
      textInBtn.textContent = el.link_text;
       
      slider.appendChild(sliderImg);
      sliderImg.appendChild(cauroselImages);
      slider.appendChild(text);
      text.appendChild(heading);
      text.appendChild(textOnPic);
      text.appendChild(btn);
      btn.appendChild(textInBtn);
    });
  };


  $(function carousel(){
    let slides = $('.slider-img');
    let slideCount = 0;
    let totalSlides = slides.length;
    let slideCarousel = [];


  (function preloader(){
      if (slideCount < totalSlides){
        slideCarousel[slideCount] = new Image();
        slideCarousel[slideCount].src = slides.eq(slideCount).find('img').attr('src');
        slideCarousel[slideCount].onload = function (){
          slideCount++;
          preloader();
        }
      } else {
        slideCount = 0;
        slideShow();
      }
    }());

    setInterval(function slideShow(){
      slides.eq(slideCount).fadeIn(3000).fadeOut(3000, function(){
        slideCount < totalSlides - 1 ? slideCount ++ : slideCount = 0;
        slideShow();
      });
    }, 5000);
  });

  // function carousel(){
   
  //     let images_array = [
  //       'images/slider-image1.jpg',
  //       'images/slider-image2.jpg',
  //       'images/slider-image3.jpg',
  //     ]
      
  //     let pic = $('.slider-img');

  //     let i = 0;
  //     setInterval(function(){
  //       i = (i + 1) % images_array.length;
  //       $(document).ready(function(){
  //         $(pic).fadeOut (5000, () => {
  //         $(pic).attr("src", images_array[i]);
  //         $(pic).fadeIn (5000);
  //         });
  //       });
  //     }, 5000);
  //   };
