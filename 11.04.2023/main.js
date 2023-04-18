//1
number1=[0,1,2,3,4,5,6,7,8,9,10]
console.log(number1);

//2
const number2=[21,false,"Zeynalli"]
console.log(number2);

//3
const number3=[0,1,2,3,4,5]
const number4=number3;
console.log(number4);

//4
const number5=[0,1,2,3,4,5,6,7]
number5.push(8,9);
console.log(number5);

//5
const number6=[]
console.log(number6);
number6.push(5,6,7);
console.log(number6);
number6.shift(5);
console.log(number6);
number6.unshift(2);
console.log(number6);

//6
const number7=["Vilayat","Zeynalli",20,"IMISHLI"]
console.log(number7);


//8
const object1={
    id:1,
    firstname :{
        yourName:"Vilayat"
        
    },
    lastName :{
        surName:"Zeynalli"
    },
    location:{
        University:"GSU_II"
    }
}
 console.log(object1);

 //9
 const object2=Object.assign(object1);
 console.log(object2);

 //10
 object1.id=3

 //11
 for(const value in object1)
 console.log(object1[value]);
 



