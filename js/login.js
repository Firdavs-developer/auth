let elInputEmail = document.querySelector(".input-email");
let elInputPassword = document.querySelector(".input-password");
let elButtonForm = document.querySelector(".form-submit")

let API_URL = "https://reqres.in/api/login";


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
            localStorage.setItem("login", JSON.stringify(data.token));
            document.location.replace("./users.html")
        }
    })
})

let token = JSON.parse(localStorage.getItem("login"));