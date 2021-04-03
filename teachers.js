let teacherBio = document.querySelectorAll('.teacher-bio');
let teacherSocials = document.querySelectorAll('.teacher-socials');
//console.log(teacherBio);
function getTeachers() {
    fetch(baseURL + '/teachers', {
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
        array.forEach(function (element, index){
            teacherBio[index].children[0].setAttribute('src', element.image);
            teacherBio[index].children[1].children[0].textContent = element.name;
            teacherBio[index].children[1].children[1].textContent = element.quote;

            //sad za ovaj fontawesome ce trebati malo rada...
            //ovo je mozda bas ruzno ali radi :) u HTMLu su svi display:none i svaki teacher ima sve moguce socials
            //console.log(element.social);
            if(element.social.facebook){
                //console.log(index, element.social.facebook);
                teacherSocials[index].children[0].setAttribute('style', 'display:list-item');
            }
            if(element.social.twitter){
                //console.log(index, element.social.twitter);
                teacherSocials[index].children[1].setAttribute('style', 'display:list-item');
            }
            if(element.social.google){
                //console.log(index, element.social.google);
                teacherSocials[index].children[2].setAttribute('style', 'display:list-item');
            }
            if(element.social.instagram){
                //console.log(index, element.social.instagram);
                teacherSocials[index].children[3].setAttribute('style', 'display:list-item');
            }
            if(element.social.envelope){
                //console.log(index, element.social.envelope);
                teacherSocials[index].children[4].setAttribute('style', 'display:list-item');
            }
            if(element.social.linkedin){
                //console.log(index, element.social.linkedin);
                teacherSocials[index].children[5].setAttribute('style', 'display:list-item');
            }
            if(element.social.behance){
                //console.log(index, element.social.behance);
                teacherSocials[index].children[6].setAttribute('style', 'display:list-item');
            }
            //mozda moze da se uprosti sa nekim arrayem i template stringovima i onda idemo for 1=fb, 2=twitter...
        });
        //console.log(array);
    })
    .catch(function (error) {
        console.log(error);
    })
}
getTeachers();