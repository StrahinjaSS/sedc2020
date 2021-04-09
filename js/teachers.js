baseUrl = 'https://60642520f091970017785074.mockapi.io/';
const getTeachers = () => {
    let getFrom = new Request(baseUrl + 'teachers', ({
        method: 'GET',
    }))
    fetch(getFrom)
    .then(req => {
        return req.json()
    })
    .then(arr =>{
        console.log(arr);
        render(arr);
        buton();
        // display();
        // const container = document.querySelectorAll('menu .teachers .teachers-menu .teachers-blog .teachers-blog-container');
        // const one = container[0].style.display
        // console.log(one);
    })
    .catch(err =>{
        console.log(err)
    })
}
getTeachers()


function render (array){
    let photoContainer = document.querySelector('menu .teachers .teachers-menu .teachers-blog');
    for(let i = 0; i < array.length; i++){
        let teachersBlogContainer = document.createElement('div');
        teachersBlogContainer.className = 'teachers-blog-container';//kontejner prvi
        
        let teachersBlogImage = document.createElement('div');
        teachersBlogImage.className = 'teachers-blog-image';//kontejner drugi
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        let photo = document.createElement('img');
        photo.setAttribute('src', `${array[i].image}`);
        link.appendChild(photo);
        teachersBlogImage.appendChild(link);
        teachersBlogContainer.appendChild(teachersBlogImage);
        photoContainer.appendChild(teachersBlogContainer);
        
        let teachersBlogPersonal = document.createElement('div')//kontejner treci
        teachersBlogPersonal.className = ('teachers-blog-personal');
        let name = document.createElement('h3');
        name.textContent = `${array[i].name}`;
        let quote = document.createElement('p');
        quote.textContent = `${array[i].quote}`;
        teachersBlogPersonal.appendChild(name);
        teachersBlogPersonal.appendChild(quote);
        teachersBlogContainer.appendChild(teachersBlogPersonal);
        photoContainer.appendChild(teachersBlogContainer);
        
        let teachersBlogNetworks = document.createElement('div');//kontejner cetvrti
        teachersBlogNetworks.className = "teachers-blog-networks";
        if(array[i].social.facebook){
            let i = document.createElement('i');
            i.className = 'fab fa-facebook-square';
            teachersBlogNetworks.appendChild(i);
        }
        if(array[i].social.instagram){
            let i = document.createElement('i');
            i.className = 'fab fa-instagram';
            teachersBlogNetworks.appendChild(i);
        }
        if(array[i].social.twitter){
            let i = document.createElement('i');
            i.className = 'fab fa-twitter';
            teachersBlogNetworks.appendChild(i);
        }
        if(array[i].social.linkedin){
            let i = document.createElement('i');
            i.className = 'fab fa-linkedin-in';
            teachersBlogNetworks.appendChild(i);
        }
        if(array[i].social.google){
            let i = document.createElement('i');
            i.className = 'fab fa-google';
            teachersBlogNetworks.appendChild(i);
        }
        if(array[i].social.behance){
            let i = document.createElement('i');
            i.className = 'fab fa-behance';
            teachersBlogNetworks.appendChild(i);
        }
        teachersBlogContainer.appendChild(teachersBlogNetworks);
        photoContainer.appendChild(teachersBlogContainer); 
    }
}
// function display(){   
//     let arr = document.querySelectorAll('menu .teachers .teachers-menu .teachers-blog .teachers-blog-container');
//     let brojac = 0; 
//     let slider = () => {
//         if(brojac > 0 && brojac < arr.length){
//         arr[brojac - 1].style.display = 'none';
//         arr[brojac].style.display = 'block';
//         brojac++
//         }
//         if(brojac == 0){
//             arr[brojac].style.display = 'block';
//             arr[arr.length - 1].style.display = 'none';
//             brojac ++;
//         }
//         if(brojac == arr.length){
//             brojac = 0;
//         }
//     }
//     setInterval(slider, 1500);
// }

    
function buton(){
    let arr = document.querySelectorAll('menu .teachers .teachers-menu .teachers-blog .teachers-blog-container');
    let br = 0;
    arr[br].style.display = 'block';
    let minus = () => {
        if(br > 0 && br < arr.length){
            arr[br].style.display = 'none';
            arr[br - 1].style.display = 'block';
            br--;
        }else if(br == 0){
            arr[br].style.display = 'none';
            arr[arr.length - 1].style.display = 'block'
            br = arr.length -1; 
        }   
    }
    let plus = () =>{
        if(br == arr.length - 1){
            arr[br].style.display = 'none';
            br = 0;
            arr[br].style.display = ' block';
        }else if(br < arr.length){
            arr[br].style.display = 'none';
            arr[br + 1].style.display = 'block';
            br++
        }  
    }
    const left = document.querySelector('#left');
    left.addEventListener('click', function(){
        minus();
    });
    const right = document.querySelector('#right');
    right.addEventListener('click', function(){
        plus();
    });
}
        
        
            
            
       
        
        
        
        
        
        
        
        // br = br - 1;
        // if(br < 0){
        //     arr[0].style.display = 'none';
        //     arr[arr.length - 1].style.display = 'block';
        //     br--;
        // }
        
        // if(br == arr.length ){
        //     br = 0;
        // }
        // arr[br + 1].style.display = 'none';
        // arr[br].stile.display = 'block';
