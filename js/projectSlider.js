const baseUrl = 'https://60642520f091970017785074.mockapi.io';


function getSlider(){
    let req = new Request( baseUrl + '/slider', ({method: 'GET'}));
    fetch (req)
    .then(res => {
        console.log('res', res);
        if (res.ok){
            return res.json();
        } else {
            throw 'Greska';
        }
    })
    .then(arr => {
        console.log(arr);
        renderSlider(arr);
    })
}
getSlider();
function renderSlider(arr) {
  $('.slider').append(
  
      
`<div class="container w-100 ">
 <div id="myCarousel" class="carousel slide w-100" data-ride="carousel">
  <div class="carousel-inner w-100">
    <div class="item active w-100">
      <img src="${arr[0].image}" alt="" style="width:100%;">
      <div class="carousel-caption">
      <h3>${arr[0].title}</h3>
      <p>${arr[0].description}</p>
    </div>
    </div>

    <div class="item w-100">
      <img src="${arr[1].image}" alt="" style="width:100%;">
      <div class="carousel-caption">
      <h3>${arr[1].title}</h3>
      <p>${arr[1].description}</p>
    </div>
    </div>
  
    <div class="item w-100">
      <img src="${arr[2].image}" alt="" style="width:100%;">
      <div class="carousel-caption">
      <h3>${arr[2].title}</h3>
      <p>${arr[2].description}</p>
      </div>
    </div>
  </div>


  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>`)}
        
