// 1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.//////////////
 let names1 = ["Adam", "Sarah", "Malcolm"] //"ASM"
 let names2 = ["Harry", "Newt", "Luna", "Cho"] //"CHLN"
 let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] //"CJMPRR"

 let names=names1.map((element)=>element[0]);
 let nam=names.join("");
 console.log(`"${nam}"`);

 let namess=names2.map((element)=>element[0]);
 let nam2=namess.join("");
 console.log(`"${nam2}"`);

 let namesss=names3.map((element)=>element[0]);
 let nam3=namesss.join("");
 console.log(`"${nam3}"`);

 // 2.Manipulate array///////////////////////////////////////////////////////
 const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male' },
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female' },
    { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male' },
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' },
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male' },
   { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female' },
]

// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
let arr2=users.filter((el)=>{
    return (el.surname[0].toLowerCase()=='r') && (el.uni==='UNEC')
})
console.log(arr2);
// 2.2.Show users whose age is eqaul to 22 and name start 'a'.
let arr3=users.filter((el)=>{
    return (el.age==='22') && (el.name[0].toLocaleLowerCase()==='a')
})
console.log(arr3);
// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').

let arr4=users.map((element)=>
element.gender==="male"
? {...element, name: `Mr ${element.name}`}
: {...element, name: `Mrs ${element.name}`}
)
console.log(arr4);

// 2.4.Sort users by age (ascending).


// 3.Shuffle array///////////
//  const letters = ['a', 'b', 'c', 'd']
//  const numbers = [1, 2, 3, 4, 5, 6, 7]
//  const newArr=[]
//  const shuffledLetters = [...letters].sort(() => Math.random() - 0.5);
//  const shuffledLetterss = [...numbers].sort(() => Math.random() - 0.5);
// console.log(newArr);

// 4.Divide 2 the price of arr5.
 const arr5 = [
     {
        product: 'Lenova',
        price: 1900,
    },
    {
        product: 'HP',
        price: 1300,
    },
     {
            product: 'Acer',
       price: 1600,
    },
 ]
 let sumArray = 0;
for (let i = 0; i < arr5.length; i++) {
  sumArray += arr5[i].price;
}
const result = sumArray/2;
console.log(result);


// 5.Create a function called 'reverseNum()' which is to bind number with its reverse.

//  let num1 = 246 //246642
//  let num2 = 102 //102201
//  let num3 = 152 //152251
//  function reverseNum(num) {
//     let reversed = parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
//     return reversed;
//   }
//   let reversedNum1 = reverseNum(num1); // 246642
//   let reversedNum2 = reverseNum(num2); // 201201
//   let reversedNum3 = reverseNum(num3); // 251251
    
 


