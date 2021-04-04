function getReviews () {

    let req = new Request(baseUrl + '/reviews', ({ method: 'GET'}));
    
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
      renderReviews(arr);

      // console.log('resolved second promise', arr);
    })
    .catch(err => {
      console.log(err);
    })
  }
  getReviews();

  function renderReviews (arr){

    arr.forEach (review => {      
        const studentReviews = document.querySelector('.student-reviews');
        const studentReviewBox = document.createElement('div');
        studentReviewBox.setAttribute('class' , 'student-review-box');
        studentReviewBox.setAttribute('id' , review.id);
        const studentReviewBoxContent = document.createElement('div');
        studentReviewBoxContent.setAttribute('class' , 'student-reviews-box-content' );
        const studentReviewBoxContentImage = document.createElement('div');
        studentReviewBoxContentImage.setAttribute('class' , 'student-reviews-box-content-image');
        const studentImage = document.createElement('img');
        studentImage.setAttribute('src', review.image);
         const studentReviewsBoxContentText = document.createElement('div');
         studentReviewsBoxContentText.setAttribute('class', 'student-reviews-box-content-text')
         const studentName = document.createElement('h3');
         studentName.textContent = review.name;
         const studentPosition = document.createElement('p');
         studentPosition.textContent = review.position;
         const reviewText = document.createElement('p');
         reviewText.textContent = review.review_text;
         const studentReviewsContentStars = document.createElement('div');
         studentReviewsContentStars.setAttribute('class', 'student-reviews-content-stars');

         for (let i = 1; i<= review.rating; i++) { 
              let star = document.createElement('i');
              star.setAttribute('class', 'fas fa-star');
              studentReviewsContentStars.appendChild(star);
         }   

        studentReviews.appendChild(studentReviewBox);
        studentReviewBox.appendChild(studentReviewBoxContent);
        studentReviewBoxContent.appendChild(studentReviewBoxContentImage)
        studentReviewBoxContentImage.appendChild(studentImage);
        studentReviewBoxContent.appendChild(studentReviewsBoxContentText);
        studentReviewsBoxContentText.appendChild(studentName);
        studentReviewsBoxContentText.appendChild(studentPosition);
        studentReviewBox.appendChild(reviewText);
        studentReviewBox.appendChild(studentReviewsContentStars);
        $('#1.student-review-box').show();


        $('.student-reviews-slider a:nth-child(1)').on('click', function(){
          $('.student-reviews-slider a').removeClass()
          $(this).addClass('active')
          $('.student-review-box').hide();
          $('#1.student-review-box').show();

        })
        $('.student-reviews-slider a:nth-child(2)').on('click', function(){
          $('.student-reviews-slider a').removeClass()
          $(this).addClass('active')
          $('.student-review-box').hide();
          $('#2.student-review-box').show();
        })
        $('.student-reviews-slider a:nth-child(3)').on('click', function(){
          $('.student-reviews-slider a').removeClass()
          $(this).addClass('active')
          $('.student-review-box').hide();
          $('#3.student-review-box').show();
        })
        $('.student-reviews-slider a:nth-child(4)').on('click', function(){
          $('.student-reviews-slider a').removeClass()
          $(this).addClass('active');
          $('.student-review-box').hide();
          $('#4.student-review-box').show()
         
        })
  })
}
