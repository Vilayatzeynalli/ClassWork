//1.Get random color(jQuery).
const colors=['red','green','blue','yellow','orange','brown'];
$("#change").click(function(){
    $("#text").css({color: colors[Math.floor(Math.random()*colors.length)]})
});

//2.
$("#hide").click(function(){
    $("#text").hide();
})
//
$("#show").click(function(){
    $("#text").show();
})

//3.Loop each value in console (jQuery).(each)
$.each(colors, function(index,value){
    console.log(value);
})

//4.Sum only true 'values' index(use map method in Jquery).
const numbers=[4,2,false,null,'false',NaN,undefined,8,true,9];
let sumIndex=0;
$.map(numbers,function(value,index){
    if(value){
        sumIndex+=index;
    }
    return sumIndex;
})
console.log(sumIndex);//29      
