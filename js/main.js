import { getEndpoint } from "./requests.js";

const teachers = "https://60642520f091970017785074.mockapi.io/teachers"
const slider = "https://60642520f091970017785074.mockapi.io/slider"
const reviews = "https://60642520f091970017785074.mockapi.io/reviews"
const courses = "https://60642520f091970017785074.mockapi.io/courses"



async function getData() {
    let teacherData = await getEndpoint(teachers);
    let sliderData = getEndpoint(slider);
    let reviewsData = getEndpoint(reviews);
    let coursesData = getEndpoint(courses);

    teacherData.forEach(function (teacher) {
        $('.teacher-cards-container').append(
            `
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

}

getData();




