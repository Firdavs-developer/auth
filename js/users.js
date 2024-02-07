let elTableBody = document.querySelector(".table-body");
let elTemplate = document.querySelector(".template").content;
let elFragment =  new DocumentFragment();

let API_URL_USERS = "https://reqres.in/api/users";


fetch(API_URL_USERS).then(res => res.json())
.then(res => res.data.forEach(user => {
    let elTemplateClone = elTemplate.cloneNode(true);
    elTemplateClone.querySelector(".th-num").textContent = user.id;
    elTemplateClone.querySelector(".th-img").src = user.avatar;
    elTemplateClone.querySelector(".th-firstName").textContent = user.first_name;
    elTemplateClone.querySelector(".th-lastName").textContent = user.last_name;
    elTemplateClone.querySelector(".th-email").textContent = user.email;  

    elTemplateClone.querySelector(".th-email").dataset.userId = user.id;

    elFragment.appendChild(elTemplateClone);    
    elTableBody.appendChild(elFragment);
}))


    elTableBody.addEventListener("click", (evt) => {
        // console.log(evt.target.dataset.userId);

        let usersId = evt.target.dataset.userId;

        if(evt.target.matches(".th-email")){
            let USER_URL = `https://reqres.in/api/users/${usersId}`;
            console.log(USER_URL);
            // window.location.replace("./userDetail.html")
            
            fetch(USER_URL).then(res => res.json())
            .then(user => console.log(user.data))
        }       
    })




