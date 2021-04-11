//  baseUrl = 'https://60642520f091970017785074.mockapi.io/';
const getSlider = () => {
    let getFrom = new Request(baseUrl + 'slider', ({
        method: 'GET',
    }))
    fetch(getFrom)
    .then(req => {
        return req.json()   
    })
    .then(arr =>{
        pictures(arr);
        
        
 })
    .catch(err =>{
        console.log(err)
    })
}
getSlider();

let pictures = arra => {
    arra.forEach((e) => {
        let photo = document.createElement('img');
        photo.className = "sliderPhotos";
        photo.setAttribute('src',`${e.image}`);
        let welcomeImage = document.querySelector('.welcome-image');
        welcomeImage.appendChild(photo); 
        let btn = document.createElement('button');
        btn.setAttribute('name','slider');
        btn.className = 'sliderBTNS';
        let sliderBtn = document.querySelector('.welcome .sliderBTN');
        sliderBtn.appendChild(btn);
    });
    sliderss();
    
}
function sliderss (){
    let slideIndex = 0;
    let sliderButtons = document.querySelectorAll('.sliderBTNS');
    let carousel = function () {
      let x = $(".sliderPhotos");
        x.each(function(){
            $(this).css('display','none');
        });
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1};
      x[slideIndex-1].style.display = "block";
      
      for(let i = 0; i < sliderButtons.length; i++){
        sliderButtons[i].className = sliderButtons[i].className.replace(' active', '');

      }
      
      sliderButtons[slideIndex-1].className += ' active';
      setTimeout(carousel, 2500);
    }
    carousel();
}

