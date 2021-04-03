let studentReviewElement = document.querySelectorAll('.student-element');
console.log(studentReviewElement);
function getReviews() {
    fetch(baseURL + '/reviews', {
        method: 'GET'
    })
    .then(function (response) {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw 'greska!';
        }
    })
    .then(function (array) {
        array.forEach(function (element, index){
            console.log(studentReviewElement[index].children[0].children[1].children[0]);
            studentReviewElement[index].children[0].children[0].children[0].setAttribute('src', element.image);
            studentReviewElement[index].children[0].children[1].children[0].textContent = element.name;
            studentReviewElement[index].children[0].children[1].children[1].textContent = element.position;
            studentReviewElement[index].children[1].textContent = element.review_text;
            
            let oneStarString = '<i class="fas fa-star"></i>\n';
            let totalStars = '';
            for(star=1; star<=element.rating; star++){
                totalStars = totalStars + oneStarString;
            }
            studentReviewElement[index].children[2].innerHTML = totalStars;
        });
        console.log(array);
    })
    .catch(function (error) {
        console.log(error);
    })
}
getReviews();
