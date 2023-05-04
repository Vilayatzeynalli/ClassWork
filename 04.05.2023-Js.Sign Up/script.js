let userName = document.querySelector(".inputUsername");
let email = document.querySelector(".inputEmail");
let password = document.querySelector(".inputPassword");
let checkBox = document.querySelector(".checkbox");
let submitBtn = document.querySelector(".submit");
const form = document.querySelector(".form");


userName.addEventListener("input", function () {
  input();
});
email.addEventListener("input", function () {
  input();
});
password.addEventListener("input", function () {
  input();
});
checkBox.addEventListener("input", function () {
  input();
});

function input() {
  if (userName.value && email.value && password.value && checkBox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

let user=JSON.parse(localStorage.getItem("user")) || [];

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    let object={
        userName: userName.value,
        email: email.value,
        id: Date.now(),
    };
    user.push(object);
    localStorage.setItem("user",JSON.stringify(user));

    window.location.href="http://127.0.0.1:5500/04.05.2023-Js.Sign%20Up/index2.html#"
});
