//let courseElement = document.querySelectorAll('.course');
let courseTop = document.querySelectorAll('.course-top');
let courseMid = document.querySelectorAll('.course-mid');
let courseBot = document.querySelectorAll('.course-bot');
console.log(document.querySelectorAll('.course-top img'));
function getCourses() {
    fetch(baseURL + '/courses', {
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
        array.forEach(function(element, index){
            document.querySelectorAll('.course-top img')[index].setAttribute('src', element.image);
            document.querySelectorAll('.course-date')[index].children[1].textContent = ' ' + element.date;
            document.querySelectorAll('.course-date')[index].children[3].textContent = ' ' + element.duration + ' Hours';
            document.querySelectorAll('.course-mid h3')[index].textContent = element.title;
            document.querySelectorAll('.course-mid p')[index].textContent = element.description;
            document.querySelectorAll('.course-bot div img')[index].setAttribute('src', element.teacher_image);
            document.querySelectorAll('.course-bot div p')[index].textContent = element.teacher;
            if(element.price !== 0){
                document.querySelectorAll('.course-price')[index].textContent = `${element.currency} ${element.price}`;
            } else{
                document.querySelectorAll('.course-price')[index].textContent = 'Free';
                document.querySelectorAll('.course-price')[index].classList.add('free');
            }
        });
        console.log(array);
    })
    .catch(function (error) {
        console.log(error);
    })
}
getCourses();
const courseImages = document.querySelectorAll(".course");

let centerEl = 1;

courseImages[0].style.display = 'block';
courseImages[0].style.order = '0';
courseImages[1].style.display = 'block';
courseImages[1].style.order = '1';
courseImages[2].style.display = 'block';
courseImages[2].style.order = '2';

let courseLeftBtn = document.querySelector('.fa-angle-left');
let courseRightBtn = document.querySelector('.fa-angle-right');

courseRightBtn.addEventListener('click', function(){    
    if(centerEl === 3) {
        courseImages[centerEl-1].style.display = 'none';
        courseImages[centerEl-1].style.order = '';
        courseImages[centerEl].style.order--;//predjasni centar ide levo
        centerEl++; // sad je 4 centralni element, znaci poslednji u nizu
        courseImages[centerEl].style.order--;
        
        courseImages[(centerEl+1) % 5].style.display = 'block';
        courseImages[(centerEl+1) % 5].style.order = '2';
    } else if(centerEl === 4) {
        courseImages[centerEl-1].style.display = 'none';
        courseImages[centerEl-1].style.order = '';
        courseImages[centerEl].style.order--;//predjasni centar ide levo
        
        centerEl = 0; // resetujemo niz zbog errora!
        courseImages[centerEl].style.order--;

        courseImages[centerEl+1].style.display = 'block';
        courseImages[centerEl+1].style.order = '2';
    } else if(centerEl === 0) {
        courseImages[centerEl-1 + 5].style.display = 'none'; //[0] i [4] su nepovezani pa moramo ovo
        courseImages[centerEl-1 + 5].style.order = '';

        courseImages[centerEl].style.order--;//predjasni centar ide levo
        centerEl++; // sad je 4 centralni element, znaci poslednji u nizu
        courseImages[centerEl].style.order--;//predjasnji desni ide levo i postaje centar
        
        courseImages[centerEl+1].style.display = 'block';
        courseImages[centerEl+1].style.order = '2';//novi element dobija poslednju poziciju

    } else {
        courseImages[centerEl-1].style.display = 'none';
        courseImages[centerEl-1].style.order = '';
        courseImages[centerEl].style.order--;//predjasni centar ide levo
        centerEl++;
        courseImages[centerEl].style.order--;//predjasnji desni ide levo i postaje centar
        courseImages[centerEl+1].style.display = 'block';
        courseImages[centerEl+1].style.order = '2';//novi element dobija poslednju poziciju
    }
});
courseLeftBtn.addEventListener('click', function(){
    if(centerEl === 1) {
        courseImages[centerEl+1].style.display = 'none';
        courseImages[centerEl+1].style.order = '';

        courseImages[centerEl].style.order++;//predjasni centar ide desno
        
        centerEl--;
        courseImages[centerEl].style.order++;//predjasnji levi ide desno i postaje centar

        courseImages[centerEl-1 + 5].style.display = 'block';
        courseImages[centerEl-1 + 5].style.order = '0';
    } else if(centerEl === 0) {
        courseImages[centerEl+1].style.display = 'none';
        courseImages[centerEl+1].style.order = '';
        courseImages[centerEl].style.order++;//predjasni centar ide desno
        
        centerEl = 4;
        courseImages[centerEl].style.order++;//predjasnji levi ide desno i postaje centar

        courseImages[centerEl-1].style.display = 'block';
        courseImages[centerEl-1].style.order = '0';
    } else if(centerEl === 4) {
        courseImages[(centerEl+1) % 5].style.display = 'none';//[0] i [4] su nepovezani pa moramo ovo
        courseImages[(centerEl+1) % 5].style.order = '';

        courseImages[centerEl].style.order++;//predjasni centar ide desno
        
        centerEl--;
        courseImages[centerEl].style.order++;//predjasnji levi ide desno i postaje centar
        
        courseImages[centerEl-1].style.display = 'block';
        courseImages[centerEl-1].style.order = '0';//novi element dobija prvu poziciju
    } else {
        courseImages[centerEl+1].style.display = 'none';
        courseImages[centerEl+1].style.order = '';
        courseImages[centerEl].style.order++;//predjasni centar ide desno
        centerEl--;
        courseImages[centerEl].style.order++;//predjasnji levi ide desno i postaje centar
        courseImages[centerEl-1].style.display = 'block';
        courseImages[centerEl-1].style.order = '0';//novi element dobija prvu poziciju
    }
});
