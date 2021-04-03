let sliderImages = document.querySelectorAll('.slider-image');
let sliderText = document.querySelectorAll('.slider-text');
function getSlider() {
    fetch(baseURL + '/slider', {
        method: 'GET'
    })
    .then(function (response) {
        //console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw 'greska!';
        }
    })
    .then(function (array) {
        //sliderImage1 = [0].image;
        array.forEach(function (element, index){
            sliderImages[index].setAttribute('src', element.image);
            sliderText[index].children[0].textContent = element.title;//h1
            sliderText[index].children[1].textContent = element.description;//p
            sliderText[index].children[2].textContent = element.link_text;//button
        });
        //console.log(array);
    })
    .catch(function (error) {
        console.log(error);
    })
}
getSlider();