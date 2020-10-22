let myEmail = "afshan@gmail.com";
let myPassword = "1234";

function checkEmail() {
    let value = document.querySelector("#email").value;
    let errorSpan = document.querySelector(".error");
    errorSpan.innerHTML = "";
    if (value == "") {
        errorSpan.innerHTML = "Email Address is required";
    } else if (value !== myEmail) {
        errorSpan.innerHTML = "Invalid email address";
    } else {
        window.location.href = "password.html";
    }
}
function checkPassword(){
    let value = document.querySelector("#password").value;
    let errorSpan = document.querySelector(".error");
    errorSpan.innerHTML = "";
    if (value == "") {
        errorSpan.innerHTML = "Password is required";
    } else if (value !== myPassword) {
        errorSpan.innerHTML = "Invalid Password";
    } else {
        window.location.href = "welcome.html";
    }
}
