let todoInput = document.querySelector("#todoInput");
let btn = document.querySelector(".btn-primary");
let listGroup = document.querySelector(".list");
let deleteBtn = document.querySelector(".btn-success");
let editBtn = document.querySelector(".btn-danger");

btn.addEventListener("input", function (e) {
  if (e.target.value) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

let arr=JSON.parse(localStorage.getItem("array")) ?? [];
btn.addEventListener("click", fun);
function fun(){
listGroup.innerHTML="";
let obj ={
    id: Date.now(),
    todoText:todoInput.value,
};
arr.push(obj);
localStorage.setItem("array",JSON.stringify(arr));
let getArr=JSON.parse(localStorage.getItem("array"));
getArr.forEach((obj) => {
    listGroup.innerHTML+=`
    <li
class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
<input type="checkbox"><p class="m-0">${todoInput.value}</p>
<div>
  <button type="button" class="btn btn-success">EDIT</button>
  <button type="button" class="btn btn-danger"onclick->DELETE</button>
</div>
</li>`;
});
}


// btn.addEventListener("click", createList);
// btn.addEventListener("click", function () {
//   btn.innerHTML = "ADD";
// });

// deleteBtn.forEach((element) => {
//   element.addEventListener("click", function () {
//     this.closest("li").remove();
//   });
// });



window.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    todoInput.value && createList();
  }
});
