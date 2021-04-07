//const baseUrl = 'https://60642520f091970017785074.mockapi.io/';

function getReviews () {
    let req = new Request(baseUrl + '/reviews', ({ method: 'GET'}));
  
    fetch(req)
    .then(res => {
      console.log('res', res)
      if (res.ok) {
        return res.json();
      } else {
        throw 'Doslo je do greske';
      }
    })
    .then(arrReview => {
      renderReview(arrReview);
      console.log(arrReview);
    })
    .catch(err => {
      console.log(err);
    })
  }
  getReviews();

  function renderReview (arrReview){
    arrReview.forEach(function(element){
      let studentReviews = document.querySelector('.student-reviews');
      let reviewCards = document.querySelector('.review-cards');
      let reviewCard = document.createElement('div');
      reviewCard.classList.add('review-card');
      let reviewImgInfo = document.createElement('div');
      reviewImgInfo.classList.add('review-img-info');
      let imgImage = document.createElement('img');
      imgImage.src = element.image;
      let reviewAbout = document.createElement('div');
      reviewAbout.classList.add('review-card-about');
      let studentsName = document.createElement('p');
      let b = document.createElement('b');
      b.textContent = element.name;
      let studentsPosition = document.createElement('p');
      studentsPosition.textContent = element.position;
      let review = document.createElement('div');
      review.classList.add('review');
      let reviewText = document.createElement('p');
      reviewText.textContent = element.review_text;
      let starsRate = document.createElement('div');
      starsRate.classList.add('stars-rate');
      starsRate.textContent = element.rating;
      let courseCircles = document.createElement('div');
      courseCircles.classList.add('course-circles');
      let circleLeft = document.createElement('div');
      circleLeft.setAttribute('id', 'circleLeft');
      let circleRight = document.createElement('div');
      circleRight.setAttribute('id', 'circleRight');     

      reviewCards.appendChild(reviewCard);
      reviewCard.appendChild(reviewImgInfo);
      reviewImgInfo.appendChild(imgImage);
      reviewImgInfo.appendChild(reviewAbout);
      reviewAbout.appendChild(studentsName);
      studentsName.appendChild(b);
      reviewAbout.appendChild(studentsPosition);
      reviewCard.appendChild(review);
      review.appendChild(reviewText);
      reviewCard.appendChild(starsRate);
      studentReviews.appendChild(courseCircles);
      courseCircles.appendChild(circleLeft);
      courseCircles.appendChild(circleRight);

    })
  }

  // reviewImgInfo = imgs
  // leftBtn = circleLeft
  // rightBtn = circleRight
  let problem = document.querySelectorAll('.review-img-info img')
  console.log(problem)

  let index = 0;
  let interval = setInterval (run, 2000);

  function run(){
    index++;
    changeImg();
  }

  function changeImg(){
    if(index > problem.length - 1){
      index = 0;
    } else if ( index < 0){
      index = problem.length - 1;
    }

    problem.style.transform = `translateX(${-index * 500}px)`;
  }
  // let counter = 1;
  // setInterval(function(){
  //   document.getElementById('circle' + counter).checked = true;
  //   counter++;
  //   if (counter > 4){
  //     counter = 1;
  //   }
  // }, 5000);