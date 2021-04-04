// const baseUrl = 'https://60642520f091970017785074.mockapi.io';
function getCourses () {

  let req = new Request(baseUrl + '/courses', ({ method: 'GET'}));
  
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
    renderCourses(arr);
    // console.log('resolved second promise', arr);
  })
  .catch(err => {
    console.log(err);
  })
}
getCourses();

function renderCourses (arr){
    arr.forEach ( course => {
        $('.popular-courses-boxes').append(`<a class="popular-courses-box" id="${course.id} href="html/Course_graphic_and_web_design.html">
                        <div class="popular-courses-box-box" >
                        <div class="popular-courses-box-image">
                            <img src="${course.image}">
                            <div class="opacity"></div>
                            <div class="popular-courses-box-image-text">
                                <i class="fas fa-calendar-alt"></i>
                                <div>${course.date} </div> 
                                <i class="far fa-clock"></i>
                                <div>${course.duration}</div>
                            </div>
                        </div>
                        <div class="popular-courses-box-text">
                             <h2>${course.title}</h2>
                             <p>${course.description}</p>        
                        </div>
                        <div class="popular-courses-box-price" >
                            <div class="popular-courses-box-price-img"><img src="${course.teacher_image}"></div>
                            <div class="popular-courses-box-price-name">${course.teacher}</div>
                        
                            <div class="popular-course-price">${course.price} ${course.currency}</div>
                      
                        </div>
                    </div>
                </a>`)

                // if (course.price == 0){
                //   $('.popular-course-price').text('free')

                // }

              //   if(course.price !== 0){
              //     document.querySelectorAll('.popular-course-price').textContent = `${course.currency} ${course.price}`;
              // } else{
              //     document.querySelectorAll('.popular-course-price').textContent = 'Free';
              //     document.querySelectorAll('.popular-course-price').classList.add('free');
              // }

             
              // $('.popular-courses-boxes').find('.popular-course-price').text(`${course.price}`)
              //   if($(course.price) !== 0) {
              //     $(course.price) + $(course.currency)
              //   };
              //   else{
              //    'Free'
              //   })
           
             })}


  


// $('.next').onclick(function(){

// })