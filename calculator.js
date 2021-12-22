var num1input=document.getElementById('num1')
var num2input=document.getElementById('num2')
var operator=document.getElementById('operator')
var result = document.getElementById('result')
var button = document.getElementById('button')

//function calculate(){
    //parse int is to convert in integers
//     if(num1input.value==""){
//         alert("enter 1st value")
//     }
//     if(num2input.value==""){
//         alert("enter 2nd value")
//     }
//     num1=Number(num1input.value)
//     num2=Number(num2input.value)
//     op=operator.value
//     if(op==="+"){
//         result.innerHTML=num1+num2
//     }else if(op==="-"){
//         result.value=num1-num2
//     }else if(op==="*"){
//         result.value=num1*num2
//     }else{
//         result.value=num1/num2
//     }
// }
// button.addEventListener('click',calculate)
// //also a method is eventlistener
// button.addEventListener('click',function(){
//     num1=Number(num1input.value)
//     num2=Number(num2input.value)
//     op=operator.value
//     if(op==="+"){
//         result.value=num1+num2
//     }else if(op==="-"){
//         result.value=num1-num2
//     }else if(op==="*"){
//         result.value=num1*num2
//     }else{
//         result.value=num1/num2
//     }
// })
//also we have some evaluating function
function calculate(){
if(num1input.value==="" || num2input.value===""){
    alert("check you entered both numbers")
    result.innerHTML="Number is not entered"
}
else{
    var op=operator.value
    var expression=num1input.value+op+num2input.value
    result.innerHTML=eval(expression)
}
}
button.addEventListener('click',calculate )