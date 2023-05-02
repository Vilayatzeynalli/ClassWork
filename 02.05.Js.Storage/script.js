
// let addBtn=document.querySelector("#btn");
// let deleteBtn=document.querySelector("#delete");
// let emptyBtn=document.querySelector("#empty");


// //1.Create a button,when your click that, it adds firstnamr:"Kamran", lastname:'Akbarov", age:"23" to localeStorage.
// addBtn.addEventListener("click",function(){
//      localStorage.setItem('firstName','Kamran');
//      localStorage.setItem('lastName','Akbarov');
//      localStorage.setItem('age','23');

// });

// // 1.1.Console localStorage length.
// console.log(localStorage.length);

// /////
// //2.Console localStorage keys.
// for(i=0; i<localStorage.length; i++){
//     console.log(localStorage.key(i));
// }
// //3.Console localStorage values.
// for(i=0; i<localStorage.length; i++){
//    let values=localStorage.key(i)
//    console.log(localStorage.getItem(values));
// };
// //4.Console first key in localStorage.
// console.log(localStorage.key(0));
// //4.1.Console all keys in arr.
// let arr=[];
// for(i=0; i<localStorage.length; i++){
//     arr.push(localStorage.key(i))
// }
// console.log(arr);

// //5.Console first value in localStorage.
// let values= localStorage.key(0)
// console.log(localStorage.getItem(values))

// //5.1.Console all values in arr.
// let valueArr=[];
// for(i=0; i<localStorage.length; i++){
//     let values=localStorage.key(i)
//     valueArr.push(localStorage.getItem(values));
// }
// console.log(valueArr);

// //6.Create other two buttons first one called 'delete' when you click it, it removes firstName
// deleteBtn.addEventListener("click", function(){
//     localStorage.removeItem('firstName');
// })
// emptyBtn.addEventListener("click", function(){
//     localStorage.clear();
// })

let form=document.querySelector("#form")
let inputUserName=document.querySelector("#inputUserName");
let inputEmail=document.querySelector("#inputEmail");
let inputPassword=document.querySelector("#inputPassword");
let inputCheck=document.querySelector("#inputCheck");
let submit=document.querySelector("#submit");

let usersData = [];

submit.addEventListener("click", function(){
    if(inputUserName.value && inputEmail.value){
       let obj={
         username:inputUserName.value,
         email:inputEmail.value,
         password:inputPassword.value,
         checkbox:inputCheck.checked
        };
        usersData.push(obj)
        localStorage.setItem("usersData", JSON.stringify(usersData));
        console.log(obj);
    }
});

