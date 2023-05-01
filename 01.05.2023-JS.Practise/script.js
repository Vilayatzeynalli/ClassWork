const arr = ["6", 8, NaN, "0", 5, 4, "true", false, 7, "a", undefined, 8, true];

//1.Show only falsy values in 'arr':
// const falseValue=(myArr)=>{
//     let newArr=[];
//     for (i=0;i<myArr.length;i++) {
//     if(!myArr[i]){
//         newArr.push(myArr[i])
//    }
//  }
//     return newArr
// }
// console.log(falseValue(arr));

//2.Show only string values:
// const stringValues=(myArr2)=>{
//     let newArr2=[];
//     for(i=0;i<myArr2.length;i++){
//         if( typeof myArr2[i]==='string'){
//             newArr2.push(myArr2[i])
//         }
//     }
//     return newArr2
// }
// console.log(stringValues(arr));

// //3.Slice array from index 3 to 7(includes both index):
// const sliceArr=(myArr3)=>{
//     let newArr3=[];
//     for(i=3; i<=7; i++){
//         newArr3.push(myArr3[i])
//     }
//     return newArr3
// }
// console.log(sliceArr(arr));

// //4.Sum only number values:
// const SumArr = (myArr4) => {
//   let newArr4 = 0;
//   for (i = 0; i < myArr4.length; i++) {
//     if (typeof myArr4[i] === "number" && myArr4[i]) {
//       newArr4 += myArr4[i];
//     }
//   }
//   return newArr4;
// };
// console.log(SumArr(arr));

// //5.Find last 8's index in 'arr':
// const findLastIndex = (myArr5) => {
//   for (i = myArr5.length; i >= 0; i--) {
//     if (myArr5[i] === 8) {
//       return i;
//     }
//   }
// };
// console.log(findLastIndex(arr));

// //6.Reverse 'arr':
// const reverseArr = (myArr6) => {
//   let newArr6 = [];
//   for (i = myArr6.length - 1; i >= 0; i--) {
//     newArr6.push(myArr6[i]);
//   }
//   return newArr6;
// };
// console.log(reverseArr(arr));

//7.Sort 'arrNum' ascending:
// const arrNum = [3, 1, 22, 0, 12, 11, 9, 8, 10, 14, 41, 55, 51];
// for (i = 0; i < arrNum.length; i++) {
//   let number = arrNum[i];
//   for (j = i - 1; j >= 0 && arrNum[j] > number; j--) {
//     arrNum[j + 1] = arrNum[j];
//   }
//   arrNum[j + 1] = number;
// }
// console.log(arrNum);

//8.Sort 'arrLetters' ascending:
// const arrNum = ["g", "d", "a", "c", "j", "b", "e"];
// for (i = 0; i < arrNum.length; i++) {
//   let number = arrNum[i];
//   for (j = i - 1; j >= 0 && arrNum[j] > number; j--) {
//     arrNum[j + 1] = arrNum[j];
//   }
//   arrNum[j + 1] = number;
// }
// console.log(arrNum);

//9.Flat 'arr9':
// const arr9=[[1,2],[3,4,5],[6,7,8,9]];
// const flatArr=(myArr7)=>{
//     let newArr7=[];
//     for(i=0; i<myArr7.length; i++){
//         for(j=0; j<myArr7[i].length; j++){
//             newArr7.push(myArr7[i][j]);
//         }
//     }
//     return newArr7;
// }
// console.log(flatArr(arr9));

// //create a function that takes two nummbers and a mathematical operator + - / *  and will perform a calculation with the given numbers.
// function calculator(num1,operator,num2) {
//     const operations ={
//         "+":(a,b) => a+b,
//         "-":(a,b) => a-b,
//         "*":(a,b) => a*b,
//         "/":(a,b) =>(b===0 ?  "Can't divide by 0!" : a/b),
//     }
//     const operationsFun=operations[operator];
//      return operationsFun(num1,num2)

// }
// console.log(calculator(2,'+',2));
// console.log(calculator(2,'-',2));
// console.log(calculator(2,'*',2));
// console.log(calculator(2,'/',2));
