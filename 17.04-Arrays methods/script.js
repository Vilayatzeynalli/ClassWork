// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
 const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']
 function getUpper(anyArr) {
    return anyArr.map((item)=>item[0].toUpperCase()+item.slice(1,-1)+item.at(-1).toUpperCase())
    
 }
 console.log(getUpper(arr1));// console.log: ['GubA', 'MingeceviR', 'BakU', 'GazaG', 'GencE', 'ShirvaN']

// 2.String and Array
 let text = 'We are MERN-Stack developers'

// 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!
let newText = text.replace("MERN-Stack", "Front-end");
console.log(newText);
// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!
let newText1 = text.replace(/e/g, "a");
console.log(newText1);

// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!
let newText2 = text.concat(" ", "in Microsoft");
console.log(newText2);
// 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]
const newArr2 = [];
text
  .split("")
  .map((item, index) =>
    item.toLowerCase() === "r" ? newArr2.push(index) : newArr2
  );
console.log(newArr2);
// 5.Find index of first 'r'.  // 4
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

// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr2'.
const arr3 = [
    {
        region: 'Yasamal',
        area: 170,
    },

    {
        region: 'Nizami',
        area: 20,
    },

    {
        region: 'Nesimi',
        area: 10,
    },

    {
        region: 'Sebail',
        area: 30,
    },
    {
        region: 'Xetai',
        area: 30,
    },
]
const calcArea = arr => arr.reduce((acc, cur) => acc + cur.area, 0);
const arr2 = ['Yasamal', 'Nizami', 'Nesimi', 'Sebail', 'Xetai'];

const filteredArr = arr3.filter(obj => arr2.includes(obj.region) && obj.region.length === 6);

const sumArea = calcArea(filteredArr);

console.log(sumArea);//60


// 4.Sort 'arr3' ascending order.
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];
arr4.sort((a, b) => a - b);
console.log(arr4);// console.log: [0, 1, 2, 6, 8, 9, 14, 22, 23, 34, 44]


// 5.Gather all nested array in one array.
const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']];
let flatEl = arr5.flat(4);
console.log(flatEl);

// console.log: [5, 8, 9, 'hi', "don't touch me", 0, '9']


// 6.Sort array "colors" with color's length, if color's length is equal to each other sort them alphabetically.
const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']
colors.sort(function(a, b) {
    if (a.length === b.length) {
      return a.localeCompare(b);
    }
    return a.length - b.length;
  });
  console.log(colors);
  // console.log: ['red', 'blue', 'gray', 'pink', 'black', 'brown', 'green', 'white', 'violet', 'yellow']




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

