// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];

function getUpper(anyArr) {
  return anyArr.map((item)=>item[0].toUpperCase()+item.slice(1,-1)+item.at(-1).toUpperCase())
}

console.log(getUpper(arr1));
////////2.String and Array
let text = "We are MERN-Stack developers";

// 1.Replace 'MERN-Stack' with 'Front-end'.  // We are Front-end developers!
let newText = text.replace("MERN-Stack", "Front-end");
console.log(newText);

// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!
let newText1 = text.replace(/e/g, "a");
console.log(newText1);

// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!
let newText2 = text.concat(" ", "in Microsoft");
console.log(newText2);

// 4.Find index of each 'r' and collect them in a new Array called 'newArr' : //[4, 9, 26]
const newArr2 = [];
text
  .split("")
  .map((item, index) =>
    item.toLowerCase() === "r" ? newArr2.push(index) : newArr2
  );
console.log(newArr2);

// 5.Find index of first 'r'.// 4
let find = text.indexOf("r", 4);
console.log(find);

// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']
let vowels = ['a', 'i', 'o', 'u', 'e']
let newArr3=[];
for (let i = 0; i < text.length; i++) {
   if(vowels.includes(text[i]) && !newArr3.includes(text[i])){
    newArr3.push(text[i]);
   }
}
console.log(newArr3);

