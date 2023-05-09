const firstName=document.querySelector("#inputName");
const email=document.querySelector("#inputEmail");
const submit=document.querySelector("#submitBtn");
const formUser=document.querySelector("form");

// firstName.addEventListener("input", function () {
//     input();
//   });
//   email.addEventListener("input", function () {
//     input();
//   });

formUser.addEventListener("submit",function(event){
    event.preventDefault();
    if(firstName.value && email.value){
        const addUser = async (elem) => {
            await fetch(`http://localhost:3000/cards`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                firstName:firstName.value,
                email:email.value,
                // id:Date.now()
              }),
            });
          };
          addUser()
    }
});

submit.addEventListener('click', function(){
    window.location.href='http://127.0.0.1:5500/08.05.2023-Await/card.html'
})

