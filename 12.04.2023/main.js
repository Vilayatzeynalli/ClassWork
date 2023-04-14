///1
let myText="An Array is a collection of items of same data type stored at contiguous memory locations.";

let text=0
for(let i=0; i<myText.length; i++ ){
    if(myText[i] == "a" || myText[i]=="A"){
        text++;
    }
}
console.log(text);

///2
let sum=0
const arr1=[1,2,4,5,7,9,13,22]
for(let i=0; i<arr1.length; i++){
    sum +=arr1[i];
}
console.log(sum);

///3
const arr2=[false, 0 , 2, true, 23, undefined, 'are u stack?', 'come on']
let newArr3=[]
for(let i=0; i<arr2.length; i++){
    if(i % 2 == 1){
        newArr3.push(arr2[i])
    }
}
console.log(newArr3);

///4
let text1='How is it going?';
let text2=" ";
for(let i=0; i<text1.length; i++){
    if(text1[i]){
        text2+=text1[i];
    }
}
console.log(text2);