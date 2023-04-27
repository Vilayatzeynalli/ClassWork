
/////// 1.Filter out Strings from an Array///////////////////////////////////////////////////
// Create a function called 'filterArray(arr)' that takes an array of non-negative integers and strings and return
//  a new array without the strings.
function filterArray(arr) {
    return arr.filter(el => typeof el === "number");
  }
  console.log(filterArray([1, 'c', 2, "a", "b"]));// [1, 2]
  console.log(filterArray(['4', 1, "a", "b", 0, 15]));//[1, 0, 15]

//rigth, but another way 

///////2.Summing a Slice////////////////////////////////////////////////////////////////////
// Create a function called 'sliceSum(arr, n)' that has an array and an integer n, return the sum of the first n numbers in the array.
function sliceSum(arr3,n) {
    return arr3.slice(0,n).reduce((sum, curr)=> sum+curr, 0); 
}
console.log(sliceSum([9, 8, 7, 6], 3) ); //24
console.log(sliceSum([1, 3, 2], 2)); //4
console.log(sliceSum([3, 6, 2], 0)); //0

//rigth

// 3.Spelling it Out////////////////////////////////////////////////////////////////////
// Create a function called 'spelling(str)' which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

spelling("bee") 
spelling("happy") 
function spelling(str) {
    return str.split('').map((element,i)=>str.slice(0,i+1));
}
console.log(spelling("bee"));// ["b", "be", "bee"]
console.log(spelling("happy")); //["h", "ha", "hap", "happ", "happy"]

//rigth

// 4.Hashes and Pluses//////////////////////////////////////////////////////////////////
// Create a function caled "hashPlusCount(str)" that returns the number of hashes and pluses in a string.
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].

function hashPlusCount(str) {
    let newstr = str.split('+').join('').length;
    let newstr1 = str.split('#').join('').length;
    return [newstr, newstr1]
}
  console.log(hashPlusCount("###+")); // [3, 1]
  console.log(hashPlusCount("#+++#+#++#"));// [4, 6]
  console.log(hashPlusCount(""));// [0, 0

    //rigth

////////5.Reverse the Case////////////////////////////////////////////////////////////////////
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.
function reverseCase(str) {
   return str.split('').map((item)=>item.toLowerCase() === item ? item.toUpperCase(): item.toLowerCase()).join('')
}
console.log(reverseCase("Happy Birthday"));//"hAPPY bIRTHDAY"
console.log(reverseCase("MANY THANKS")); //"many thanks"

//rigth




