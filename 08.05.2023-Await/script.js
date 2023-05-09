const baseUrl="http://localhost:8080/names";
const allCards=document.querySelector("#cards");
const addUser=document.querySelector(".btn");

async function fillBox() {
    const response =await fetch(baseUrl);
    const data = await response.json();
    data.forEach(element => {
        const box=document.createElement('div')
         box.classList.add('box', "col-5", "mystyle");
        box.innerHTML+=`
         <div>
        <h3>${element.firstName}</h3>
        <h5>${element.email}</h5>
        </div>
        <div id="icons">
        <i class="fa-solid fa-pen"></i>
        <i class="fa-solid fa-trash" id="${element.id}" onclick=deleteById(${element.id})></i>
        </div>`
        allCards.append(box);
    });
}
fillBox();
async function deleteById(){
    await fetch(`http://localhost:8080/names/${id}`, {
        method: "DELETE",
    });
    fillBox();
}


addUser.addEventListener('click', function(){
    window.location.href='http://127.0.0.1:5500/08.05.2023-Await/adduser.html'
});

