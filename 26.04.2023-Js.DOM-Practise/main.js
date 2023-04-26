const button=document.createElement("button")
const parag=document.createElement("p")
const form=document.createElement("form")
const labelName=document.createElement("label")
const labelSurname=document.createElement("label")
const inputName=document.createElement("input")
const inputSurname=document.createElement("input")
const br2=document.createElement("br")
const inputCheck=document.createElement("input")
let radio = document.createElement("input");
const br3=document.createElement("br")
let radio2 = document.createElement("input");
const br4=document.createElement("br")
const buttonBtn=document.createElement("button")
const br5=document.createElement("br")

document.body.append(button);
document.body.append(parag);
document.body.append(form);


button.innerHTML=`Let's Start`;
const time=15;

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
inputName.setAttribute("type","text")
// inputName.setAttribute("required")
//  inputName.required = true;


const br1=document.createElement("br");
form.append(br1);


labelSurname.innerHTML="<strong>Surname</strong>";
form.append(labelSurname);
form.append(inputSurname);
inputSurname.setAttribute("type","text")
// inputSurname.setAttribute("required")



form.append(br2);
form.append(inputCheck);
inputCheck.style.width="8px";
inputCheck.style.height="9px";


form.append(br3);

form.append(radio);
radio.setAttribute("type", "radio");
radio.style.accentColor = "red";
radio.setAttribute("name", "btn");


form.append(br4);

form.append(radio2);
radio2.setAttribute("type", "radio");
radio2.style.accentColor = "red";
radio2.setAttribute("name", "btn");

form.append(br5);

form.append(buttonBtn);
buttonBtn.innerHTML="<strong>Submit</strong>"
buttonBtn.setAttribute("type", "submit");
buttonBtn.disabled = true;

btn.addEventListener("click", function () {
    buttonBtn.disabled = false;
  
    let interval = setInterval(() => {
      time -= 1;
      parag.innerHTML = `00:${time}`;
      if (time > 10) {
        parag.style.border = "1px solid blue";
      }
      if (time <= 10) {
        parag.style.color = "red";
        parag.style.border = "1px solid red";
      }
      if (time === 0) {
        parag.innerHTML = "You missed...)";
      //   clearInterval(interval);
        time = 16;
      }
    }, 1000);
    this.setAttribute("disabled", "true");
    // buttonBtn.addEventListener("click", function () {
    //   nextBtn.disabled = false;
    // });
  });
//   nextBtn.addEventListener("click", function () {
//     alert("Conguratulations");
//   });





















































