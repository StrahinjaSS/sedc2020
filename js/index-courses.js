const baseUrl = 'https://60642520f091970017785074.mockapi.io';

function getCourses () {
    let req = new Request(baseUrl + '/courses', ({ method: 'GET'}));
  
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
      carousel();
      console.log(arr);
    })
    .catch(err => {
      console.log(err);
    })
  }
  getCourses();

  let slidePosition = 0;
  let slides = document.querySelector('.course-card-PC');
  let totalSlides = slides.length;

  let next = document.querySelector('#right-arrow');
  let previous = document.querySelector('#left-arrow');

  next.addEventListener('click', function(){
    nextSlide();
  });

  previous.addEventListener('click', function(){
    prevSlide();
  });

  function carousel(){
    for(let slide of slides) {
      slide.classList.remove('first-in-caurosel');
      slide.classList.add('another-in-caurosel');
    }
    slides[slidePosition].classList.add('first-in-caurosel');
  }

function nextSlide(){
  if (slidePosition === totalSLides - 1){
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  carousel();
}

function prevSlide(){
  if(slidePosition === 0){
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  carousel();
}
