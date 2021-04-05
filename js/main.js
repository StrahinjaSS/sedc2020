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
        
        let socialLinks = "";
        for (let link in teacher.social) {
            console.log(`${link} facebook`);
            socialLinks += `<a href="${teacher.social[link]}"><i class="fab fa-${link}"></i></a>`;
        }
        let teacherLink = teacher.name.replace(" ", "-");

        $('.teacher-cards-container').append(`
        <div class="teacher-card">
        <a class="teacher-image-link" href="pages/${teacherLink}.html"><img src="${teacher.image}" alt="Teacher image"></a>
    
        <div class="teacher-links">
    
            <div class="profile-link">
                <a href="pages/${teacherLink}.html">${teacher.name}</a>
                <p>${teacher.quote}</p>
            </div>
    
            <div class="social-links-teachers">
                ${socialLinks}
            </div>
        </div>
    </div>
        `
        );

    });

    // sliderData.forEach((slider) => {

    // });

    reviewsData.forEach((review) => {
        let rating = "";
        for (let i=0; i < review.rating; i++){
            rating += '<i class="fas fa-star"></i>'
        }

        $('.student-reviews-card-container').append(`
        <div class="student-reviews-card">
            <div class="student-card">
                <div class="student-info">
                    <img src="${review.image}" alt=""     class="student-image">
                    <div class="student-info-text">
                        <p class="student-name">${review.name}</p>
                        <p class="student-title">${review.position}</p>
                    </div>
                </div>

                <p class="student-testimonial">${review.review_text}</p>
                <div class="rating">
                    ${rating}

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




