let input=document.querySelector("#searchInput");
let btBtn=document.querySelector("button");
let ul=document.querySelector("#ulList");

btBtn.addEventListener("click", function(){
    let element=document.createElement("li");
    element.innerHTML=`${input.value}`;
    ul.append(element);
    input.value="";  
});