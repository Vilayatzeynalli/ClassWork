// 1.Array method/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr = ['d', 7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]

// 1.1 Splice 'arr'.
// console.log(arr.slice(1,-1));//  [7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1]
// // 1.2 Show only last three values of 'arr'.
// console.log(arr.slice((arr.length - 3), arr.length)) // [ false, 1, null]
// // 1.3 Concat [true,'8','myName'] in front of the 'arr'. 
// const arr2=[true,'8','myName']
// console.log(arr2.concat(arr));//[true,'8','myName','d', 7 '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]
// // 1.4 Find second 7's index. 
// console.log(arr.indexOf(7,3))//4
// // 1.5 Filter only true value.
// // function bouncer(arr) {
// //     return arr.filter(Boolean);
// //   }
// //   console.log(bouncer(['d', 7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]));
// //
// console.log(arr.filter(Boolean));// ['d', 7, '1', '7', 7, 'c', 'a', 7, '3', 1]
// //
// // 1.6 Sum only integer values of 'arr' //22
const sumArr=arr.reduce((x,y)=>{
   
})
// // 1.7 Find falsy values' length.
// const a=arr.filter(aze=>!aze).length
// console.log(a);//4

// 2.Object vs Array///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.1 Create a function called 'findSmallest(inks)', that find out min value of obj.
// function findSmallest(item) {
//     let arr5 = Object.values(item);
//     let min = Math.min(...arr5);
//     return min;
// }
// console.log(findSmallest({
//     "cyan": 23,
//     "magenta": 12,
//     "yellow": 10
// })); // 10

// console.log(findSmallest({
//     "cyan": 432,
//     "magenta": 543,
//     "yellow": 777
// }));  // 432

// console.log(findSmallest({
//     "cyan": 700,
//     "magenta": 700,
//     "yellow": 0
// })); // 0


// 2.2 Create a function called maxNums that find out max num of each arr
// function maxNums(arr) {
//     return arr.map((el)=>Math.max(...el))
// }
// console.log(maxNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); //[7, 90, 2]
// console.log(maxNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // [-34, -2, 7]

// 2.3 Create a function called 'findLetterIndex(text,letter)', that returns the first index and the last index of a character.
function findLetterIndex(text,letter) {
    // return text.includes(letter) ?  `${text.indexOf(letter)}  ${text.lastIndexOf(letter)}`: null
    // return [text.indexOf(letter),text.lastIndexOf(letter)]
}
console.log(findLetterIndex("hello", "l")); // [2,3]
console.log(findLetterIndex("happy", "h")); //[0, 0]

// 2.4 Create a function called checkNum that takes an array of numbers arr and a number n.
//  Return true if the sum of any two elements is equal to the given number. Otherwise, return false.
// function checkNum(n, arr){
//     return arr.some((item, i) => arr.slice(i+1).includes(n-item))
//  }
//  console.log(checkNum([10, 12, 4, 7, 9, 11], 16));  //true
// console.log(checkNum([2, 8, 9, 12, 45, 78], 1)); //false
//  console.log(checkNum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //false
 
