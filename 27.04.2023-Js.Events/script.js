let name=document.querySelector("#inputName");
let surname=document.querySelector("#inputSurname");
let email=document.querySelector("#inputemail");
let password = document.querySelector("#inputPassword");
let check=document.querySelector("#inputCheck");
let text=document.querySelector("#txt")
let radio=document.querySelectorAll("input[name='radio']");
let submit=document.querySelector("#inputSubmit")
// inputSubmit.disabled=true;


inputName.addEventListener("focus", function () {
    this.style.backgroundColor = "green";
  });
inputName.addEventListener("mouseout", function () {
    this.style.backgroundColor = "transparent";
  });
  inputSurname.addEventListener("focus", function () {
    this.style.backgroundColor = "red";
  });
  inputSurname.addEventListener("mouseout", function () {
    this.style.backgroundColor = "transparent";
  });
  inputemail.addEventListener("contextmenu", function(){
    this.style.backgroundColor="blue"
  })
  inputemail.addEventListener("blur", function(){
    this.style.backgroundColor="white"
  })
  inputPassword.addEventListener("focus", function(){
    inputPassword.value="zeynalli0801"
  })
  inputPassword.addEventListener("blur", function(){
    inputPassword.value=" ";
  })
 
  inputCheck.addEventListener("blur", function(){
   text.style.display="none";
  })
  inputCheck.addEventListener("focus", function(){
    text.style.display="block";
  })
  