//Enter 2 numbers and display the result for the following operations (each operation should be a function)
let num1 = 50;
let num2 = 20;

//Addition
function addition(){
    let sum;
    sum = num1 + num2;
    return sum;
}
//console.log(addition());

//Subtraction
function subtraction(){
    let sum;
    sum = num1 - num2;
    return sum;
}
//console.log(subtraction());

//Division
function division(){
    let sum;
    sum = num1 / num2;
    return sum;
}
//console.log(division());

//Multiplication
function multiplication(){
    let sum;
    sum = num1 * num2;
    return sum;
}
//console.log(multiplication());

//Greater than
function greater(){
    if(num1 > num2){
        return num1
    } else {
        return num2
    }
}
//console.log(greater());

//Less than
function lessThan(){
    if(num1 < num2){
        return num1;
    } else {
        return num2
    }
}
//console.log(lessThan());

//Is equal
function isEqual(){
    if (num1 === num2){
        return num1;
    } else {
        return num2
    }
}
//console.log(isEqual());

