let form = document.createElement("form");
let startBtn = document.createElement("button");
let time = 15;
let parag = document.createElement("p");
let Name=document.createElement("label");
let inputName = document.createElement("input");
let surname = document.createElement("label");
let inputSurname = document.createElement("input");
let checkInput = document.createElement("input");
let radioInput1 = document.createElement("input");
let radioInput2 = document.createElement("input");
let submitBtn = document.createElement("button");
let nextBtn = document.createElement("button");

document.body.append(startBtn);
document.body.append(parag);
document.body.append(form);
document.body.append(nextBtn);
form.append(Name);
form.append(inputName);
form.append(surname);
form.append(inputSurname);
form.append(checkInput);
form.append(radioInput1);
form.append(radioInput2);
form.append(submitBtn);

parag.innerHTML = `00: ${time}`;
Name.innerHTML = "<strong>Name</strong>";
surname.innerHTML = "<strong>Surname</strong>";
startBtn.innerHTML = "<strong>Let's start...</strong>";
submitBtn.innerHTML = "<strong>Submit</strong>";
nextBtn.innerHTML = "<strong>Next Page ></strong>";

checkInput.type = "checkbox";
radioInput1.type = "radio";
radioInput2.type = "radio";

radioInput1.name = "radio";
radioInput2.name = "radio";

form.style.height = "80vh";
form.style.border = "2px dashed black";
form.style.display = "flex";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.flexDirection = "column";
form.style.gap = "10px";
parag.style.border = "1px solid blue";
parag.style.width = "150px";
parag.style.textAlign="center"

submitBtn.setAttribute("disabled", "");
nextBtn.setAttribute("disabled", "");
inputName.setAttribute("required", "");
inputSurname.setAttribute("required", "");
checkInput.setAttribute("required", "");
radioInput1.setAttribute("required", "");
radioInput2.setAttribute("required", "");

let interval;
startBtn.addEventListener("click", function () {
    interval = setInterval(() => {
        time--;
        parag.innerHTML = `00: ${time}`;
        if(time==0){
            clearInterval(interval);
            parag.innerHTML="<strong>Your Missed</strong>";
        }
    }, 1000);
    startBtn.setAttribute("disabled", "");
    submitBtn.removeAttribute("disabled", "");
    content.style.border = "2px solid blue";
    content.style.color = "red";
   
});

submitBtn.addEventListener("click", function () {
    nextBtn.removeAttribute("disabled", "");
    // submitBtn.setAttribute("disabled", "");
    clearInterval(interval)
});
nextBtn.addEventListener("click",function(){
    alert("finished")
})








