let arr =[2,4,-3,-43,41,-3];

function findPositives(arr) {
    return arr.filter((el, index) => el > 0);

}
console.log(findPositives(arr));

//ucbucaqin terefleri verilib

function isrectangle(a,b,c) {
    if(c**2==a**2+b**2 || b**2==a**2+c**2 || a**2==c**2+b**2 ){
        return 'yes';
    }
    else return 'no';
}
console.log(isrectangle(3,4,5));
console.log(isrectangle(3,6,5));
console.log(isrectangle(4,5,3));

//n faktoriali hesablayin:

function faktorial(number) {
    if(number==0 || number==1) 
    return 1;
    for (let i = number-1; i >=1; i--) {
      number*=i
    }
   return number;
}
console.log(faktorial(3));

//
const countries=[ "Finland", "Denmark","Sweden","Azerbaijan","Norway","Iceland" ];
function earth(arr) {
    let lengthsArr=countries.map((el=>el.length))
    return arr.find((el=>el.length===Math.max(...lengthsArr)));
}
console.log(earth(countries));

//
const webTechs=["html", "CSS", "js", "react", "Redux", "Node", "MongDB"];
 console.log( webTechs.find((el)=>el ===el.toLocaleUpperCase() ));
//
let arr2=[
    {
        name:"test",
        key:9
    },
    {
        name:"task",
        key:4
    },
    {
        name:"tanqo",
        key:3
    },
    {
        name:"like",
        key:2
    },
    {
        name:"task",
        key:5
    },
    {
        name:"Trust",
        key:8
    },
    {
        name:"test",
        key:12
    },
    {
        name:"last",
        key:6
    },
    {
        name:"tanqo",
        key:1
    },
    {
        name:"elephant",
        key:13
    },
    {
        name:"Love",
        key:11
    },
    {
        name:"small",
        key:7
    },
    {
        name:"Little",
        key:10
    },
]
console.log(arr2.filter((item)=>item.name.startsWith("t") &&
 item.name.endsWith("t")));
 //
//  let lengthsArr=arr2.concatmap((el)=>el.name.length);
//  let maxLength=Math.max(...lengthsArr);
//  console.log(arr2.find((el)=>el.name.length === maxLength).key);

function findElem(array) {
    return array.filter((item)=>item.key>10 && item.name.toLocaleLowerCase().startsWith("l")) 
}
console.log(findElem(arr2));
    
///
function findMaxKey(array) {
    let keys=array.map((item)=>item.key)
    let max=Math.max(...keys)
    return array.filter((item)=>item.key==max)[0].name
}
console.log(findMaxKey(arr2));

///
