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
  
      
`<div class="container">
 <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="item active w-100">
      <img src="${arr[0].image}" alt="${arr[0].title}" style="width:100%;">
    </div>

    <div class="item">
      <img src="${arr[1].image}" alt="${arr[1].title}" style="width:100%;">
    </div>
  
    <div class="item">
      <img src="${arr[2].image}" alt="${arr[2].title}" style="width:100%;">
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
</div>
      
      
`)}
        
