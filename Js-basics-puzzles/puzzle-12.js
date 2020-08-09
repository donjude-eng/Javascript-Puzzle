//Highest number of 2 number
let num1 = 100;
let num2 = 200;

function highestNumberOfTwo(num1, num2){
    if(num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(highestNumberOfTwo(num1, num2));