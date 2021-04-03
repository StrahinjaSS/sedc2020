const courseImages = document.querySelectorAll(".course");

let centerEl = 1;

courseImages[0].style.display = 'block';
courseImages[1].style.display = 'block';
courseImages[2].style.display = 'block';
/*setInterval(function(){
    console.log("I run every 2 seconds indefinitely");
    /*courseImages.forEach( (img, i) => {
        img.style.display = 'none';
    })

    if(i == courseImages.length) {
        i = 0;
    }

    courseImages[i].style.display = 'block';*/
    /*if(i == 0) {
        courseImages[i].style.display = 'block';
      } else if(i == courseImages.length ) {
        courseImages[i - 1].style.display = 'none';
        courseImages[0].style.display = 'block';
        i = 3;
      } else {
        courseImages[i - 1].style.display = 'none';
        courseImages[i].style.display = 'block';
      }*/
    /*0 1 2\ 3 4
      1 2 3\ 4 0
      2 3 4\ 0 1
      3 4 0\ 1 2    --  0 3 4
      4 0 1\ 2 3   ---  0 1 4            
      
      0 1 2
      4 0 1
      
      */ 

/*    if(i !== (courseImages.length * 2)){
        i++;
    } else {
        i = courseImages.length;
    }
    courseImages[(i-1) % courseImages.length].style.display = 'none';
    courseImages[(i+2) % courseImages.length].style.display = 'block';
}, 2000);*/

let courseLeftBtn = document.querySelector('.fa-angle-left');
let courseRightBtn = document.querySelector('.fa-angle-right');

courseRightBtn.addEventListener('click', function(){    
    if(centerEl === 3) {
        courseImages[centerEl-1].style.display = 'none';
        centerEl++; // sad je 4, znaci poslednji u nizu
        courseImages[(centerEl+1) % 5].style.display = 'block';
        courseImages[(centerEl+1) % 5].style.order = '4';
    } else if(centerEl === 4) {
        courseImages[centerEl-1].style.display = 'none';
        centerEl++;
        courseImages[(centerEl+1) % 5].style.display = 'block';
        courseImages[(centerEl+1) % 5].style.order = '5';
    } else if(centerEl === 5) {
        courseImages[centerEl-1].style.display = 'none';
        centerEl = 1;
        courseImages[centerEl-1].style.order = '';
        courseImages[centerEl].style.order = '';
        courseImages[centerEl+1].style.display = 'block';
    } else {
        courseImages[centerEl-1].style.display = 'none';
        centerEl++;
        courseImages[centerEl+1].style.display = 'block';
    }
});
courseLeftBtn.addEventListener('click', function(){
    if(centerEl === 1) {
        courseImages[centerEl+1].style.display = 'none';
        centerEl--;
        courseImages[(centerEl-1) + 5].style.display = 'block';
        courseImages[(centerEl-1) + 5].style.order = '2';
    } else if(centerEl === 0) {
        courseImages[centerEl+1].style.display = 'none';
        centerEl = 4
        courseImages[centerEl-1].style.display = 'block';
        courseImages[centerEl-1].style.order = '1';
    } else if(centerEl === 4) {
        //if it was from the other button, we must set orders!
        // this 4 0 1 configuration is one of the worst, but I will make a simpler less optimal slider now
        courseImages[0].style.display = 'none';
        courseImages[centerEl].style.order = '';
        courseImages[centerEl-1].style.order = '';
        centerEl--;
        courseImages[centerEl-1].style.display = 'block';
    } else {
        courseImages[centerEl+1].style.display = 'none';
        centerEl--;
        courseImages[centerEl-1].style.display = 'block';
    }
});

//trying to use keenslider, but i had a crash on my PC so I Gave up, it's a good slider though.
/*var slider = new KeenSlider('#my-keen-slider', {
    loop: true,
    created: () => {
      console.log('created')
    },
  })
*/