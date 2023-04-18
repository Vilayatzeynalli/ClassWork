//////////////////1.Splice method:
const arr1=['a', 'b', 'c', 'd', 'e']
//1.
// arr1.splice(1,2)
// console.log(arr1);
//2
// arr1.splice(2,4, "e")
// console.log(arr1);
//3
// arr1.splice(arr1.length-1)
// console.log(arr1);
//4
// arr1.splice(arr1.length-3,3)
// console.log(arr1);
//5
// arr1.splice(3,0,"3","4")
// console.log(arr1);
//6
// arr1.splice(0,2,"A","B")
// console.log(arr1);

///////////////2.Slice method:
const arr2=['user1','user2','user3',11,3,5]
// //1
// const newarr=arr2.slice()
// console.log(newarr);
// //2
// const newarr2=arr2.slice(2)
// console.log(newarr2);
// //3
// const newarr3=arr2.slice(2)
// console.log(newarr3);

// //////////////3.Concat method:
const arr3=[1,2,3]
const arr33=[4,5,6]
// //1
// const number1=arr3.concat(arr33)
// console.log(number1);
// //2
// const number2=arr3.concat('a','b')
// console.log(number2);

// /////////////4.ForEach Method:
const arr4=['Vilayat', 'Zeynalli', 10, '20', 'IMISHLI', 'GDU', 80, 20]
// //1
// arr4.forEach((element) => console.log(element));
// //2
// arr4.forEach((man)=>{
//     if(typeof man == 'number'){
//         console.log(man*2);
//     }
// })

// ////////////5.Map method:
const arr5 = [4,5,6,'2',6, true, undefined, '55']
// //1
// const number3= arr5.map((item) => console.log(item));
//2
// const result=arr5.map((item)=>{
//     if(typeof item=='number'){
//       return  item*5
//     }
//     else return item
// })
// console.log(result);
//3
// const number4 = arr5.map((item) => console.log(String(item)));
// //4
// const number5 = arr5.map((item) => console.log(Boolean(item)));
// //5
// const number6 = arr5.map((item) => console.log(Number(item)));

///////////////6.Filter method:
const mixArray=['1',2,4,'a',false,'9',12,undefined,3,true,null]
//1
// const number7=mixArray.filter((item)=>typeof item =='number')
// console.log(number7);
// //2
// const number8=mixArray.filter((item)=>typeof item =='string')
// console.log(number8);
// //3
// const number9=mixArray.filter((item)=>typeof item =='boolean')
// console.log(number9);

/////////////7.Filter and Map methods:



