const baseUrl = 'https://60642520f091970017785074.mockapi.io/';
const getReviews = () => {
    let request = new Request(baseUrl + 'reviews', ({
        method: 'GET'
    }))
    fetch(request)
    .then(req =>{
        return req.json();
    })
    .then(to =>{
        console.log(to);
        rende(to)
        // comment()
    })
    .catch(er =>{
        console.log(er);
    })
}
getReviews()

// export { getReviews };
let rende = arra =>{
    const conteiner = document.querySelector('menu .students .students-menu .students-personal-menu');
    const btns = document.querySelector('menu .students .students-menu .students-button');
    arra.forEach((e, i)=> {
        let studentsPersonalBlogs = document.createElement('div');//prvi kontejner
        studentsPersonalBlogs.className = 'students-personal-blogs';
        
        let studentsPersonalBlogsHeading = document.createElement('div');//drugi kontejner slika i ime
        studentsPersonalBlogsHeading.className = 'students-personal-blogs-heading';
        let studentsPersonalBlogsHeadingImage = document.createElement('div');//drugi kontejner samo slika
        studentsPersonalBlogsHeadingImage.className = 'students-personal-blogs-heading-image';
        let slika = document.createElement('img');//slika
        slika.setAttribute('src', `${e.image}`);
        studentsPersonalBlogsHeadingImage.appendChild(slika);//ubacena slika u svoj div
        studentsPersonalBlogsHeading.appendChild(studentsPersonalBlogsHeadingImage);//ubacena div sa slikom
        let studentsPersonalBlogsHeadingText = document.createElement('div');//drugi kontejner samo ime
        studentsPersonalBlogsHeadingText.className = 'students-personal-blogs-heading-text';
        let name = document.createElement('h2');
        name.textContent = `${e.name}`;
        let position = document.createElement('p');
        position.textContent = `${e.position}`;
        studentsPersonalBlogsHeadingText.appendChild(name);// ubaceno ime i zanimanje u svoj div
        studentsPersonalBlogsHeadingText.appendChild(position);
        studentsPersonalBlogsHeading.appendChild(studentsPersonalBlogsHeadingText);//ubacen div sa ime i zanimanje
        studentsPersonalBlogs.appendChild(studentsPersonalBlogsHeading)
        
        let studentsPersonalComments = document.createElement('div');//treci kontejner
        studentsPersonalComments.className = 'students-personal-comments';
        let tekst = document.createElement('p');
        tekst.textContent = `${e.review_text}`;
        studentsPersonalComments.appendChild(tekst);
        studentsPersonalBlogs.appendChild(studentsPersonalComments);

        let stars = document.createElement('div');
        stars.className = 'stars';
        for(let i = 0; i < e.rating; i++){
            let starsI = document.createElement('i');
            starsI.className = 'fas fa-star';
            stars.appendChild(starsI);
        }
        studentsPersonalBlogs.appendChild(stars);
        conteiner.appendChild(studentsPersonalBlogs);
        
        let inputRAdio = document.createElement('button');
        inputRAdio.className = 'dots'
        btns.appendChild(inputRAdio);
        let proba = document.querySelector('menu .students .students-menu .students-personal-menu .students-personal-blogs');
        proba.style.display = 'block';
        inputRAdio.addEventListener('mouseover', function(){
            let show = document.querySelectorAll('menu .students .students-menu .students-personal-menu .students-personal-blogs');
            for(let j = 0; j < show.length; j++){
                show[j].style.display = 'none'
            }
            show[i].style.display = 'block';
        }) 
        
    });
}

