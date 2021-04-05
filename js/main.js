import { getEndpoint } from "./requests.js";

const teachers = "https://60642520f091970017785074.mockapi.io/teachers"
const slider = "https://60642520f091970017785074.mockapi.io/slider"
const reviews = "https://60642520f091970017785074.mockapi.io/reviews"
const courses = "https://60642520f091970017785074.mockapi.io/courses"



async function getData() {
    let teacherData = await getEndpoint(teachers);
    let sliderData = await getEndpoint(slider);
    let reviewsData = await getEndpoint(reviews);
    let coursesData = await getEndpoint(courses);

    teacherData.forEach(function (teacher) {
        $('.teacher-cards-container').append(`
        <div class="teacher-card">
        <a class="teacher-image-link" href="pages/teacher-page.html"><img src="${teacher.image}" alt="Teacher image"></a>
    
        <div class="teacher-links">
    
            <div class="profile-link">
                <a href="pages/teacher-page.html">${teacher.name}</a>
                <p>${teacher.quote}</p>
            </div>
    
            <div class="social-links-teachers">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-instagram"></i>
            </div>
        </div>
    </div>
        `
        );

    });

    // sliderData.forEach((slider) => {

    // });

    reviewsData.forEach((review) => {
        $('.student-reviews-card-container').append(`
        <div class="student-reviews-card">

        <div class="student-card">
            <div class="student-info">
                <img src="images/tst-image1.jpg" alt=""     class="student-image">
                <div class="student-info-text">
                    <p class="student-name">Jackson</p>
                    <p class="student-title">Shopify Developer</p>
                </div>
            </div>

            <p class="student-testimonial">You really do help   young creative minds to get quality education and     professional job seach assistance. I'd recommend  it    to everyone!</p>
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>

            </div>
        </div>
        </div>
        `)
    });

    coursesData.forEach((course) => {

        let price = `${course.price} ${course.currency}`;
        let priceClass = "nonfree";
        if (course.price === 0) {
            price = "Free";
            priceClass = "free";
        }

        $('.popular-courses-card-container').append(`
        <div    class="popular-courses-card">

        <div class="course-image-and-info ${''}">


            <div class="course-opacity-ribbon">
                <span class="course-date">
                    <i class="far fa-calendar-alt"></i>
                    <span>${course.date}</span>
                </span>
                <span class="course-length">
                    <i class="far fa-clock"></i>
                    <span>${course.duration} hours</span>
                </span>
            </div>    
        </div>

        <div class="course-name-description">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
        </div>
        <div class="course-teacher-price">
            <div class="course-teacher">
                <a href="#">
                    <img src="${course.teacher_image}" alt="teacher image">
                    <p>${course.teacher}</p>
                </a>
            </div>
            <a href="#">
                <div class="course-price price-${priceClass}">
                    <span>${price}</span>
                </div>
            </a>
        </div>
    </div>
        `);
    });

}

getData();




