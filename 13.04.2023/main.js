//function findDigits(num) {
    //let x= num%10
    //let y= Math.floor((num%100)/10)
   // let x=num%10
    //let y=((num - num%100)/100)
    //let y=((num%100)/10)
    //console.log(x);
    //console.log(y);
//}
//findDigits(345);

///1
const arr1=['a', 'b', 'c', 'd', 'e', 'f', 'j', 'k', 'y', 'u']
function getRandomNumber() {
    return arr1[Math.floor(Math.random()*arr1.length)]
}
console.log(getRandomNumber());

///2
const arr2=[1, 2, 3, 4, 14, 5, 6, 8]
let sum=0;
function calcSum() {
    for (let item of arr2) {
        if(item % 2==0){
            sum+=item;
        }   
    }
    return sum;
}
console.log(calcSum(arr2));

///3
const arr3=[-3, -5, -9, 3, 0 , true, false, -22]
const getPositiveNum=[]
const getPositiveNam = function () {
    for(let num of arr3){
        getPositiveNum.push(Math.abs(num))
    }
    return getPositiveNum;
}
console.log(getPositiveNam(arr3));

///4
const arr4=[4, 9, 16, 20, 24, 43, 81, 100]
const calcSquare=[]
const calcSquareRoot=() => {
    for(let nam of arr4 ){
        calcSquare.push(Math.floor(Math.sqrt(nam)))
    }
   return calcSquare
}
console.log(calcSquareRoot(arr4));

///5
const arr5=[
    {
        name:'Vilayat',
        surname:'Zeynalli',
        city:'IMISHLI'
    },
    {
        name:'Vilayat',
        surname:'Zeynalli',
        city:'IMISHLI'
    },
    {
        name:'Vilayat',
        surname:'Zeynalli',
        city:'IMISHLI'
    }
]
function fillInfo() {
    for(let man of arr5){
        man.name="Ahad",
        man.surname="Haciyev",
        man.city="Gence"
    }
   return arr5
}
console.log(fillInfo());
    
