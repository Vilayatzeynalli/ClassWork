const button=document.createElement("button")
const parag=document.createElement("p")
const form=document.createElement("form")
const labelName=document.createElement("label")
const labelSurname=document.createElement("label")
const inputName=document.createElement("input")
const inputSurname=document.createElement("input")
let checkBox = document.createElement("input");
let radio = document.createElement("input");
let radio2 = document.createElement("input");
const buttonBtn=document.createElement("button")
const nextPage=document.createElement("button")

document.body.append(button);
document.body.append(parag);
document.body.append(form);


button.innerHTML=`Let's Start`;
let time=15;

parag.innerHTML=`00:${time}`;
parag.style.border = "1px solid blue";
parag.style.width = "60px";
parag.style.height = "20px";
parag.style.color = "blue";
parag.style.textAlign = "center";

form.style.height="90vh";
form.style.display="flex";
form.style.justifyContent="center";
form.style.alignItems="center";
form.style.border="1px dashed #000";
form.style.margin="20px 0";
form.style.flexDirection="column"

labelName.innerHTML="<strong>Name</strong>";
form.append(labelName);
form.append(inputName);
inputName.setAttribute("type", "text");
inputName.setAttribute("requiered", "");
inputName.required = true;

const br1=document.createElement("br");
form.append(br1);


labelSurname.innerHTML="<strong>Surname</strong>";
form.append(labelSurname);
form.append(inputSurname);
inputSurname.setAttribute("type", "text");
inputSurname.setAttribute("requiered", "");
inputSurname.required = true;


const br2=document.createElement("br")
form.append(br2);


form.append(checkBox);
checkBox.setAttribute("type", "checkbox");

const br3=document.createElement("br")
form.append(br3);

form.append(radio);
radio.setAttribute("type", "radio");
radio.style.accentColor = "red";
radio.setAttribute("name", "btn");

const br4=document.createElement("br")
form.append(br4);

form.append(radio2);
radio2.setAttribute("type", "radio");
radio2.style.accentColor = "red";
radio2.setAttribute("name", "btn");

const br5=document.createElement("br")
form.append(br5);

form.append(buttonBtn);
buttonBtn.innerHTML="<strong>Submit</strong>"
buttonBtn.setAttribute("type", "submit");
// buttonBtn.disabled = true;

body.append(nextPage);
nextPage.innerHTML="Next Page>"

let count=time
let interval
button.addEventListener("click",function(){
    interval=setInterval(()=>{
        count--
        parag.innerHTML=`00: ${count}`
    },1000)
    button.setAttribute("disabled", "");
    buttonBtn.removeAttribute("disabled", "");
})
