// let url = "https://reqres.in/api/login";

// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         email: "eve.holt@reqres.in",
//         password: "cityslicka"
//     })
// }).then(res => res.json()).then(data => {
//     if(data.token) localStorage.setItem("token", JSON.stringify(data.token))
// })

// let token = JSON.parse(localStorage.getItem("token"))
// console.log(token);

let elInputEmail = document.querySelector(".input-email");
let elInputPassword = document.querySelector(".input-password");
let elButtonForm = document.querySelector(".form-submit")

let API_URL = "https://reqres.in/api/register";


elButtonForm.addEventListener("click", () => {
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: elInputEmail.value.trim(),
            password: elInputPassword.value.trim(),
        })
    }).then(res => res.json())
    .then(data => {
        if(data.token){
            localStorage.setItem("register", JSON.stringify(data.token));
            document.location.replace("./login.html")
        }
    })
})

let token = JSON.parse(localStorage.getItem("register"));
