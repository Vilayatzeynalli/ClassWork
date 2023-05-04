 const card=document.querySelector(".row");
 let user=JSON.parse(localStorage.getItem("user"));
 let addUsers=document.querySelector(".add");


 user.forEach((element)=>{
    card.innerHTML+=`
    <div class="col col-3 d-flex justify-content-between">
    <div class="row">
        <div class="card" style="width: 18rem;">
            <div class="cardBody">
              <h5 class="cardUser">User</h5>
              <p class="card-text">${element.userName}</p>
              <p class="card-email">${element.email}</p>
              <a href="#" class="btn btn-danger">Delete</a>
            </div>
          </div>
       </div>
       </div>
 `
 });

 addUsers.addEventListener("click", function(event){
    event.preventDefault();

    window.location.href="http://127.0.0.1:5500/04.05.2023-Js.Sign%20Up/index.html"
 });
